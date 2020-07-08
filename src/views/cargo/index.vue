<template>
  <div id="cargo">
    <div id="firstMap"></div>
    <jumbotron></jumbotron>
    <svg-icon icon-class="shamen"></svg-icon>
  </div>
</template>
<script>
import Jumbotron from '@/views/cargo/jumbotron/jumbotron'

export default {
  name: 'cargoHomePage',
  components: { Jumbotron },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  #cargo {
    /* Full screen width and height */
    width: 100%;
    min-height: 100vh;

    /* Centers the container in the middle of the screen */
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/

    /*margin: 0;*/
    /*background-color: rgb(220, 220, 220);*/
  }

  #firstMap {
    height: 180px;
  }
</style>
