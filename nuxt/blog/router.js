import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _d662ec54 = () => import('../../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */).then(m => m.default || m)
const _2ff0a3c3 = () => import('../../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _8f3eb778 = () => import('../../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */).then(m => m.default || m)
const _88ea2ff6 = () => import('../../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/wilde_spieth/prototypes/1/dist/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/shop",
			component: _d662ec54,
			name: "shop"
		},
		{
			path: "/about",
			component: _2ff0a3c3,
			name: "about"
		},
		{
			path: "/products",
			component: _8f3eb778,
			name: "products"
		},
		{
			path: "/",
			component: _88ea2ff6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
