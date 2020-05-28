<template>
  <div class="btns">
    <Button
      :append="btn.append || false"
      :class="btn.editStyle ? data.btnClass : ''"
      :custom-icon="btn.customIcon || ''"
      :disabled="btn.disabled || false"
      :ghost="btn.ghost || false"
      :html-type="btn.htmlType || 'button'"
      :icon="btn.icon || ''"
      :key="`btn_${index}`"
      :loading="btn.loading || false"
      :long="btn.long || false"
      :replace="btn.replace || false"
      :shape="btn.shape"
      :size="btn.size || 'default'"
      :target="btn.target || '_self'"
      :to="btn.to || ''"
      :type="btn.type || 'default'"
      @click.stop="triggerEvent(btn.event)"
      v-for="(btn, index) in getButtonLists.commonButtons">
      {{ btn.editStyle ? data.btnName : btn.name }}
    </Button>
    <Dropdown
      @on-click="handleCommand"
      trigger="click"
      v-if="getButtonLists.moreButtons.length > 0">
      <Tooltip class="item" content="更多功能" placement="right-start" theme="dark">
        <Button size="default">
          <Icon size="24" type="ios-more"/>
        </Button>
      </Tooltip>
      <DropdownMenu slot="list">
        <DropdownItem
          :disabled="btn.disabled"
          :key="`btn_${index}`"
          :name="btn.id"
          v-for="(btn, index) in getButtonLists.moreButtons">
          <Icon type="ios-loading" v-if="btn.loading || false"/>
          {{ btn.name }}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  name: 'ButtonList',
  props: ['buttonList', 'data', 'buttonCheckEvent'],
  data () {
    return {}
  },
  computed: {
    getButtonLists () {
      let array = {
        commonButtons: [],
        moreButtons: []
      }
      this.buttonList.forEach(element => {
        element.disabled = (this.buttonCheckEvent && this.buttonCheckEvent(element.id)) || false
        if (element.show !== false) {
          if (!element.hideInMore) {
            array.commonButtons.push(element)
          } else {
            array.moreButtons.push(element)
          }
        }
      })
      return array
    }
  },
  methods: {
    triggerEvent (event) {
      if (this.data) {
        event(this.data)
      } else {
        event()
      }
    },
    handleCommand (name) {
      this.getButtonLists.moreButtons.forEach(element => {
        if (element.id === name) {
          this.triggerEvent(element.event)
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
