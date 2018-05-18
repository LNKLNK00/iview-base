import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import Util from '../utils/BaseUtil'

Vue.use(Router)
Vue.use(iView)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        title: '测试项目'
      },
      component: (resolve) => require(['@/views/Home'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: (resolve) => require(['@/views/Index'], resolve)
    }
  ]
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
