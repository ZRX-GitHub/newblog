import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'



import '../src/assets/css/css.css'
import '../src/assets/css/dark.css'

/*
* 去除Vue warn，取消eslint
* */
Vue.config.silent = true


// import prismJs from '../src/assets/utils/prism'
// import prismCss from '../src/assets/css/prism.css'
// import prismCssDark from '../src/assets/css/prism-dark.css.css'

// 自定义组件
import MyComponent from "./components/MyComponent";
Vue.component('MyBackTop',MyComponent);

// 底部
import MyFooter from "./components/MyFooter";

Vue.component('MyFooter', MyFooter);

// 301目录
import catalog301 from './views/date/301/data-classify-catalog-301';
Vue.component('catalog301', catalog301);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 加载title
router.beforeEach(((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
}))
