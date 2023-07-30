<template></template>

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