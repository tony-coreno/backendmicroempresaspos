const mongoose = require('mongoose');
 //URI = ('mongodb://localhost/pos');
URI =(process.env.MONGO)
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(db=>console.log('Base de datos conectada'))
.catch(error=>console.log(error))

module.exports = mongoose;