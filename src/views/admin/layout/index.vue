<template>
  <el-container class="containerBar">
    <el-aside class="leftBar" width="250px">
      <div class="logoBar">
        <img alt="logo" class="img-fluid main-logo" src="../../../assets/images/svg/one.svg">
      </div>
      <div class="navigationBar">
        <Navigation></Navigation>
      </div>
    </el-aside>
    <el-container class="rightBar">
      <el-header class="topBar">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <div class="breadcrumbBar"></div>
        <div class="contentBar">
          <!--          <el-table :data="tableData">-->
          <!--            <el-table-column label="日期" prop="date" width="140">-->
          <!--            </el-table-column>-->
          <!--            <el-table-column label="姓名" prop="name" width="120">-->
          <!--            </el-table-column>-->
          <!--            <el-table-column label="地址" prop="address">-->
          <!--            </el-table-column>-->
          <!--          </el-table>-->
        </div>
        <div class="footerBar"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Navigation from '@/views/admin/layout/navigation'

export default {
  name: 'ContainerBar',
  components: { Navigation },
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
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
    /*transition: all 0.3s ease;*/
    .logoBar {
      padding: 15px 0;
      margin-bottom: 30px;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    }

    .navigationBar {
      height: calc(100vh - 105px);
      overflow: auto;
      /*transition: 0.5s;*/

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
              font-family: "remixicon" !important;
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
</style>
