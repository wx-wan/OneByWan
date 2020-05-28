<template>
  <div class="search-bar">
    <div :key="`search_${index}`" class="search-item" v-for="(item, index) in searchList">
      <span v-if="!item.hideSearchName">{{ item.name }}</span>
      <div class="layout-inline" v-if="item.type !== 'empty'">
        <DatePicker
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :confirm="item.confirm || false"
          :disabled="item.disabled || false"
          :editable="item.editable || true"
          :element-id="item.elementId"
          :format="item.format || 'yyyy-MM-dd'"
          :open="item.open || null"
          :options="item.options"
          :placeholder="item.placeholder || ''"
          :placement="item.placement || 'bottom-start'"
          :readonly="item.readonly || false"
          :separator="item.separator || ' ~ '"
          :show-week-numbers="item.showWeeknNumbers || false"
          :size="item.size || 'default'"
          :split-panels="item.splitPanels || false"
          :start-date="item.startDate"
          :style="item.style"
          :time-picker-options="item.timePickerOptions"
          :transfer="item.transfer || false"
          @on-change="autoSubmit"
          class="search-date-range"
          type="daterange"
          v-if="item.type === 'daterange'"
          v-model="search[item.id]"
        >
          <slot :data="item" :name="item.id" v-if="item.slotFlag || false"></slot>
        </DatePicker>
        <DatePicker
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :confirm="item.confirm || false"
          :disabled="item.disabled || false"
          :editable="item.editable || true"
          :element-id="item.elementId"
          :format="item.format || 'yyyy-MM-dd HH:mm:ss'"
          :open="item.open || null"
          :options="item.options"
          :placeholder="item.placeholder || ''"
          :placement="item.placement || 'bottom-start'"
          :readonly="item.readonly || false"
          :separator="item.separator || ' ~ '"
          :show-week-numbers="item.showWeeknNumbers || false"
          :size="item.size || 'default'"
          :split-panels="item.splitPanels || false"
          :start-date="item.startDate"
          :style="item.style"
          :time-picker-options="item.timePickerOptions"
          :transfer="item.transfer || false"
          @on-change="autoSubmit"
          class="search-date-timerange"
          type="datetimerange"
          v-else-if="item.type === 'datetimerange'"
          v-model="search[item.id]"
        >
          <slot :data="item" :name="item.id" v-if="item.slotFlag || false"></slot>
        </DatePicker>
        <DatePicker
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :confirm="item.confirm || false"
          :disabled="item.disabled || false"
          :editable="item.editable || true"
          :element-id="item.elementId"
          :format="item.format || 'yyyy-MM-dd HH:mm:ss'"
          :open="item.open || null"
          :options="item.options"
          :placeholder="item.placeholder || ''"
          :placement="item.placement || 'bottom-start'"
          :readonly="item.readonly || false"
          :separator="item.separator || ' ~ '"
          :show-week-numbers="item.showWeeknNumbers || false"
          :size="item.size || 'default'"
          :start-date="item.startDate"
          :style="item.style"
          :time-picker-options="item.timePickerOptions"
          :transfer="item.transfer || false"
          @on-change="autoSubmit"
          class="search-date-time"
          type="datetime"
          v-else-if="item.type === 'datetime'"
          v-model="search[item.id]"
        >
          <slot :data="item" :name="item.id" v-if="item.slotFlag || false"></slot>
        </DatePicker>
        <DatePicker
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :confirm="item.confirm || false"
          :disabled="item.disabled || false"
          :editable="item.editable || true"
          :element-id="item.elementId"
          :format="item.format || 'yyyy-MM-dd'"
          :multiple="item.multiple || false"
          :open="item.open || null"
          :options="item.options"
          :placeholder="item.placeholder || ''"
          :placement="item.placement || 'bottom-start'"
          :readonly="item.readonly || false"
          :separator="item.separator || ' ~ '"
          :show-week-numbers="item.showWeeknNumbers || false"
          :size="item.size || 'default'"
          :start-date="item.startDate"
          :style="item.style"
          :time-picker-options="item.timePickerOptions"
          :transfer="item.transfer || false"
          @on-change="autoSubmit"
          class="search-date-date"
          type="date"
          v-else-if="item.type === 'date'"
          v-model="search[item.id]"
        >
          <slot :data="item" :name="item.id" v-if="item.slotFlag || false"></slot
          >
        </DatePicker>
        <DatePicker
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :confirm="item.confirm || false"
          :disabled="item.disabled || false"
          :editable="item.editable || true"
          :element-id="item.elementId"
          :format="item.format || 'yyyy-MM-dd'"
          :open="item.open || null"
          :options="item.options"
          :placeholder="item.placeholder || ''"
          :placement="item.placement || 'bottom-start'"
          :readonly="item.readonly || false"
          :separator="item.separator || ' ~ '"
          :show-week-numbers="item.showWeeknNumbers || false"
          :size="item.size || 'default'"
          :start-date="item.startDate"
          :style="item.style"
          :time-picker-options="item.timePickerOptions"
          :transfer="item.transfer || false"
          @on-change="autoSubmit"
          class="search-date-year"
          type="year"
          v-else-if="item.type === 'year'"
          v-model="search[item.id]"
        >
          <slot :data="item" :name="item.id" v-if="item.slotFlag || false"></slot
          >
        </DatePicker>
        <DatePicker
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :confirm="item.confirm || false"
          :disabled="item.disabled || false"
          :editable="item.editable || true"
          :element-id="item.elementId"
          :format="item.format || 'yyyy-MM-dd'"
          :open="item.open || null"
          :options="item.options"
          :placeholder="item.placeholder || ''"
          :placement="item.placement || 'bottom-start'"
          :readonly="item.readonly || false"
          :separator="item.separator || ' ~ '"
          :show-week-numbers="item.showWeeknNumbers || false"
          :size="item.size || 'default'"
          :start-date="item.startDate"
          :style="item.style"
          :time-picker-options="item.timePickerOptions"
          :transfer="item.transfer || false"
          @on-change="autoSubmit"
          class="search-date-month"
          type="month"
          v-else-if="item.type === 'month'"
          v-model="search[item.id]"
        >
          <slot :data="item" :name="item.id" v-if="item.slotFlag || false"></slot
          >
        </DatePicker>
        <Select
          :allow-create="item.allowCreate || false"
          :capture="item.capture || true"
          :clearable="item.clearable || true"
          :disabled="item.disabled || false"
          :element-id="item.elementId"
          :filterable="item.filterable || true"
          :label="item.label || ''"
          :label-in-value="item.labelInValue || false"
          :loading="item.loading || false"
          :loading-text="item.loadingText || '加载中'"
          :max-tag-count="item.maxTagCount"
          :max-tag-placeholder="item.maxTagPlaceholder"
          :multiple="item.multiple || false"
          :not-found-text="item.notFoundText || '无匹配数据'"
          :placeholder="item.placeholder || '请选择'"
          :placement="item.placement || 'bottom-start'"
          :prefix="item.prefix || ''"
          :remote="item.remote || false"
          :remote-method="item.remoteMethod"
          :size="item.size || 'default'"
          :transfer="item.transfer || false"
          :transfer-class-name="item.transferClassName || ''"
          @on-change="autoSubmit"
          v-else-if="item.type === 'select'"
          v-model="search[item.id]"
        >
          <slot :data="item.prefix" name="prefix" v-if="item.prefixSoltFlag || false"></slot>
          <Option
            :disabled="option.disabled || false"
            :key="option.key"
            :label="option.value"
            :tag="option.tag || option.value"
            :value="option.key"
            v-for="option in item.options"
          >
            <slot :data="option" :name="item.id" v-if="item.slotFlag || false"></slot>
            <span v-else>{{ option.value }}</span>
          </Option>
        </Select>
        <Cascader
          :change-on-select="item.changeOnSelect || false"
          :clearable="item.clearable || true"
          :data="item.options"
          :disabled="item.disabled || false"
          :element-id="item.elementId"
          :filterable="item.filterable || true"
          :load-data="item.loadData"
          :not-found-text="item.notFoundText || '无匹配数据'"
          :placeholder="item.placeholder || '请选择'"
          :render-format="item.renderFormat"
          :size="item.size || 'default'"
          :transfer="item.transfer || false"
          :trigger="item.trigger || 'click'"
          v-else-if="item.type === 'cascader'"
          v-model="search[item.id]"
        ></Cascader>
        <RadioGroup
          :size="item.size || 'default'"
          :type="item.radioType"
          :vertical="item.vertical || false"
          @on-change="autoSubmit"
          v-else-if="item.type === 'radioGroup'"
          v-model="search[item.id]"
        >
          <Radio
            :border="option.border || false"
            :disabled="option.disabled || false"
            :false-value="option.falseValue || false"
            :key="option.key"
            :label="option.key"
            :size="option.size || 'default'"
            :true-value="option.trueValue || true"
            v-for="option in item.options"
          >
            <slot :data="option" :name="option.slotId" v-if="option.slotFlag || false"></slot>
            <span v-else>{{ option.value }}</span>
          </Radio>
        </RadioGroup>
        <CheckboxGroup
          :size="item.size || 'default'"
          v-else-if="item.type === 'checkboxGroup'"
          v-model="search[item.id]"
        >
          <Checkbox
            :border="option.border || false"
            :disabled="option.disabled || false"
            :false-value="option.falseValue || false"
            :indeterminate="option.indeterminate || false"
            :key="option.key"
            :label="option.key"
            :size="option.size || 'default'"
            :true-value="option.trueValue || true"
            @on-change="autoSubmit"
            v-for="option in item.options"
          >
            {{ option.value }}
          </Checkbox>
        </CheckboxGroup>
        <Button
          :append="item.append || false"
          :class="item.class || ''"
          :custom-icon="item.customIcon || ''"
          :disabled="item.disabled || false"
          :ghost="item.ghost || false"
          :html-type="item.htmlType || 'button'"
          :icon="item.icon || ''"
          :loading="item.loading || false"
          :long="item.long || false"
          :replace="item.replace || false"
          :shape="item.shape"
          :size="item.size || 'default'"
          :target="item.target || '_self'"
          :to="item.to || ''"
          :type="item.buttonType || 'default'"
          @click.stop="triggerEvent(item.event)"
          v-else-if="item.type === 'button'"
        >{{ item.name }}
        </Button
        >
        <Input
          :autocomplete="item.autocomplete || 'off'"
          :autofocus="item.autofocus || false"
          :autosize="item.autosize || false"
          :clearable="item.clearable || true"
          :disabled="item.disabled || false"
          :element-id="item.elementId"
          :enter-button="item.enterButton || false"
          :icon="item.icon"
          :maxlength="item.maxlength"
          :number="item.number || false"
          :password="item.password || false"
          :placeholder="item.placeholder || ''"
          :prefix="item.prefix"
          :readonly="item.readonly || false"
          :rows="item.rows || 2"
          :search="item.search || false"
          :show-word-limit="item.showWordLimit || false"
          :size="item.size || 'default'"
          :spellcheck="item.spellcheck || false"
          :suffix="item.suffix"
          :type="item.inputType || 'text'"
          :wrap="item.wrap || 'soft'"
          v-else
          v-model="search[item.id]"/>
      </div>
    </div>
    <Button
      :append="searchBtn.append || false"
      :class="searchBtn.class || ''"
      :custom-icon="searchBtn.customIcon || ''"
      :disabled="searchBtn.disabled || false"
      :ghost="searchBtn.ghost || false"
      :html-type="searchBtn.htmlType || 'button'"
      :icon="searchBtn.icon || ''"
      :loading="searchBtn.loading || false"
      :long="searchBtn.long || false"
      :replace="searchBtn.replace || false"
      :shape="searchBtn.shape"
      :size="searchBtn.size || 'default'"
      :target="searchBtn.target || '_self'"
      :to="searchBtn.to || ''"
      :type="searchBtn.type || ''"
      @click="submit"
      class="search-btn"
      v-if="searchList.length && searchBtn && !searchBtn.hideSearchBtn">
      查询
    </Button>
  </div>
