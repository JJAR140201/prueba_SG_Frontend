import axios from 'axios';

const URL = 'http://localhost:8080/invoice-details';

async function obtenerDetalleFactura() {
  try {
    const response = await axios.get(`${URL}/listar`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los Detalle Factura:', error);
    return [];
  }
}

async function obtenerDetalleFacturaPorId(id) {
  try {
    const response = await axios.get(`${URL}/listar/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el Detalle Factura:', error);
    return null;
  }
}

async function registrarDetalleFactura(factura) {
  try {
    await axios.post(`${URL}/registrar`, factura);
    console.log('Detalle Factura registrada correctamente.');
  } catch (error) {
    console.error('Error al registrar la factura:', error);
  }
}

async function actualizarDetalleFactura(id, factura) {
  try {
    await axios.put(`${URL}/actualizar/${id}`, factura);
    console.log('Detalle Factura actualizada correctamente.');
  } catch (error) {
    console.error('Error al actualizar la factura:', error);
  }
}

async function eliminarDetalleFactura(id) {
  try {
    await axios.delete(`${URL}/eliminar/${id}`);
    console.log('Detalle Factura eliminada correctamente.');
  } catch (error) {
    console.error('Error al eliminar la factura:', error);
  }
}