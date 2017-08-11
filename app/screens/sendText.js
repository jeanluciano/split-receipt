
// Twilio Credentials 
var accountSid = 'ACe71ddcb11ba1f9c730996b33aec1bf7f'; 
var authToken = 'your_auth_token'; 
 
//require the Twilio module and create a REST client 
import twilio from 'twilio'(accountSid, authToken);
 
client.messages.create({ 
    to: "+15558675309", 
    from: "+15017250604", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
});