<script setup>
  import navbar from '../components/navbar.vue'
  import cartprdct from '../components/cartprdct.vue'
  import futer from '../components/futer.vue';
  
</script>

<template>
  <header>
    <navbar/>
  </header>
  <div class="container" style="max-width: 2000px">
    <cartprdct/>
  </div>
  <footer>
    <futer/>
  </footer>
</template>

