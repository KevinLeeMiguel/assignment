<template>
  <div id="app" class="h-mt-2 h-mx-20">
    <NewProduct />
  </div>
</template>

<script>
import NewProduct from "./views/new_product";

export default {
  name: "App",
  components: {
    NewProduct
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
