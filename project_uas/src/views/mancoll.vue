<script setup>
  import navacc from '../components/navacc.vue'
  import carousel from '../components/carousel.vue';
  import futer2 from '../components/futer2.vue';
  import filterman from '../components/filterman.vue';
  
</script>

<template>
  <header>
    <navacc/>
  </header>
  <div class="container" style="max-width: 2000px">
    <carousel/>
    <filterman/>
  </div>
  <footer>
    <futer2/>
  </footer>
</template>

