import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Travel from "../views/travel/Travel";
import Date from "../views/date/Date";
import Item from "../views/item/Item";
import About from "../views/about/About";

// 踏行子页面
/*广西*/
import TravelNanning from "../views/travel/GuangXi/TravelNanning"
/*江苏*/
// 南京
import TravelNanjing from '../views/travel/JiangSu/TravelNanjing'
// 扬州
import TravelYangzhou from "../views/travel/JiangSu/TravelYangzhou"
// 江苏
import TravleSuzhou from "../views/travel/JiangSu/TravleSuzhou"

// 资料子页面
/*301*/
import D301001 from '../views/date/301/301001'
import D301002 from '../views/date/301/301002'
/*302*/
import D302001 from '../views/date/302/302001'
import D302002 from '../views/date/302/302002'
import D302003 from '../views/date/302/302003'
import D302004 from '../views/date/302/302004'
import D302005 from '../views/date/302/302005'
import D302006 from '../views/date/302/302006'
import D302007 from '../views/date/302/302007'
import D302008 from '../views/date/302/302008'
import D302009 from '../views/date/302/302009'
import D302010 from '../views/date/302/302010'
import D302011 from '../views/date/302/302011'
import D302012 from '../views/date/302/302012'
import D302021 from '../views/date/302/302021'
import D302022 from '../views/date/302/302022'
import D302023 from '../views/date/302/302023'
import D302024 from '../views/date/302/302024'
import D302025 from '../views/date/302/302025'
import D302026 from '../views/date/302/302026'
import D302027 from '../views/date/302/302027'
import D302028 from '../views/date/302/302028'
import D302029 from '../views/date/302/302029'
import D302030 from '../views/date/302/302030'
import D302031 from '../views/date/302/302031'
import D302032 from '../views/date/302/302032'
import D302033 from '../views/date/302/302033'
import D302034 from '../views/date/302/302034'

/*305*/
import D305001 from '../views/date/305/305001'
import D305002 from '../views/date/305/305002'
import D305003 from '../views/date/305/305003'
import D305004 from '../views/date/305/305004'
import D305005 from '../views/date/305/305005'
import D305006 from '../views/date/305/305006'
import D305007 from '../views/date/305/305007'
import D305008 from '../views/date/305/305008'
import D305009 from '../views/date/305/305009'
import D305010 from '../views/date/305/305010'
/*other*/
import Dother1 from '../views/date/other/1'
import Dother2 from '../views/date/other/2'
import Dother3 from '../views/date/other/3'
import Dother4 from '../views/date/other/4'
import Dother5 from '../views/date/other/5'

