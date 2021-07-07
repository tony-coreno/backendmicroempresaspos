const {Router} = require('express');

const router = Router();

const ReportarProblemaCtrl  = require('../controllers/sistema/ReportarProblema.controllers');

router.post('/reportar', ReportarProblemaCtrl.reportarProblema );


module.exports = router