# uniapp-vuex数据持久化

## 场景

uniapp 中 微信小程序 vuex 数据持久化

vuex 只是 状态管理，重新刷新页面后，所有数据都会丢失

当需要保持登录态，就需要保持数据



## 安装

安装 `vuex-persistedstate`、`mp-storage`

```shell
npm install vuex-persistedstate
npm install mp-storage
```

**[注意]**

`vuex-persistedstate`本质还是使用 localStorage、sessionStorage 做数据持久化

`mp-storage`主要是 因为小程序无法直接使用 原生的 localStorage、sessionStorage, 需要使用下面的 Storage 垫片



## 实现

1. 全部持久化

store 文件夹中创建 index.js 用于持久化所有 vuex 中的数据

modules 为 vuex 中 store 分割成的模块

修改 storage 改变 存储模式

```javascript
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules/index.js";
//数据持久化插件 (因为小程序无法直接使用 原生的 localStorage、sessionStorage, 需要使用下面的 Storage 垫片)
import createPersistedState from "vuex-persistedstate";
// 小程序 Storage 垫片，用于在各个小程序平台实现 localStorage、sessionStorage
// 使用之前需要先引用此垫片，非全局变量
// 直接给 storage 对象上增加新属性的方式不太稳定，推荐使用 setItem 方式
import { localStorage, sessionStorage } from "mp-storage";

Vue.use(Vuex);
export default new Vuex.Store({
  modules,
  plugins: [
    // 直接持久化所有, 后期需要初始化单独数据再修改
    createPersistedState({
      // storage: localStorage, // 使用 localStorage 进行存储
      storage: sessionStorage // 使用 sessionStorage 进行存储
    }),
  ],
});
```



2. 部分持久化

```javascript
// 引入依赖  
import Vue from 'vue'  
import Vuex from 'vuex'  
import createPersistedState from 'vuex-persistedstate'  

Vue.use(Vuex)  

const state = {  
  favorites: [],  
  username:"",  
  demoxxxx: ""  
}  

export default new Vuex.Store({  
  state,  
  plugins: [  
    // 可以有多个持久化实例  
    createPersistedState({  
      key: 'app_config_data',  // 状态保存到本地的 key   
      paths: ['favorites', 'username'],  // 要持久化的状态，在state里面取，如果有嵌套，可以  a.b.c   
      storage: {  // 存储方式定义  
        getItem: (key) => uni.getStorageSync(key), // 获取  
        setItem: (key, value) => uni.setStorageSync(key, value), // 存储  
        removeItem: (key) => uni.removeStorageSync(key) // 删除  
      }  
    })  
  ]  
})
```







