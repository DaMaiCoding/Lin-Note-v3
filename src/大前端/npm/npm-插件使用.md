# npm-插件使用

## 时间格式化插件

moment、dayjs (安装 这个两个插件 语法都一样，只 `dayjs` 体积更小罢了)

```javascript
import moment from 'dayjs'
filters: {
    moment (date) {
        // 超过七天，显示日期
        if (moment(date).isBefore(moment().subtract(7, 'days'))) {
            return moment(date).format('YYYY-MM-DD')
        } else {
            // 1小时前，xx小时前，x天前
            return moment(date).from(moment())
        }
    }
}
```



## 自定义事件的插件

event-emitter

为什么使用这个插件？

Vue2：new Vue() 就是 event 来得到 自定义事件，就可以使用 event.on、event.off

Vue3：没法通过上面的方法得到，所以得使用这个第三方库

```vue
// 使用该插件的方法
import ee from 'event-emitter'

ee.on
ee.off
```



## 输入框校验插件

vee-validate

如果需要支持中文还得引入

```javascript
import zh from 'vee-validate/dist/locale/zh_CN'
```

如果需要做国际化，可以使用 i18n 

```javascript
import VueI18n from 'vue-i18n'
```



--- vee-validate 使用示例 ---

```vue
// index.vue
<tempalte>
<validation-provider name="email" rules="required|email" v-slot="{errors}">
    <div class="layui-input-inline">
        <input
               type="text"
               name="username"
               v-model="username"
               placeholder="请输入用户名"
               autocomplete="off"
               class="layui-input" />
    </div>
    <div class="layui-form-mid">
        <span style="color: #c00;">{{errors[0]}}</span>
    </div>
</validation-provider>
</tempalte>
```

```javascript
// veevalidate.js
import { extend, localize } from 'vee-validate'
import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'

import zh from 'vee-validate/dist/locale/zh_CN'

extend('email', email)
extend('min', min)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码'
  },
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}!!!'
    }
  }
})
```



--- i18n 使用示例 ---

```javascript
// vue 页面是一样的，只有 js 页面不同
// veevalidate-i18n.js
import { extend, configure } from 'vee-validate'
import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'
import { i18n } from './i18n'

configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`)

    return i18n.t(`validation.${values._rule_}`, values)
  }
})

extend('email', email)
extend('min', min)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)
```

```javascript
// i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from 'vee-validate/dist/locale/zh_CN'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    zh_CN: {
      fields: {
        email: '邮箱',
        password: '密码',
        name: '昵称',
        username: '账号',
        code: '验证码'
      },
      validation: {
        ...zh.messages,
        required: '请输入{_field_}',
        email: '请输入正确的{_field_}!!!'
      }
    }
  }
})

export { i18n }
```



## 下拉刷新插件

插件: `better-scroll`

在实际开发中，我们更多的是使用第三方库，下面以`better-scroll`进行举例：

HTML结构

```js
<div id="position-wrapper">
    <div>
        <p class="refresh">下拉刷新</p >
        <div class="position-list">
   <!--列表内容-->
        </div>
        <p class="more">查看更多</p >
    </div>
</div>
```



实例化上拉下拉插件，通过`use`来注册插件

```js
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import PullUp from '@better-scroll/pull-up';
BScroll.use(PullDown);
BScroll.use(PullUp);
```



实例化`BetterScroll`，并传入相关的参数

```js
let pageNo = 1,pageSize = 10,dataList = [],isMore = true;  
var scroll= new BScroll("#position-wrapper",{
    scrollY:true,//垂直方向滚动
    click:true,//默认会阻止浏览器的原生click事件，如果需要点击，这里要设为true
    pullUpLoad:true,//上拉加载更多
    pullDownRefresh:{
        threshold:50,//触发pullingDown事件的位置
        stop:0//下拉回弹后停留的位置
    }
});
//监听下拉刷新
scroll.on("pullingDown",pullingDownHandler);
//监测实时滚动
scroll.on("scroll",scrollHandler);
//上拉加载更多
scroll.on("pullingUp",pullingUpHandler);

async function pullingDownHandler(){
    dataList=[];
    pageNo=1;
    isMore=true;
    $(".more").text("查看更多");
    await getlist();//请求数据
    scroll.finishPullDown();//每次下拉结束后，需要执行这个操作
    scroll.refresh();//当滚动区域的dom结构有变化时，需要执行这个操作
}
async function pullingUpHandler(){
    if(!isMore){
        $(".more").text("没有更多数据了");
        scroll.finishPullUp();//每次上拉结束后，需要执行这个操作
        return;
    }
    pageNo++;
    await this.getlist();//请求数据
    scroll.finishPullUp();//每次上拉结束后，需要执行这个操作
    scroll.refresh();//当滚动区域的dom结构有变化时，需要执行这个操作    
}
function scrollHandler(){
    if(this.y>50) $('.refresh').text("松手开始加载");
    else $('.refresh').text("下拉刷新");
}
function getlist(){
    //返回的数据
    let result=....;
    dataList=dataList.concat(result);
    //判断是否已加载完
    if(result.length<pageSize) isMore=false;
    //将dataList渲染到html内容中
}    
```



注意点：

使用`better-scroll`实现下拉刷新、上拉加载时要注意以下几点：

- `wrapper`里必须只有一个子元素
- 子元素的高度要比`wrapper`要高
- 使用的时候，要确定`DOM`元素是否已经生成，必须要等到`DOM`渲染完成后，再`new BScroll()`
- 滚动区域的`DOM`元素结构有变化后，需要执行刷新 `refresh()`
- 上拉或者下拉，结束后，需要执行`finishPullUp()`或者`finishPullDown()`，否则将不会执行下次操作
- `better-scroll`，默认会阻止浏览器的原生`click`事件，如果滚动内容区要添加点击事件，需要在实例化属性里设置`click:true`
