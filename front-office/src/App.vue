<template>
  <div id="app">
    <Navbar />
    <Loader v-if="load" />
    <div id="#main" style="min-height: 800px;">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body{ background-color: black; }
*::-webkit-scrollbar{ display: none; }
</style>

<script lang="ts">
import Navbar from '@/components/navbar/navbar.component.vue';
import { Component, Vue, Watch } from 'vue-property-decorator';
import Loader from '@/components/loader/loader.component.vue';

@Component({
  components: { Navbar, Loader },
})
export default class App extends Vue {

  public load = false

  @Watch('$route', {immediate: true})
  public loadPage(): void{
    this.load = true
    setTimeout(() => {
      this.load = false
    }, 800)
  }
  

}
</script>
