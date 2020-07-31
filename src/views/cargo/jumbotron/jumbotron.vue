<template>
  <div id="container">
    <div id="inner">
      <div>
        <img alt class="inner-plant-2" src="../../../assets/images/png/plant2.png">
        <img alt class="inner-web" src="../../../assets/images/png/web.png">
        <img alt class="inner-plant-1" src="../../../assets/images/png/plant.png">
        <img alt class="inner-nod" src="../../../assets/images/png/nod.png">
        <img alt class="inner-nod-1" src="../../../assets/images/png/nod1.png">
      </div>
      <div>
        <img alt class="inner-cloud-1" src="../../../assets/images/png/cloud1.png">
        <img alt class="inner-cloud-2" src="../../../assets/images/png/cloud.png">
      </div>
      <div>
        <img alt class="inner-windows-1" src="../../../assets/images/png/windows1.png">
        <img alt class="inner-windows-2" src="../../../assets/images/png/windows2.png">
        <img alt class="inner-windows-3" src="../../../assets/images/png/windows3.png">
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
    width: 49.444rem;
    height: 25.833rem;
    margin: 1.667rem auto;
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
      height: 21.389rem;
      top: 1.944rem;
      left: 6.111rem;
    }

    .inner-plant-2 {
      left: 3.333rem;
      top: 11.111rem;
    }

    .inner-plant-1 {
      bottom: 0;
      left: 1.667rem;
      height: 10.278rem;
    }

    .inner-nod {
      bottom: 0;
      right: 10rem;
      height: 7.778rem;
    }

    .inner-nod-1 {
      bottom: 0;
      right: 0.556rem;
      height: 3.778rem;
    }

    .inner-cloud-2 {
      right: 0;
      top: 0;
      height: 3.056rem;
    }

    .inner-cloud-1 {
      left: 0;
      top: 2.778rem;
      height: 3.056rem;
    }

    .inner-windows-2 {
      left: 5.222rem;
      height: 5rem;
      top: 12.222rem;
    }

    .inner-windows-1 {
      right: 4.056rem;
      top: 3.333rem;
      height: 6.889rem
    }

    .inner-windows-3 {
      right: 2.333rem;
      top: 11.111rem;
      height: 6.667rem;
    }
  }

  @media (max-width: 49.833rem) {
    #inner {
      width: calc(49.444rem * 50%);
      height: calc(25.833rem * 50%);
    }
    .inner-plant-2 {
      transform: scale(0.5, 0.5) translate(350px, -150px);
    }

    .inner-plant-1 {
      transform: scale(0.5, 0.5) translate(350px, -150px);
    }

    .inner-nod {
      transform: scale(0.5, 0.5) translate(-300px, -150px);
    }

    .inner-nod-1 {
      transform: scale(0.5, 0.5) translate(-400px, -200px);
    }
    .inner-cloud-1 {
      transform: scale(0.5, 0.5) translate(420px, 0px);
    }
    .inner-windows-2 {
      transform: scale(0.5, 0.5) translate(240px, 0px);
    }

    .inner-windows-1, .inner-windows-3, .inner-cloud-2 {
      transform: scale(0.5, 0.5) translate(-400px, 0px);
    }

    img {
      transform: scale(0.5, 0.5);
      transition: 0.3s all ease-in;
    }
  }
</style>
