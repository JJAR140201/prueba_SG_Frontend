import axios from 'axios'

const URL = 'http://localhost:8080/products'

async function obtenerTodosLosProductos() {
    try{
        const response = await axios.get(`${URL}/listar`)
        return response.data
    } catch (error) {
        console.error('Error al obtener los productos: ', error)
        return[]
    }
}

async function obtenerTodosLosProductosId(id){
    try{
        const response = await axios.get(`${URL}/listar/${id}`)
        return responde.data
    } catch (error) {
        console.error('Error al obtener el producto por Id: ', error)
        return null
    }
}

async function registrarProducto(producto) {
    try{
        await axios.post(`${URL}/registrar`, producto)
        console.log('Producto Registrado correctamente')
    } catch (error) {
        console.error('No se registro el producto correctamente', error)
    }
}

async function actualizarProducto(id, producto){
    try {
        await axios.put(`${URL}/actualizar/${id}`, producto)
    } catch (error) {
        console.error('No se actualizo el producto correctamente', error)
    }
}

async function eliminarProducto(id){
    try {
        await axios.delete(`${URL}/eliminar/${id}`)
        console.log('Producto eliminado correctamente')
    } catch (error) {
        console.error('No se elimino el producto: ', error)
    }
}