</template>
<script>
export default {
  created () {
    this.initSearch()
  },
  data () {
    return {
      search: {}
    }
  },
  props: ['searchList', 'searchBtn', 'searchEvent', 'paginationFlag'],
  methods: {
    initSearch () {
      let _search = {}

      this.searchList.forEach(value => {
        let _value = ''
        if (value.type === 'select') {
          _value = []
        } else if (value.type === 'cascader') {
          _value = []
        } else if (value.type === 'checkboxGroup') {
          _value = []
        }
        _search[value.id] = value.default || _value
      })

      this.search = _search
    },
    setSearch (search) {
      this.search = search
    },
    autoSubmit () {
      // if (data) {
      //   this.searchEvent()
      // }
    },
    submit () {
      this.$emit('setCurrentpage', 1)
      if (!this.paginationFlag) {
        this.searchEvent()
      } else {
        // 从后端获取数据无需调用事件，不然会重复发送请求
        // this.searchEvent()
      }
    },
    triggerEvent (event) {
      if (this.data) {
        event(this.data)
      } else {
        event()
      }
    }
  },
  watch: {
    search: {
      handler: function (val) {
        this.$emit('getSearch', val)
      }
      // immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .layout-inline {
    display: inline-block;
  }

  .search-bar {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px;
    align-items: center;
    background-color: #fff;
    align-items: center;

    .search-item {
      margin-right: 20px;
      font-size: 12px;

      span {
        margin-right: 5px;
      }
    }
  }
</style>
