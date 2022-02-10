const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const usuariosController = require('../controllers/usuariosController');




module.exports = function() {

    //agrega nuevos clientes via post
    router.post('/clientes', 
    
        clienteController.nuevoCliente);

    // obtener todos los clientes
    router.get('/clientes', 
   
        clienteController.mostrarClientes);

    // Muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', 
     
        clienteController.mostrarCliente);

    //actualizar cliente
    router.put('/clientes/:idCliente', 
     
        clienteController.actualizarCliente);

    //eliminar cliente
    router.delete('/clientes/:idCliente', 
     
        clienteController.eliminarCliente);


    /** PRODUCTOS */
    //nuevos productos
    router.post('/productos',
     
        productosController.subirArchivo,
        productosController.nuevoProducto
    );

    //Muestra todos los productos
    router.get('/productos', 
  
        productosController.mostrarProductos);


    //Muestra un producto en especifico por su ID
    router.get('/productos/:idProducto', 
    
        productosController.mostrarProducto);

    //Actualizar Productos
    router.put('/productos/:idProducto',
    
        productosController.subirArchivo, 
        productosController.actualizarProducto);

    //eliminar producto
    router.delete('/productos/:idProducto', 
    
        productosController.eliminarProducto);

    //Busqueda de Productos
    router.post('/productos/busqueda/:query', 

        productosController.buscarProducto);

    /*** PEDIDOS */
    // Agrega nuevos pedidos
    router.post('/pedidos/nuevo/:idUsuario', 
 
        pedidosController.nuevoPedido);

    // mostrar todos los pedidos
    router.get('/pedidos', 
   
        pedidosController.mostrarPedidos);

    //mostrar un pedido por ID
    router.get('/pedidos/:idPedido', 

        pedidosController.mostrarPedido);

    //actualizar pedidos
    router.put('/pedidos/:idPedido', 
     
        pedidosController.actualizarPedido);

    //eliminar pedido
    router.delete('/pedidos/:idPedido', 
   
        pedidosController.eliminarPedido);

    // usuarios
    router.post('/crear-cuenta', 
     
        usuariosController.registrarUsuario);

    router.post('/iniciar-sesion', usuariosController.autenticarUsuario);


    return router;
}