<script setup>
  import navacc from '../components/navacc.vue'
  import cartprdct from '../components/cartprdct.vue'
  import futer from '../components/futer.vue';
  
</script>

<template>
  <header>
    <navacc/>
  </header>
  <div class="container" style="max-width: 2000px">
    <cartprdct/>
  </div>
  <footer>
    <futer/>
  </footer>
</template>

