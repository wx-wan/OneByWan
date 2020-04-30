<template>
  <div id="container">
    <div id="inner">
      <div>
        <img alt class="inner-plant-2" src="../../../assets/png/plant2.png">
        <img alt class="inner-web" src="../../../assets/png/web.png">
        <img alt class="inner-plant-1" src="../../../assets/png/plant.png">
        <img alt class="inner-nod" src="../../../assets/png/nod.png">
        <img alt class="inner-nod-1" src="../../../assets/png/nod1.png">
      </div>
      <div>
        <img alt class="inner-cloud-1" src="../../../assets/png/cloud1.png">
        <img alt class="inner-cloud-2" src="../../../assets/png/cloud.png">
      </div>
      <div>
        <img alt class="inner-windows-1" src="../../../assets/png/windows1.png">
        <img alt class="inner-windows-2" src="../../../assets/png/windows2.png">
        <img alt class="inner-windows-3" src="../../../assets/png/windows3.png">
      </div>
    </div>
  </div>
</template>
<script>
import perspective from '../utils/perspective'

export default {
  name: 'jumbotron',
  mounted () {
    perspective()
  }
}
</script>
<style lang="scss" scoped>
  #container {
    /*width: 890px;*/
    /*height: 465px;*/
    /*margin: 30px auto;*/
    /* This will come into play later */
    /*perspective: 80px;*/
  }

  img {
    position: absolute;
  }

  #inner {
    width: 890px;
    height: 465px;
    margin: 30px auto;
    position: relative;
    transition: all 300ms;
    /*position: relative;*/

    div {
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
    }

    .inner-web {
      height: 385px;
      top: 35px;
      left: 110px;
    }

    .inner-plant-2 {
      left: 60px;
      top: 200px;
    }

    .inner-plant-1 {
      bottom: 0;
      left: 30px;
      height: 185px;
    }

    .inner-nod {
      bottom: 0;
      right: 180px;
      height: 140px;
    }

    .inner-nod-1 {
      bottom: 0;
      right: 10px;
      height: 68px;
    }

    .inner-cloud-2 {
      right: 0;
      top: 0;
      height: 55px;
    }

    .inner-cloud-1 {
      left: 0;
      top: 50px;
      height: 55px;
    }

    .inner-windows-2 {
      left: 94px;
      height: 90px;
      top: 220px;
    }

    .inner-windows-1 {
      right: 73px;
      top: 60px;
      height: 124px
    }

    .inner-windows-3 {
      right: 42px;
      top: 200px;
      height: 120px;
    }
  }
</style>
