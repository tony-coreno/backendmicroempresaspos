const ReportarProblemaCtrl = {};
const Reportar = require("../../models/ReportarProblema.model");

//Controlador para reportar el problema

ReportarProblemaCtrl.reportarProblema = async (req, res) => {
  const { problema, usuario, jefe, fecha, fecharegistro } = req.body;
  const NuevoProblema = new Reportar({
    problema,
    usuario,
    jefe,
    fecha,
    fecharegistro,
  });
  await NuevoProblema.save();
  res.json({
    mensaje: "Reporte guardado",
    id: NuevoProblema._id,
    problema: NuevoProblema.problema,
    usuario: NuevoProblema.usuario,
  });
};

module.exports = ReportarProblemaCtrl;
