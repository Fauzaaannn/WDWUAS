<script setup>
  import navbar from '../components/navbar.vue'
  import carousel from '../components/carousel.vue';
  import futer from '../components/futer.vue';
  import filterman from '../components/filterman.vue';
  
</script>

<template>
  <header>
    <navbar/>
  </header>
  <div class="container" style="max-width: 2000px">
    <carousel/>
    <filterman/>
  </div>
  <footer>
    <futer/>
  </footer>
</template>

