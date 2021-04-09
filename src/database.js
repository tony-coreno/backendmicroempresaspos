const mongoose = require('mongoose');
 URI = ('mongodb://localhost/pos');
// URI =(`mongodb+srv://admin:adminf@pos.sdk0h.mongodb.net/pos?retryWrites=true&w=majority`)
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(db=>console.log('Base de datos conectada'))
.catch(error=>console.log(error))

module.exports = mongoose;