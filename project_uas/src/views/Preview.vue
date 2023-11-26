<script setup>
  import navacc from '../components/navacc.vue'
  import preview from '../components/preview.vue'
  import futer from '../components/futer.vue';
  
</script>

<template>
  <header>
    <navacc/>
  </header>
  <div class="container" style="max-width: 2000px">
    <preview/>
  </div>
  <footer>
    <futer/>
  </footer>
</template>

