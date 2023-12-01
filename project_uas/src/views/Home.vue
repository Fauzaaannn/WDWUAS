<script setup>
  import navbar from '../components/navbar.vue'
  import carousel from '../components/carousel.vue';
  import card2 from '../components/card2.vue';
  import collection2 from '../components/collection2.vue';
  import futerlog from '../components/futerlog.vue';
  
</script>

<template id="home">
  <header>
    <navbar/>
  </header>
  <div class="container" style="max-width: 2000px">
    <carousel/>
    <collection2/>
    <card2/>
  </div>
  <footer>
    <futerlog/>
  </footer>
</template>



