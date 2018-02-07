/* eslint-disable */
<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import Sorter from './components/Sorter.vue'
/*
 * Root component
 */
export default {
   components: { Sorter }
}
</script>

<style></style>
