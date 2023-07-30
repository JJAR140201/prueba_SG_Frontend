<template>
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      <li v-for="producto in productos" :key="producto.id">
        {{ producto.nombre }} - {{ producto.precio }}
        <button @click="eliminarProducto(producto.id)">Eliminar</button>
      </li>
    </ul>
  </div>
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