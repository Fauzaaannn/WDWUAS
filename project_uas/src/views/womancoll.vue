<script setup>
  import navacc from '../components/navacc.vue'
  import carousel from '../components/carousel.vue';
  import futer from '../components/futer.vue';
  import filterwoman from '../components/filterwoman.vue';
  
</script>

<template>
  <header>
    <navacc/>
  </header>
  <div class="container" style="max-width: 2000px">
    <carousel/>
    <filterwoman/>
  </div>
  <footer>
    <futer/>
  </footer>
</template>

