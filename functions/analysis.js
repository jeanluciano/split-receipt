const skewMargin = 10; //account for the possibility of skewed input

/*
HELPER FUNCTIONS
*/

const stringToArr = str => str.split(',').map(key => Number(key));

const areSimilar = (candidate_ySet, key_ySet, skewMargin) => {
    return key_ySet.every((yKey, index) => {
        return candidate_ySet[index] <= yKey + skewMargin && candidate_ySet[index] >= yKey - skewMargin;
    });
};

const isReceiptItem = text => !Number.isNaN(Number(text)) && text.indexOf('.') !== -1;

const isTotal = text => {
    const formattedText = text.toLowerCase();
    return formattedText === 'total' || formattedText === 'total:' || formattedText === 'amount';
};

const isExtraneousInfo = text => {
    const formattedText = text.toLowerCase();
    return formattedText === 'subtotal' || formattedText === 'subtotal:' || formattedText === 'tip' ||
    formattedText === 'gratuity' || formattedText === 'tax';
}

const adjustLineVertices = (candidateTextVertices, receiptLines) => {

    const candidate_ySet = candidateTextVertices.map(vertex => vertex.y);
    let adjusted_ySet = candidate_ySet;

    Object.keys(receiptLines).forEach(key_ySetString => {
        const key_ySet = stringToArr(key_ySetString); //convert key-string to array
        if (areSimilar(candidate_ySet, key_ySet, skewMargin)) adjusted_ySet = key_ySet; //overwrite adjusted set
    });

    return adjusted_ySet.toString(); //object keys must be strings
};

const extractRelevantText = (data, receiptLines = {}, receiptItem_ySets = new Set(), receiptTotal_ySet = '', extraneousInfo_ySets = new Set()) => {

    //start at 1 to skip over first element containing metadata
    for (let i = 1; i < data.length; i++){

        const textBlock = data[i], candidateTextVertices = textBlock.boundingPoly.vertices;
        const description = textBlock.description[0] === '$' ? textBlock.description.slice(1) : textBlock.description; //format price if '$' is attached
        const dumb_vert = candidateTextVertices.map(vertex => vertex.y);

        const candidate_xSet = candidateTextVertices.map(vertex => vertex.x);
        const candidateObj = { xSet: candidate_xSet, description };
        // console.log('desc', description, dumb_vert);
        const keyVertices = adjustLineVertices(candidateTextVertices, receiptLines);
        // console.log('desc', description, keyVertices);

        if (!receiptLines[keyVertices]) receiptLines[keyVertices] = [candidateObj];
        else receiptLines[keyVertices].push(candidateObj);

        if (isTotal(description)) {
            receiptTotal_ySet = keyVertices;
            receiptItem_ySets.delete(keyVertices); //delete from receipt items if added
        }

        if (isExtraneousInfo(description)) {
            extraneousInfo_ySets.add(keyVertices);
            receiptItem_ySets.delete(keyVertices); //we don't want subtotal, tax, gratuity to be counted towards receipt items
        }

        if (isReceiptItem(description) && !extraneousInfo_ySets.has(keyVertices) && !receiptTotal_ySet) receiptItem_ySets.add(keyVertices);

    }

    return { receiptLines, receiptItem_ySets, receiptTotal_ySet };
};

/*
ANALYZE RECEIPT
*/

module.exports = async (data) => {

    // console.log('dataaaaaa', data[0]);

    const { receiptLines, receiptItem_ySets, receiptTotal_ySet } = extractRelevantText(data);
    const analyzedReceiptObj = [];

    for (let ySet of receiptItem_ySets) {
        const lineItemData = receiptLines[ySet];
        const lineItemDescriptions = lineItemData.map(lineItem => lineItem.description);
        const lineItem_xULCoordinates = lineItemData.map(lineItem => lineItem.xSet[0]);

        const priceIndex = lineItem_xULCoordinates.findIndex(ele => ele === Math.max(...lineItem_xULCoordinates));
        const duplicityIndex = lineItem_xULCoordinates.findIndex(ele => ele === Math.min(...lineItem_xULCoordinates));

        const price = Number(lineItemDescriptions[priceIndex]);
        const possDuplicity = Number(lineItemDescriptions[duplicityIndex].match(/\d+/));
        const duplicity = possDuplicity < 11 && possDuplicity > 0 ? possDuplicity : 1; //menu number may sometimes prepend item (Ex: 44 Ginger Lover); this is a small/basic safeguard
        const item = lineItemDescriptions.join(' ').replace(/[\d.]/g, '');

        for (let i = 0; i < duplicity; i++) {
            analyzedReceiptObj.push({ price: price / duplicity, item, duplicity });
        }

    }

    const isTotalPrice = isReceiptItem; //reuse previously-declared function here
    const totalLineItemData = receiptLines[receiptTotal_ySet] || [];
    let totalPrice = [ { description: '0.00' }]; //accounts for edge case where references to 'total' are > 1 as in the case of /tests/images/image6
    if (totalLineItemData.length > 1) {
        totalPrice = totalLineItemData.filter(lineItem => {
            // console.log('lineitem', lineItem);
            return isTotalPrice(lineItem.description.replace(/\D/g,'.'));
            // console.log('yes or no', isTotalPrice(lineItem.description.replace(/\D/g,'.')))
        }); //ocr may read 54.50 as 54,50 sometimes
        // console.log('inside totalPrice', totalPrice);
    }

    totalPrice = totalPrice.length ? totalPrice : [ { description: '0.00' }];
    // console.log('totalPrice[0]', totalPrice[0]);
    analyzedReceiptObj.push( { price: Number(totalPrice[0].description.replace(/\D/g,'.')), 'item': 'total' } );

    // console.log('receipt data', analyzedReceiptObj);
    return analyzedReceiptObj;
}
