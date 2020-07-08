<template>
  <div class="entryList">
    <div class="demo-headline">
      <h1 class="demo-logo">
        <!--        <div class="logo"></div>-->
        <span>Wan.js</span>
        <small>Hello World</small>
      </h1>
    </div>
    <div class="dot-group">
      <span class="dot" style="background-color: #3498DB"></span>
      <span class="dot" style="background-color:#E74C3C"></span>
      <span class="dot" style="background-color: #2ECC71"></span>
    </div>
    <Collapse accordion v-model="collapseValue">
      <Panel :key="index" :name="item.name" v-for="(item, index) in routerArray">
        {{ item.meta.title || item.name || item.children[0].meta.title || item.children[0].name }}
        <List border size="default" slot="content">
          <router-link
            :key="i"
            :to="{ path: routerLinkPath(item,obj) }"
            target="_blank"
            v-for="(obj, i) in item.children">
            <ListItem v-if="!obj.meta.hideInMenu">
              <ListItemMeta :description="obj.meta.title || obj.name"/>
              {{ routerLinkPath(item,obj) }}
            </ListItem>
          </router-link>
        </List>
      </Panel>
    </Collapse>
    <p>如果你点我，我就会消失。</p>
    <p>继续点我!</p>
    <p>接着点我!</p>
  </div>
</template>
<script>
import homeRouter from '@/router/modules/home'

export default {
  name: 'home',
  data () {
    return {
      collapseValue: '',
      routerArray: homeRouter
    }
  },
  created () {
    console.log($ ? 'jquery 加载成功！' : 'jquery 加载失败！')
    $(document).ready(function () {
      $('p').click(function () {
        $(this).hide()
      })
    })
  },
  methods: {
    routerLinkPath (_parent, _child) {
      return (_parent.path === '/' ? '' : 'item.path') + '/' + _child.path
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .demo-headline {
    padding: 73px 0 20px;
    text-align: center;
  }

  .demo-logo {
    margin: 10px 0;
    font: 900 90px/100px "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -2px;

    .logo {
      width: 236px;
      height: 181px;
      margin: 0 auto 26px;
      overflow: hidden;
      text-indent: -9999em;
      background: url("../../assets/images/png/diamond.png") center 0 no-repeat;
      background-size: 236px 181px;
    }

    small {
      display: block;
      padding-top: 5px;
      font-size: 22px;
      font-weight: 700;
      color: rgba(52, 73, 94, .3);
      letter-spacing: 0;
      margin-top: -50px;
      margin-left: -163px;
    }
  }

  .dot-group {
    float: right;
    margin-top: 15px;

    .dot {
      width: 18px;
      height: 18px;
      margin-right: 12px;
      display: inline-block;
      border-radius: 50%;
      z-index: 500;
    }
  }


  .entryList {
    background-color: #fff;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 970px;

    .ivu-collapse {
      border-radius: 13px;
      background-color: #2C3E50;

      .ivu-collapse-item {
        /deep/ .ivu-collapse-header {
          font-weight: 800;
          color: white;
          height: inherit;
          line-height: 54px;
        }

        &:last-child > /deep/ .ivu-collapse-content {
          border-radius: 0 0 11px 11px;
        }
      }
    }

    .ivu-list-header {
      font-weight: bolder;
    }

    .ivu-list-items {
      a {
        &:last-child {
          .ivu-list-item {
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }

    .ivu-list-item {
      /deep/ .ivu-list-item-meta-description {
        color: #2C3E50;
        font-weight: 600;
      }

      &:last-child {
        border-bottom: 1px solid #e8eaec;
      }

      &:hover {
        cursor: pointer;
        border-radius: 3px;
        background-color: #415b76;
        color: #fff;

        /deep/ .ivu-list-item-meta-description {
          color: #fff;
        }
      }
    }
  }
</style>
