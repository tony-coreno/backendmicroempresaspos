const mongoose = require("mongoose");
const { Schema } = mongoose;
const PagosSchema = new Schema({
   nombre: {
     type: String,
     default: "Efectivo",
   },
   estado:{
     type: Boolean,
     default: true,
   },
   jefe: {
     type: String,
     required: [true, "Autorización de un admin es necesario"],
   },
 });

//  pagos: {
//    type: Array,
//    default: [
//      {
//        medio: "Efectivo",
//        estado: true,
//      },
//      {
//        medio: "Tarjeta",
//        estado: true,
//      },
//      {
//        medio: "Vale despensa",
//        estado: true,
//      },
//    ],
//  },
//  jefe: {
//    type: String,
//    required: [true, "Autorización de un admin es necesario"],
//  },
//  });

module.exports = mongoose.model("pago", PagosSchema);
