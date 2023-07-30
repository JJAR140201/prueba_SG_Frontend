<template>
    <div>
      <h2>Detalle de Factura</h2>
      <ul>
        <li v-for="detalle in detalles" :key="detalle.id">
          {{ detalle.descripcion }} - {{ detalle.cantidad }} - {{ detalle.precio }}
          <button @click="eliminarDetalleFactura(detalle.id)">Eliminar</button>
        </li>
      </ul>
    </div>
</template>

<script>
import { obtenerDetalleFactura, eliminarDetalleFactura } from '../services/DetalleFacturaService';

export default {
    data() {
        return {
            detalles: [],
        };
    },
    created() {
        this.obtenerDetalles();
    },
    methods: {
        async obtenerDetalles() {
            try {
                this.detalles = await obtenerDetalleFactura();
            } catch (error) {
                console.error('Error al obtener los detalles de factura: ', error);
            }
        },
        async eliminarDetalleFactura(id) {
            try {
                await eliminarDetalleFactura(id);
                this.obtenerDetalles();
            } catch (error) {
                console.error('Error al eliminar el detalle de factura: ', error);
            }
        },
    },
};
</script>

<style></style>