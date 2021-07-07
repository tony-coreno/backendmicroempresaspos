const { Router } = require("express");

const router = Router();

const IvaCtrl = require("../controllers/sistema/Iva.Controllers");

router.post("/guardar", IvaCtrl.guardarIva);

router.get("/encontrar/:id", IvaCtrl.buscarIva);

router.put("/actualizar", IvaCtrl.actualizar);

module.exports = router;
