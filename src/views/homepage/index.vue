<template>
  <transition mode="out-in" name="fade">
    <keep-alive v-if="isRouterActive && $route.meta.keepAlive">
      <router-view/>
    </keep-alive>
    <router-view v-if="isRouterActive && !$route.meta.keepAlive"/>
  </transition>
</template>
<script>
export default {
  name: 'index',
  components: {},
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterActive: true
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    reload: function () {
      this.isRouterActive = false
      this.$nextTick(function () {
        this.isRouterActive = true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .index {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
</style>
