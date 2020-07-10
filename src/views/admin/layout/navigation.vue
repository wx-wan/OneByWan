<template>
  <el-menu active-text-color="#0442ba" unique-opened>
    <el-menu-item-group :key="`menu_${index}`" v-for="(menu,index) in navigationDisplayList">
      <template slot="title"><span slot="title">{{menu.groupName}}</span></template>
      <el-submenu :class="{'noItem':!subMenu.menuItem}" :index="`${index}-${subIndex}`" :key="`subMenu_${subIndex}`" v-for="(subMenu,subIndex) in menu.subMenu">
        <template slot="title"><i :class="subMenu.icon"></i>{{subMenu.title}}</template>
        <el-menu-item :index="`${index}-${subIndex}-${itemIndex}`" :key="`menuItem_${itemIndex}`" v-for="(item,itemIndex) in subMenu.menuItem">{{item.title}}</el-menu-item>
      </el-submenu>
    </el-menu-item-group>
  </el-menu>
  <!--  <div class="navigationbar active">-->
  <!--    <ul class="vertical-menu in">-->
  <!--      <li class="vertical-header">Main</li>-->
  <!--      <li class="">-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-dashboard-line"></i><span>Dashboard</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu in" style="display: none;">-->
  <!--          <li class=""><a href="index.html" class="active">CRM</a></li>-->
  <!--          <li><a href="dashboard-ecommerce.html">E-Commerce</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li class="vertical-header">Components</li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-pen-nib-line"></i><span>Basic UI</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="basic-ui-kits-alerts.html">Alerts</a></li>-->
  <!--          <li><a href="basic-ui-kits-badges.html">Badges</a></li>-->
  <!--          <li><a href="basic-ui-kits-buttons.html">Buttons</a></li>-->
  <!--          <li><a href="basic-ui-kits-cards.html">Cards</a></li>-->
  <!--          <li><a href="basic-ui-kits-carousel.html">Carousel</a></li>-->
  <!--          <li><a href="basic-ui-kits-collapse.html">Collapse</a></li>-->
  <!--          <li><a href="basic-ui-kits-dropdowns.html">Dropdowns</a></li>-->
  <!--          <li><a href="basic-ui-kits-embeds.html">Embeds</a></li>-->
  <!--          <li><a href="basic-ui-kits-grids.html">Grids</a></li>-->
  <!--          <li><a href="basic-ui-kits-images.html">Images</a></li>-->
  <!--          <li><a href="basic-ui-kits-media.html">Media</a></li>-->
  <!--          <li><a href="basic-ui-kits-modals.html">Modals</a></li>-->
  <!--          <li><a href="basic-ui-kits-paginations.html">Paginations</a></li>-->
  <!--          <li><a href="basic-ui-kits-popovers.html">Popovers</a></li>-->
  <!--          <li><a href="basic-ui-kits-progressbars.html">Progress Bars</a></li>-->
  <!--          <li><a href="basic-ui-kits-spinners.html">Spinners</a></li>-->
  <!--          <li><a href="basic-ui-kits-tabs.html">Tabs</a></li>-->
  <!--          <li><a href="basic-ui-kits-toasts.html">Toasts</a></li>-->
  <!--          <li><a href="basic-ui-kits-tooltips.html">Tooltips</a></li>-->
  <!--          <li><a href="basic-ui-kits-typography.html">Typography</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-stack-line"></i><span>Advanced UI</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="advanced-ui-kits-image-crop.html">Image Crop</a></li>-->
  <!--          <li><a href="advanced-ui-kits-jquery-confirm.html">jQuery Confirm</a></li>-->
  <!--          <li><a href="advanced-ui-kits-nestable.html">Nestable</a></li>-->
  <!--          <li><a href="advanced-ui-kits-pnotify.html">Pnotify</a></li>-->
  <!--          <li><a href="advanced-ui-kits-range-slider.html">Range Slider</a></li>-->
  <!--          <li><a href="advanced-ui-kits-ratings.html">Ratings</a></li>-->
  <!--          <li><a href="advanced-ui-kits-session-timeout.html">Session Timeout</a></li>-->
  <!--          <li><a href="advanced-ui-kits-sweet-alerts.html">Sweet Alerts</a></li>-->
  <!--          <li><a href="advanced-ui-kits-switchery.html">Switchery</a></li>-->
  <!--          <li><a href="advanced-ui-kits-toolbar.html">Toolbar</a></li>-->
  <!--          <li><a href="advanced-ui-kits-tour.html">Tour</a></li>-->
  <!--          <li><a href="advanced-ui-kits-treeview.html">Tree View</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-apps-line"></i><span>Apps</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="apps-calender.html">Calender</a></li>-->
  <!--          <li><a href="apps-chat.html">Chat</a></li>-->
  <!--          <li>-->
  <!--            <a href="javaScript:void();">Email<i class="ri-arrow-right-s-line"></i></a>-->
  <!--            <ul class="vertical-submenu">-->
  <!--              <li><a href="apps-email-inbox.html">Inbox</a></li>-->
  <!--              <li><a href="apps-email-open.html">Open</a></li>-->
  <!--              <li><a href="apps-email-compose.html">Compose</a></li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--          <li><a href="apps-kanban-board.html">Kanban Board</a></li>-->
  <!--          <li><a href="apps-onboarding-screens.html">Onboarding Screens</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-todo-line"></i><span>Forms</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="form-inputs.html">Basic Elements</a></li>-->
  <!--          <li><a href="form-groups.html">Groups</a></li>-->
  <!--          <li><a href="form-layouts.html">Layouts</a></li>-->
  <!--          <li><a href="form-colorpickers.html">Color Pickers</a></li>-->
  <!--          <li><a href="form-datepickers.html">Date Pickers</a></li>-->
  <!--          <li><a href="form-editors.html">Editors</a></li>-->
  <!--          <li><a href="form-file-uploads.html">File Uploads</a></li>-->
  <!--          <li><a href="form-input-mask.html">Input Mask</a></li>-->
  <!--          <li><a href="form-maxlength.html">MaxLength</a></li>-->
  <!--          <li><a href="form-selects.html">Selects</a></li>-->
  <!--          <li><a href="form-touchspin.html">Touchspin</a></li>-->
  <!--          <li><a href="form-validations.html">Validations</a></li>-->
  <!--          <li><a href="form-wizards.html">Wizards</a></li>-->
  <!--          <li><a href="form-xeditable.html">X-editable</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-bar-chart-line"></i><span>Charts</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="chart-apex.html">Apex</a></li>-->
  <!--          <li><a href="chart-c3.html">C3</a></li>-->
  <!--          <li><a href="chart-chartistjs.html">Chartist</a></li>-->
  <!--          <li><a href="chart-chartjs.html">Chartjs</a></li>-->
  <!--          <li><a href="chart-flot.html">Flot</a></li>-->
  <!--          <li><a href="chart-knob.html">Knob</a></li>-->
  <!--          <li><a href="chart-morris.html">Morris</a></li>-->
  <!--          <li><a href="chart-piety.html">Piety</a></li>-->
  <!--          <li><a href="chart-sparkline.html">Sparkline</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-paint-line"></i><span>Icons</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="icon-dripicons.html">Dripicons</a></li>-->
  <!--          <li><a href="icon-feather.html">Feather</a></li>-->
  <!--          <li><a href="icon-flag.html">Flag</a></li>-->
  <!--          <li><a href="icon-font-awesome.html">Font Awesome</a></li>-->
  <!--          <li><a href="icon-ionicons.html">Ion</a></li>-->
  <!--          <li><a href="icon-line-awesome.html">Line Awesome</a></li>-->
  <!--          <li><a href="icon-material-design.html">Material Design</a></li>-->
  <!--          <li><a href="icon-remixicon.html">Remixicon</a></li>-->
  <!--          <li><a href="icon-simple-line.html">Simple Line</a></li>-->
  <!--          <li><a href="icon-socicon.html">Socicon</a></li>-->
  <!--          <li><a href="icon-themify.html">Themify</a></li>-->
  <!--          <li><a href="icon-typicons.html">Typicons</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-table-2"></i><span>Tables</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="table-bootstrap.html">Bootstrap</a></li>-->
  <!--          <li><a href="table-datatable.html">Datatable</a></li>-->
  <!--          <li><a href="table-editable.html">Editable</a></li>-->
  <!--          <li><a href="table-footable.html">Foo</a></li>-->
  <!--          <li><a href="table-rwdtable.html">RWD</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-compass-3-line"></i><span>Maps</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li><a href="map-google.html">Google</a></li>-->
  <!--          <li><a href="map-vector.html">Vector</a></li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li class="vertical-header">Extras</li>-->
  <!--      <li>-->
  <!--        <a href="javaScript:void();">-->
  <!--          <i class="ri-book-read-line"></i><span>Pages</span><i class="ri-arrow-right-s-line"></i>-->
  <!--        </a>-->
  <!--        <ul class="vertical-submenu">-->
  <!--          <li>-->
  <!--            <a href="javaScript:void();">Basic<i class="ri-arrow-right-s-line"></i></a>-->
  <!--            <ul class="vertical-submenu">-->
  <!--              <li><a href="page-starter.html">Starter</a></li>-->
  <!--              <li><a href="page-blog.html">Blog</a></li>-->
  <!--              <li><a href="page-faq.html">FAQ</a></li>-->
  <!--              <li><a href="page-gallery.html">Gallery</a></li>-->
  <!--              <li><a href="page-invoice.html">Invoice</a></li>-->
  <!--              <li><a href="page-pricing.html">Pricing</a></li>-->
  <!--              <li><a href="page-timeline.html">Timeline</a></li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="javaScript:void();">Store<i class="ri-arrow-right-s-line"></i></a>-->
  <!--            <ul class="vertical-submenu">-->
  <!--              <li><a href="ecommerce-product-list.html">Product List</a></li>-->
  <!--              <li><a href="ecommerce-product-detail.html">Product Detail</a></li>-->
  <!--              <li><a href="ecommerce-order-list.html">Order List</a></li>-->
  <!--              <li><a href="ecommerce-order-detail.html">Order Detail</a></li>-->
  <!--              <li><a href="ecommerce-shop.html">Shop</a></li>-->
  <!--              <li><a href="ecommerce-single-product.html">Single Product</a></li>-->
  <!--              <li><a href="ecommerce-cart.html">Cart</a></li>-->
  <!--              <li><a href="ecommerce-checkout.html">Checkout</a></li>-->
  <!--              <li><a href="ecommerce-thankyou.html">Thank You</a></li>-->
  <!--              <li><a href="ecommerce-myaccount.html">My Account</a></li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="javaScript:void();">Authentication<i class="ri-arrow-right-s-line"></i></a>-->
  <!--            <ul class="vertical-submenu">-->
  <!--              <li><a href="user-login.html">Login</a></li>-->
  <!--              <li><a href="user-register.html">Register</a></li>-->
  <!--              <li><a href="user-forgotpsw.html">Forgot Password</a></li>-->
  <!--              <li><a href="user-lock-screen.html">Lock Screen</a></li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="javaScript:void();">Error<i class="ri-arrow-right-s-line"></i></a>-->
  <!--            <ul class="vertical-submenu">-->
  <!--              <li><a href="error-comingsoon.html">Coming Soon</a></li>-->
  <!--              <li><a href="error-maintenance.html">Maintenance</a></li>-->
  <!--              <li><a href="error-404.html">Error 404</a></li>-->
  <!--              <li><a href="error-500.html">Error 500</a></li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <a href="widgets.html">-->
  <!--          <i class="ri-bubble-chart-line"></i><span>Widgets</span><span class="badge badge-success float-right">New</span>-->
  <!--        </a>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
</template>
<script>
export default {
  name: 'navigation',
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
                { title: 'Typography' },
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
