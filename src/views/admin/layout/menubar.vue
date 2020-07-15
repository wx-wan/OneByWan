<template>
  <div class="menubar">
    <el-button :icon="menu_hamburger_icon" @click="changeMenu()" class="menu-hamburger"></el-button>
    <el-input class="searchBar" clearable placeholder="Search" v-model="searchKey">
      <i class="ri-search-line" slot="suffix"></i>
    </el-input>
  </div>
</template>
<script>
export default {
  name: 'menubar',
  data () {
    return {
      searchKey: '',
      menu_change_flag: false,
      menu_hamburger_icon: 'ri-menu-2-line menu-hamburger-collapse'
    }
  },
  methods: {
    changeMenu () {
      this.menu_change_flag = !this.menu_change_flag
      this.menu_hamburger_icon = this.menu_change_flag ? 'ri-menu-2-line menu-hamburger-collapse' : 'ri-close-line menu-hamburger-close'
      this.$emit('_isCollapse', this.menu_change_flag)
    }
  }
}
</script>
<style lang="scss" scoped>
  .menubar {
    display: flex;
    align-items: center;

    .menu-hamburger {
      border: none;
      font-size: 18px;
      height: 40px;
      width: 40px;
      padding: 0;
      margin-right: 5px;

      &:focus {
        outline: none;
      }
    }

    .searchBar {
      width: 165px;

      /deep/ .el-input {
        &__inner {
          background-color: rgba(172, 172, 180, 0.1);
          color: #151d2e;
          font-size: 15px;
          padding-left: 20px;
          padding-right: 65px;
          border: none;
          border-radius: 3px;
          border-right: 0;
          height: 37px;

          &::-webkit-input-placeholder,
          &:-moz-placeholder,
          &::-moz-placeholder,
          &::-ms-input-placeholder {
            /* WebKit browsers */
            color: #717cb1;
          }
        }

        &__suffix {
          right: 0;
        }

        &__icon {
          display: flex;
          position: relative;
          bottom: 28px;
          right: 10px;
          font-weight: 800;

          &:before {
            content: '\e6db';
            font-size: 15px;
            color: #3b63a5;
          }
        }
      }

      i {
        /*background-color: rgba(172, 172, 180, 0.1);*/
        position: relative;
        top: 7px;
        color: #151d2e;
        font-size: 17px;
        font-weight: 400;
        padding: 3px 15px;
        border: none;
        border-left: 0;
        box-shadow: none;
      }
    }

  }
</style>
