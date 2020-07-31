<template>
  <el-container class="containerBar">
    <el-aside :width="aside_width" class="leftBar">
      <div class="logoBar">
        <img alt="logo" class="img-fluid main-logo" src="../../../assets/images/svg/one.svg">
      </div>
      <div :class="{'navigationBar':true,'isCollapse':isCollapse}">
        <Navigation></Navigation>
      </div>
    </el-aside>
    <el-container class="rightBar">
      <el-header class="topBar" ref="topBar">
        <Menubar @_isCollapse="collapse"></Menubar>
      </el-header>
      <el-main class="mainBar">
        <div class="breadcrumbBar"></div>
        <div class="contentBar">
            <jumbotron></jumbotron>
        </div>
        <div class="footerBar">
          <div>2020©实验室-精彩稍后</div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Navigation from '@/views/admin/layout/navigation'
import Menubar from '@/views/admin/layout/menubar'
import Jumbotron from '@/views/cargo/jumbotron/jumbotron'

export default {
  name: 'ContainerBar',
  components: { Jumbotron, Menubar, Navigation },
  data () {
    return {
      isCollapse: false,
      aside_width: '250px'
    }
  },
  methods: {
    collapse (val) {
      this.isCollapse = val
      let whatWidth = val ? '80px' : '250px'
      this.aside_width = whatWidth
      $('.rightBar').css('margin-left', whatWidth)
    }
  }
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 0; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background-color: skyblue;
      background-image: -webkit-linear-gradient(
        /*css 3 线性渐变*/
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent
      );
    }

    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #ededed;
      border-radius: 10px;
    }
  }

  .leftBar {
    height: 100%;
    position: fixed;
    background: #ffffff;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    z-index: 9;
    transition: all 0.3s ease;

    .logoBar {
      height: 75px;
      padding: 15px 5px;
      margin-bottom: 30px;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }


    .navigationBar {
      height: calc(100vh - 105px);
      overflow: auto;
      /*transition: 0.5s;*/
      &.isCollapse {
        /deep/ .el-menu {
          border-right: none;

          .el-menu-item-group__title {
            display: none;
          }

          .el-submenu__title {
            span, .el-submenu__icon-arrow {
              display: none;
            }
          }

          .noItem .el-submenu__title:before {
            display: none;
          }

          .el-menu--inline {
            display: none;
          }
        }
      }

      /deep/ .el-menu {
        border-right: none;

        .el-menu {
          &--inline {
            list-style: none;
            padding: 5px;
            margin: 0 1px;
            background: transparent;
            /*transition: all 0s ease-in;*/
          }

          &-item {
            padding: 6px 25px 6px 55px !important;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #151d2e;

            &:before {
              content: "";
              font-family: "remixicon", sans-serif !important;
              font-size: 5px;
              line-height: 10px;
              padding-right: 5px;
              vertical-align: middle;
            }

            &:focus, &:hover {
              color: #0442ba;
              background-color: transparent;
            }
          }
        }

        .el-submenu {
          position: relative;
          margin: 0;
          padding: 0;

          &__title {
            padding: 8px 15px !important;
            display: block;
            color: #151d2e;
            margin: 0 15px;
            border-radius: 3px;
            font-size: 15px;

            * {
              vertical-align: auto;
            }

            i {
              color: #464c59;
            }

            & > i:first-child {
              display: inline-block;
              width: 30px;
              font-size: 18px;
              vertical-align: sub;
            }

            &:focus, &:hover {
              font-weight: 400;
              background-color: rgba(172, 172, 180, 0.1);
              color: #0442ba;
              opacity: 1;

              i {
                color: #0442ba;
                opacity: 1;
              }
            }
          }

          &__icon-arrow {
            position: inherit;
            top: 0;
            right: 0;
            margin-top: -5px;
            transform: rotateZ(270deg);
            width: auto;
            height: auto;
            padding: 0;
            float: right;
            font-size: 8px;
            line-height: 34px;
            font-weight: 900;
          }
        }

        .is-active.is-opened {
          .el-submenu {
            &__title {
              font-weight: 400;
              background-color: rgba(172, 172, 180, 0.1);
              color: #0442ba;
              opacity: 1;

              & > i:first-child {
                color: #0442ba;
              }
            }

            &__icon-arrow {
              color: #0442ba;
            }
          }
        }

        .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
          transform: rotateZ(360deg);
        }

        .el-menu-item, .el-submenu__title {
          height: 43px;
          line-height: 24px;
          position: relative;
          white-space: nowrap;
          list-style: none;
        }

        .el-menu-item-group__title {
          padding: 15px 25px 5px 25px !important;
          color: #4e5d71;
          text-transform: uppercase;
          font-size: 12px;
          border-bottom: none;
        }
      }
    }
  }

  .rightBar {
    margin-left: 250px;
    overflow: hidden;
    min-height: 500px;
    min-width: 320px;
    transition: all 0.3s ease;

    .topBar {
      width: 100%;
      background-color: #ffffff;
      height: 75px !important;
      padding: 15px 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  .mainBar {
    overflow: hidden;

    .contentBar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footerBar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }

  @media (max-width: 1024px) {
    .leftBar {
      display: none;
    }

    .rightBar {
      margin-left: 0 !important;

      /deep/ .menu-hamburger, /deep/ .searchBar {
        display: none;
      }

      /deep/ .logoBar {
        display: block;
      }
    }
  }
</style>
