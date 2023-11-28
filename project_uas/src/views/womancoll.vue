<script setup>
  import navacc from '../components/navacc.vue'
  import carousel from '../components/carousel.vue';
  import futer2 from '../components/futer2.vue';
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
    <futer2/>
  </footer>
</template>

