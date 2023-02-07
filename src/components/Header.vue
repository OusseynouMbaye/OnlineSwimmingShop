<template>
  <div class="container header_menu">
    <h2><router-link to="/"> Home Page</router-link></h2>
    <h2><router-link to="/swimsuitman">swim suit man</router-link></h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.header_menu {
  display: flex;
  justify-content: space-between;
}
</style>
