//keys.js - figure out what set of credentials to return (dev or prod)

if (process.env.NODE_ENV === 'production') {  //if we are running in production, in Heroku process.env.NODE_ENV will automatically be equal to 'production'
    //we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    //we are in development - return the dev keys
    module.exports = require('./dev');
}


//mongodb+srv://dbUser:nour2992@cluster0-pk3up.azure.mongodb.net/test?retryWrites=true&w=majority
