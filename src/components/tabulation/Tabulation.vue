<template>
  <Layout
    :breakpoint="layoutConfig.breakpoint||''"
    :value="layoutConfig.value||false"
    :width="layoutConfig.width||200"
    :collapsible="layoutConfig.collapsible||false"
    :collapsed-width="layoutConfig.collapsedWidth||64"
    :hide-trigger="layoutConfig.hideTrigger||false"
    :default-collapsed="layoutConfig.defaultCollapsed||false"
    :reverse-arrow="layoutConfig.reverseArrow||false"
    @on-collapse="layoutConfig.collapseEvent"
    class="tabulation">
    <div class="header"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </Layout>
</template>
<script>
export default {
  name: 'tabulation',
  data () {
    return {}
  },
  props: ['layoutConfig']
}
</script>
