<script setup>
  import navacc from '../components/navacc.vue'
  import carousel from '../components/carousel.vue';
  import card from '../components/card.vue';
  import collection from '../components/collection.vue';
  import futer2 from '../components/futer2.vue';
  
</script>

<template id="home">
  <header>
    <navacc/>
  </header>
  <div class="container" style="max-width: 2000px;">
    <carousel/>
    <collection/>
    <card/>
  </div>
  <footer>
    <futer2/>
  </footer>
</template>



