import Vue from 'vue';
import App from './App.vue';
// 导入全局样式
import './style/index.css';
// 引入element-ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 注册element-ui插件
Vue.use(ElementUI);

Vue.config.productionTip = false;


// 引入路由
import router from './router/router';
new Vue({
    render: h => h(App),
    router: router, //挂载路由
}).$mount('#app')