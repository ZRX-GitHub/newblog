import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'




import '../src/assets/css/css.css'
import '../src/assets/css/dark.css'

import '../src/assets/js/js'

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

// 302目录
import catalog302 from './views/date/302/data-classify-catalog-302';
Vue.component('catalog302', catalog302);

// 305目录
import catalog305 from './views/date/305/data-classify-catalog-305';
Vue.component('catalog305', catalog305);

// other目录
import catalogother from './views/date/other/data-classify-catalog-other';
Vue.component('catalogother',catalogother);

// 401目录
import catalog401 from './views/item/web/401/item-classify-catalog-401';
Vue.component('catalog401', catalog401);

// 402目录
import catalog402 from './views/item/web/402/item-classify-catalog-402';
Vue.component('catalog402', catalog402);



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
