import axios from 'axios';

const URL = 'http://localhost:8080/invoices';

async function obtenerTodasLasFacturas() {
  try {
    const response = await axios.get(`${URL}/listar`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las facturas:', error);
    return [];
  }
}

async function obtenerFacturaPorId(id) {
  try {
    const response = await axios.get(`${URL}/listar/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la factura:', error);
    return null;
  }
}

async function registrarFactura(factura) {
  try {
    await axios.post(`${URL}/registrar`, factura);
    console.log('Factura registrada correctamente.');
  } catch (error) {
    console.error('Error al registrar la factura:', error);
  }
}

async function actualizarFactura(id, factura) {
  try {
    await axios.put(`${URL}/actualizar/${id}`, factura);
    console.log('Factura actualizada correctamente.');
  } catch (error) {
    console.error('Error al actualizar la factura:', error);
  }
}

async function eliminarFactura(id) {
  try {
    await axios.delete(`${URL}/eliminar/${id}`);
    console.log('Factura eliminada correctamente.');
  } catch (error) {
    console.error('Error al eliminar la factura:', error);
  }
}