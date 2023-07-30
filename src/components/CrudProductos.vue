<template>

</template>

<script>
import { obtenerTodosLosProductos, eliminarProducto } from '../services/ProductService';

export default {
  data() {
    return {
      productos: [],
    };
  },
  created() {
    this.obtenerProductos();
  },
  methods: {
    async obtenerProductos() {
      try {
        this.productos = await obtenerTodosLosProductos();
      } catch (error) {
        console.error('Error al obtener los productos: ', error);
      }
    },
    async eliminarProducto(id) {
      try {
        await eliminarProducto(id);
        this.obtenerProductos();
      } catch (error) {
        console.error('Error al eliminar el producto: ', error);
      }
    },
  },
};
</script>

<style>

</style>