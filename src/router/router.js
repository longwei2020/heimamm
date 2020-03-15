// 导入vue
import Vue from 'vue';
// 导入路由
import VueRouter from 'vue-router';

// 注册路由
Vue.use(VueRouter);

// 防止同路由点击报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
        return routerPush.call(this, location).catch(error => error)
    }
    // 实例化路由
const router = new VueRouter({
    routes: [

    ]
});


// 把路由输出出去
export default router;