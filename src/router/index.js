import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Travel from "../views/travel/Travel";
import Date from "../views/date/Date";
import Item from "../views/item/Item";
import About from "../views/about/About";
import Login from "../views/model/Login";

// 踏行子页面
/*广西*/
import TravelNanning from "../views/travel/GuangXi/TravelNanning"
/*江苏*/
// 南京
import TravelNanjing from '../views/travel/JiangSu/TravelNanjing'
// 扬州
import TravelYangzhou from "../views/travel/JiangSu/TravelYangzhou";
// 江苏
import TravleSuzhou from "../views/travel/JiangSu/TravleSuzhou";

// 资料子页面
/*301*/
import D301001 from '../views/date/301/301001'
import D301002 from '../views/date/301/301002'



Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '主页',
		meta: {
			title: '欢迎访问Simple的个人博客'
		},
		component: Index,
		show: true
		// 默认访问主页
		// redirect: '/Index'
	},
	{
		path: '/travel',
		name: '踏行',
		meta: {
			title: '踏行'
		},
		component: Travel,
		show: true
		// children: [
		// 	{
		// 		path: '/travel/GuangXi/TravelNanning',
		// 		name: '南宁',
		// 		component: TravelNanning
		// 	}
		// ]
	},
	{
		path: '/date',
		name: '资料',
		meta: {
			title: '资料'
		},
		component: Date,
		show: true
	},
	{
		path: '/item',
		name: '项目',
		meta: {
			title: '项目'
		},
		component: Item,
		show: true
	},
	{
		path: '/about',
		name: '关于',
		meta: {
			title: '关于'
		},
		component: About,
		show: true
	},
	{
		path: '/login',
		name: '登录',
		meta: {
			title: '登录'
		},
		component: Login,
		show: true
	},

	// 踏行二级模块
	/*广西*/
	{
		path: '/travel/GuangXi/TravelNanning',
		name: '南宁',
		meta: {
			title: '踏行-南宁'
		},
		component: TravelNanning,
		show: false
	},
	/*江苏*/
	// 南京
	{
		path: '/travel/JiangSu/TravelNanjing',
		name: '南京',
		meta: {
			title: '踏行-南京'
		},
		component: TravelNanjing,
		show: false
	},
	// 扬州
	{
		path: '/travel/JiangSu/TravelYangzhou',
		name: '扬州',
		meta: {
			title: '踏行-扬州'
		},
		component: TravelYangzhou,
		show: false
	},
	// 苏州
	{
		path: '/travel/JiangSu/TravleSuzhou',
		name: '苏州',
		meta: {
			title: '踏行-苏州'
		},
		component: TravleSuzhou,
		show: false
	},
	/*资料子页面*/
	{
		path: '/date/301/301001',
		name: D301001,
		component: D301001,
		show: false
	},
	{
		path: '/date/301/301002',
		name: D301002,
		component: D301002,
		show: false
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
