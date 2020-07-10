export default {
  Index: () => import('@/views/homepage/index.vue'),
  Home: () => import('@/views/homepage/Home.vue'),
  Admin: () => import('@/views/admin/layout'),
  Cargo: () => import('@/views/cargo'),
  Foo: { template: '<div>foo</div>' },
  Bar: { template: '<div>bar</div>' }
}
