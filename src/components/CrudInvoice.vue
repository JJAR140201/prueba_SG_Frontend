<template>
    <div>
      <h2>Facturas</h2>
      <ul>
        <li v-for="factura in facturas" :key="factura.id">
          {{ factura.numero }} - {{ factura.fecha }} - {{ factura.total }}
          <button @click="eliminarFactura(factura.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>

<script>
import { obtenerTodasLasFacturas, eliminarFactura } from '../services/FacturaService';

export default {
    data() {
        return {
            facturas: [],
        };
    },
    created() {
        this.obtenerFacturas();
    },
    methods: {
        async obtenerFacturas() {
            try {
                this.facturas = await obtenerTodasLasFacturas();
            } catch (error) {
                console.error('Error al obtener las facturas: ', error);
            }
        },
        async eliminarFactura(id) {
            try {
                await eliminarFactura(id);
                this.obtenerFacturas();
            } catch (error) {
                console.error('Error al eliminar la factura: ', error);
            }
        },
    },
};
</script>

<style></style>