<template>
  <div id="app">
    <Navbar />
    <div id="#main" style="min-height: 800px;">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body{
  background-color: black;
}
</style>

<script lang="ts">
import Navbar from '@/components/navbar/navbar.component.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Navbar },
})
export default class App extends Vue {}
</script>
