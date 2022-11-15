const express = require("express");
const {
  obtenerProductos,
  obtenerProductoPorId,
  cargarProducto,
  editarProducto,
  eliminarProducto,
} = require("../controllers/productoController");

const router = express.Router();

// middlewares requeridos
const { validarId } = require("../middleware/validarId");
const { check } = require("express-validator");

/* GET users listing. */
router.get("/lista", obtenerProductos);
router.get("/id/:id", validarId, obtenerProductoPorId);

// Posts (crear recursos)

router.post(
  "/crear",
  [
    check("codigo")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacio"),
    check("descripcion")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacio"),
    check("marca").not().isEmpty().withMessage("El campo no puede estar vacio"),
    check("precio")
      .isNumeric()
      .withMessage("El precio debe ser de tipo numérico")
      .isLength({ min: 1, max: 5 })
      .withMessage("El precio ingresado debe ser máximo 5 dígitos"),
  ],
  cargarProducto
);

//Put: actualización de producto
router.put(
  "/editar/:id",
  validarId,
  [
    check("codigo")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacio"),
    check("descripcion")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacio"),
    check("marca").not().isEmpty().withMessage("El campo no puede estar vacio"),
    check("precio")
      .isNumeric()
      .withMessage("El precio debe ser de tipo numérico")
      .isLength({ min: 1, max: 5 })
      .withMessage("El precio ingresado debe ser máximo 5 dígitos"),
  ],
  editarProducto
);

//Delete: eliminar producto

router.delete("/eliminar/:id", validarId, eliminarProducto);

module.exports = router;
