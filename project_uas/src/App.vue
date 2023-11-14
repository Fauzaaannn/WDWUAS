<script setup>
  import navbar from './components/navbar.vue'
  import carousel from './components/carousel.vue';
  import card from './components/card.vue';
  import futer from './components/futer.vue';
  
</script>

<template>
  <header>
    <navbar/>
  </header>
  <div class="container" style="max-width: 2000px">
    <carousel/>
    <card/>
  </div>
  <footer>
    <futer/>
  </footer>
</template>

