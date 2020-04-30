export default {
  Index: () => import('@/views/homepage/index.vue'),
  Home: () => import('@/views/homepage/Home.vue'),
  Cargo: () => import('@/views/cargo'),
  Foo: { template: '<div>foo</div>' },
  Bar: { template: '<div>bar</div>' }
}