// 项目子页面
/*401*/
import I401001 from '../views/item/web/401/401001'
import I401002 from '../views/item/web/401/401002'
import I401003 from '../views/item/web/401/401003'
import I401004 from '../views/item/web/401/401004'
/*402*/
import I402001 from '../views/item/web/402/402001'



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
	// 301
	{
		path: '/date/301/301001',
		name: 'D301001',
		component: D301001,
		show: false
	},
	{
		path: '/date/301/301002',
		name: 'D301002',
		component: D301002,
		show: false
	},
	// 302
	{
		path: '/date/302/302001',
		name: 'D302001',
		component: D302001,
		show: false
	},
	{
		path: '/date/302/302002',
		name: 'D302002',
		component: D302002,
		show: false
	},
	{
		path: '/date/302/302003',
		name: 'D302003',
		component: D302003,
		show: false
	},
	{
		path: '/date/302/302004',
		name: 'D302004',
		component: D302004,
		show: false
	},
	{
		path: '/date/302/302005',
		name: 'D302005',
		component: D302005,
		show: false
	},
	{
		path: '/date/302/302006',
		name: 'D302006',
		component: D302006,
		show: false
	},
	{
		path: '/date/302/302007',
		name: 'D302007',
		component: D302007,
		show: false
	},
	{
		path: '/date/302/302008',
		name: 'D302008',
		component: D302008,
		show: false
	},
	{
		path: '/date/302/302009',
		name: 'D302009',
		component: D302009,
		show: false
	},
	{
		path: '/date/302/302010',
		name: 'D302010',
		component: D302010,
		show: false
	},
	{
		path: '/date/302/302011',
		name: 'D302011',
		component: D302011,
		show: false
	},
	{
		path: '/date/302/302012',
		name: 'D302012',
		component: D302012,
		show: false
	},
	{
		path: '/date/302/302021',
		name: 'D302021',
		component: D302021,
		show: false
	},
	{
		path: '/date/302/302022',
		name: 'D302022',
		component: D302022,
		show: false
	},
	{
		path: '/date/302/302023',
		name: 'D302023',
		component: D302023,
		show: false
	},
	{
		path: '/date/302/302024',
		name: 'D302024',
		component: D302024,
		show: false
	},
	{
		path: '/date/302/302025',
		name: 'D302025',
		component: D302025,
		show: false
	},
	{
		path: '/date/302/302026',
		name: 'D302026',
		component: D302026,
		show: false
	},
	{
		path: '/date/302/302027',
		name: 'D302027',
		component: D302027,
		show: false
	},
	{
		path: '/date/302/302028',
		name: 'D302028',
		component: D302028,
		show: false
	},
	{
		path: '/date/302/302029',
		name: 'D302029',
		component: D302029,
		show: false
	},
	{
		path: '/date/302/302030',
		name: 'D302030',
		component: D302030,
		show: false
	},
	{
		path: '/date/302/302031',
		name: 'D302031',
		component: D302031,
		show: false
	},
	{
		path: '/date/302/302032',
		name: 'D302032',
		component: D302032,
		show: false
	},
	{
		path: '/date/302/302033',
		name: 'D302033',
		component: D302033,
		show: false
	},
	{
		path: '/date/302/302034',
		name: 'D302034',
		component: D302034,
		show: false
	},
	// 305
	{
		path: '/date/305/305001',
		name: 'D305001',
		component: D305001,
		show: false
	},
	{
		path: '/date/305/305002',
		name: 'D305002',
		component: D305002,
		show: false
	},
	{
		path: '/date/305/305003',
		name: 'D305003',
		component: D305003,
		show: false
	},
	{
		path: '/date/305/305004',
		name: 'D305004',
		component: D305004,
		show: false
	},
	{
		path: '/date/305/305005',
		name: 'D305005',
		component: D305005,
		show: false
	},
	{
		path: '/date/305/305006',
		name: 'D305006',
		component: D305006,
		show: false
	},
	{
		path: '/date/305/305007',
		name: 'D305007',
		component: D305007,
		show: false
	},
	{
		path: '/date/305/305008',
		name: 'D305008',
		component: D305008,
		show: false
	},
	{
		path: '/date/305/305009',
		name: 'D305009',
		component: D305009,
		show: false
	},
	{
		path: '/date/305/305010',
		name: 'D305010',
		component: D305010,
		show: false
	},
	// other
	{
		path: '/date/other/1',
		name: 'Dother1',
		component: Dother1,
		show: false
	},
	{
		path: '/date/other/2',
		name: 'Dother2',
		component: Dother2,
		show: false
	},
	{
		path: '/date/other/3',
		name: 'Dother3',
		component: Dother3,
		show: false
	},
	{
		path: '/date/other/4',
		name: 'Dother4',
		component: Dother4,
		show: false
	},
	{
		path: '/date/other/5',
		name: 'Dother5',
		component: Dother5,
		show: false
	},
	/*项目子页面*/
	{
		path: '/item/web/401/401001',
		name: 'I401001',
		component: I401001,
		show: false
	},
	{
		path: '/item/web/401/401002',
		name: 'I401002',
		component: I401002,
		show: false
	},
	{
		path: '/item/web/401/401003',
		name: 'I401003',
		component: I401003,
		show: false
	},
	{
		path: '/item/web/401/401004',
		name: 'I401004',
		component: I401004,
		show: false
	},
	{
		path: '/item/web/402/402001',
		name: 'I402001',
		component: I402001,
		show: false
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
