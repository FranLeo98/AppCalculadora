const mongoose = require('mongoose');
const URI = 'mongodb+srv://rootadmin:calc24xd@appcalculadora.bs6k4j0.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URI)
.then(db=>console.log('BD conectada woo'))
.catch(err=>console.error(err))
module.exports = mongoose;