import components from '../components'

const homeRoute = [
  {
    path: '/', name: 'index', redirect: 'home', component: components.Index, meta: { title: '网站导航' },
    children: [
      { path: 'home', component: components.Home, name: 'home', meta: { title: '主页面导航不显示测试地址', icon: 'md-card', hideInMenu: true } },
      { path: 'admin', component: components.Admin, name: 'admin', meta: {} }
      // { path: 'cargo', component: components.Cargo, name: 'cargo', meta: { title: '货图', icon: 'md-card' } },
      // { path: 'foo', component: components.Foo, name: 'foo', meta: { title: '第一个案例测试地址', icon: 'md-card' } },
      // { path: 'bar', component: components.Bar, name: 'bar', meta: { title: '第二个案例测试地址', icon: 'md-card' } }
    ]
  }
]

export default homeRoute
