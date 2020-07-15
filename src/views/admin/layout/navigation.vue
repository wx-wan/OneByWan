<template>
  <el-menu :collapse="isCollapse" active-text-color="#0442ba" unique-opened class="show">
    <el-menu-item-group :key="`menu_${index}`" v-for="(menu,index) in navigationDisplayList">
      <template slot="title"><span slot="title">{{menu.groupName}}</span></template>
      <el-submenu :class="{'noItem':!subMenu.menuItem}" :index="`${index}-${subIndex}`" :key="`subMenu_${subIndex}`" v-for="(subMenu,subIndex) in menu.subMenu">
        <template slot="title"><i :class="[subMenu.icon,'show']"></i><span>{{subMenu.title}}</span></template>
        <el-menu-item :index="`${index}-${subIndex}-${itemIndex}`" :key="`menuItem_${itemIndex}`" v-for="(item,itemIndex) in subMenu.menuItem">{{item.title}}</el-menu-item>
      </el-submenu>
    </el-menu-item-group>
  </el-menu>
</template>
<script>
export default {
  name: 'navigation',
  props: ['isCollapse'],
  data () {
    return {
      navigationDisplayList: [
        { groupName: 'Main', subMenu: [{ icon: 'ri-dashboard-line', title: 'DashBoard', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] }] },
        {
          groupName: 'Components',
          subMenu: [
            {
              icon: 'ri-pen-nib-line',
              title: 'Basic UI',
              menuItem: [
                { title: 'Alerts' },
                { title: 'Badges' },
                { title: 'Buttons' },
                { title: 'Cards' },
                { title: 'Carousel' },
                { title: 'Collapse' },
                { title: 'Dropdowns' },
                { title: 'Embeds' },
                { title: 'Grids' },
                { title: 'Images' },
                { title: 'Media' },
                { title: 'Modals' },
                { title: 'Paginations' },
                { title: 'Popovers' },
                { title: 'Progress Bars' },
                { title: 'Spinners' },
                { title: 'Tabs' },
                { title: 'Toasts' },
                { title: 'Tooltips' },
                { title: 'Typography' }
              ]
            },
            { icon: 'ri-stack-line', title: 'Advanced UI', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-apps-line', title: 'Apps', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-todo-line', title: 'Forms', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-bar-chart-line', title: 'Charts', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-paint-line', title: 'Icons', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-table-2', title: 'Tables', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-compass-3-line', title: 'Maps', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] }
          ]
        },
        {
          groupName: 'Extras', subMenu: [
            { icon: 'ri-book-read-line', title: 'Pages', menuItem: [{ title: 'CRM' }, { title: 'E-Commerce' }] },
            { icon: 'ri-bubble-chart-line', title: 'Widgets' }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .noItem {
    /deep/ .el-submenu__title {
      > i:last-child {
        display: none;
      }

      &:before {
        content: 'new';
        color: white;
        float: right !important;
        font-weight: 600;
        background-color: #9ccc34;
        margin-top: 3px;
        display: inline-block;
        padding: .25em .4em;
        font-size: 75%;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      }
    }
  }
</style>
