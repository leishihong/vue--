import Vue from 'vue'
import Router from 'vue-router'
/*import Index from '@/components/Index'
import Detail from '@/components/detail/Detail'
import Recommend from '@/components/tui/Recommend'
import Product from '@/components/product/Product'
import contentList from '@/components/content-list/contentList'
import Activity from '@/components/activity/Activity.vue'*/

// import home from '@/view/home/index'
// import recommend from '@/view/home/children/recommend.vue'

Vue.use(Router)
//路由的异步懒加载
const Index = resolve => {
  require.ensure(['@/components/Index'], () => {
    resolve(require('@/components/Index'))
  })
}
const Detail = resolve => {
  require.ensure(['@/components/detail/Detail'], () => {
    resolve(require('@/components/detail/Detail'))
  })
}
const Recommend = resolve => {
  require.ensure(['@/components/tui/Recommend'], () => {
    resolve(require('@/components/tui/Recommend'))
  })
}
const Product = resolve => {
  require.ensure(['@/components/product/Product'], () => {
    resolve(require('@/components/product/Product'))
  })
}
const contentList = resolve => {
  require.ensure(['@/components/content-list/contentList'], () => {
    resolve(require('@/components/content-list/contentList'))
  })
}
const Activity = resolve => {
  require.ensure(['@/components/activity/Activity.vue'], () => {
    resolve(require('@/components/activity/Activity.vue'))
  })
}
export default new Router({
  mode: 'history',
  scrollBehavior: ()=> ({
  	y: 0
  }),
  routes: [
  	// {
  	// 	path:"/",
  	// 	redirect:"/home"
  	// },
   //  {
   //    path: '/home',
   //    component: home,
   //    redirect:"/home/recommend",
   //    children:[
   //    	{
	  //     path: 'recommend',
	  //     component: recommend
	  //   },
	  //   {
	  //     path: 'recommend3',
	  //     component: recommend
	  //   }
   //    ]
   //  }
   {
   		path: "/home",
   		component:Index,
   		redirect: "/home/recommend",
   		children:[
   			{
   				path:"recommend",
   				component:Recommend
   			}
   		]
   },
   {
   		path:"*",
   		redirect:"/home"
   },
    {
    	path: '/detail',
    	component: Detail
    },
    {
    	path:"*",
    	redirect:"/home"
    },
    {
    	path:"/product",
    	component:Product
    },
    {
    	path:"/product/contentList",
    	component:contentList
    },
    {
    	path:"/recommend/activity",
    	component:Activity
    }
    
  ]
})
