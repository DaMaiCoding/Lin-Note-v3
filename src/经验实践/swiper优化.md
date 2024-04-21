# swiper 优化 (uniapp vue3 版本)

```vue
<!--
@description: swiper 优化 (uniapp vue3 版本)
-->

<template>
  <view class="t-content">
    <!-- swiper示例 -->
    <swiper v-if="swiperList && swiperList.length > 0" class="t-swiper" :duration="duration" :current="current" @animationfinish="itemChange">
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <!-- 这里是你可以任意定义的内容哦，例如答题类、视频轮播类... //开始 -->
        <view class="t-item-con t-wh-100p" :style="{ 'background-image': 'url(' + item.bgImg + ')' }">
          <view class="t-item-title">{{ item.title }}</view>
          <text class="t-item-desc">{{ item.desc }}</text>
        </view>
        <!-- 这里是你可以任意定义的内容哦，例如答题类、视频轮播类... //结束 -->
      </swiper-item>
    </swiper>
    <!-- 下面这个是为了演示快速跳转到某一个item -->
    <view class="t-leap-desc">注：上面swiper中共10000个带图片的item，点击下方序号快速跳转：</view>
    <view class="t-leap">
      <view @click="leapTo" data-num="9">9</view>
      <view @click="leapTo" data-num="99">99</view>
      <view @click="leapTo" data-num="999">999</view>
      <view @click="leapTo" data-num="1999">1999</view>
      <view @click="leapTo" data-num="2999">2999</view>
      <view @click="leapTo" data-num="3999">3999</view>
      <view @click="leapTo" data-num="4999">4999</view>
      <view @click="leapTo" data-num="5999">5999</view>
      <view @click="leapTo" data-num="6999">6999</view>
      <view @click="leapTo" data-num="7999">7999</view>
      <view @click="leapTo" data-num="8999">8999</view>
      <view @click="leapTo" data-num="9999">9999</view>
    </view>
  </view>
</template>

<script setup lang="ts">
/* ------------------------ 导入 与 引用 ----------------------------------- */
import { ref } from 'vue'
/* ------------------------ 变量 与 数据 ----------------------------------- */
//这里引入封装的工具类方法
//测试图片背景，这块为了测试带图片且数据量大也不存在性能问题
const bgImg = 'https://img-blog.csdnimg.cn/140a01b8ad3f46bb9b970fdd85433ebe.png'

const list: any = [] //list -- swiper所有数据的存放列表
const duration = ref() //duration -- 初始化设置的过渡时间
const swiperList = ref([]) //swiper实际列表，里面放的swiper-item数量为1-3个
const current = ref(0) //swiper实际列表（swiperList）中当前可以看到的那个swiper-item对应的下标，从0开始
const currItemNo = ref(1) //当前显示的swiper-item在所有数据的存放列表（list）中的序号，例如总数量list里共10000条数据，currItemNo=150是指当前显示的是第150条数据
/* ------------------------ 监听 与 控制 ----------------------------------- */
/* ------------------------ 函数 与 方法 ----------------------------------- */
const initSwiper = (arr, callback) => {
  swiperList.value = arr.length > 3 ? [arr[0], arr[1], arr[2]] : arr
  if (callback) {
    callback()
  }
}

const leapToItem = (num, list, durationTmp, callback) => {
  if (currItemNo.value == num) {
    if (callback) {
      callback()
    }
  } else {
    const idx = num - 1
    let swiperListTmp, currentTmp
    if (idx == 0) {
      swiperListTmp = list.length <= 3 ? list : [list[idx], list[idx + 1], list[idx + 2]]
      currentTmp = 0
    } else if (idx == list.length - 1) {
      swiperListTmp = list.length <= 3 ? list : [list[idx - 2], list[idx - 1], list[idx]]
      currentTmp = 2
    } else {
      swiperListTmp = list.length <= 3 ? list : [list[idx - 1], list[idx], list[idx + 1]]
      currentTmp = 1
    }
    duration.value = 0
    nextTick(() => {
      swiperList.value = [...swiperListTmp] as any
      current.value = currentTmp
      currItemNo.value = num
      nextTick(() => {
        duration.value = durationTmp
        if (callback) {
          callback()
        }
      })
    })
  }
}
const changeSwiperItem = (currIdx, listTmp, durationTmp, callback) => {
  if (current.value == currIdx) {
    return
  }
  var arr = JSON.parse(JSON.stringify(listTmp))
  var max = arr.length
  let currItemNoTmp = JSON.parse(JSON.stringify(currItemNo.value))
  let swiperListTmp
  let currentTmp
  if (max > 3 && ((currItemNoTmp == 1 && currIdx == 1) || (currItemNoTmp > 1 && currIdx == 2 && currItemNoTmp < max))) {
    currItemNoTmp += 1
    swiperListTmp =
      max <= 3
        ? arr
        : currItemNoTmp == 2
        ? [arr[currItemNoTmp - 2], arr[currItemNoTmp - 1], arr[currItemNoTmp]]
        : currItemNoTmp == max
        ? [arr[currItemNoTmp - 3], arr[currItemNoTmp - 2], arr[currItemNoTmp - 1]]
        : [arr[currItemNoTmp - 2], arr[currItemNoTmp - 1], arr[currItemNoTmp]]
    currentTmp = currItemNoTmp == 2 && currIdx == 1 ? 1 : currItemNoTmp < max ? 1 : 2
    current.value = currIdx
    duration.value = 0
    nextTick(() => {
      swiperList.value = [...swiperListTmp] as any
      current.value = currentTmp
      currItemNo.value = currItemNoTmp
      nextTick(() => {
        duration.value = durationTmp
        if (callback) {
          callback()
        }
      })
    })
  } else if (max > 3 && ((currIdx == 0 && currItemNoTmp > 1) || (currIdx == 1 && currItemNoTmp == max))) {
    currItemNoTmp = currItemNoTmp - 1
    swiperListTmp =
      max <= 3 ? arr : currItemNoTmp > 2 ? [arr[currItemNoTmp - 2], arr[currItemNoTmp - 1], arr[currItemNoTmp]] : [arr[0], arr[1], arr[2]]
    currentTmp = currItemNoTmp == 1 ? 0 : 1
    current.value = currIdx
    duration.value = 0
    nextTick(() => {
      swiperList.value = [...swiperListTmp] as any
      current.value = currentTmp
      currItemNo.value = currItemNoTmp
      nextTick(() => {
        duration.value = durationTmp
        if (callback) {
          callback()
        }
      })
    })
  } else if (max <= 3) {
    current.value = currIdx
    currItemNo.value = currIdx + 1
    if (callback) {
      callback()
    }
  }
}

/**
 * swiper切换事件，这里监听的是切换完成动画事件
 */
const itemChange = (e) => {
  changeSwiperItem(Number(e.detail.current), list, duration.value, () => {
    //切换完成
    //这里可以写自己的逻辑啦，例如去判断当前item是否收藏...
    console.log('切换完成，当前显示的是===', swiperList.value[current.value])
  })
}
/**
 * 跳到第n个item数据，n为序号从1开始
 */
const leapTo = (e) => {
  leapToItem(Number(e.currentTarget.dataset.num), list, duration.value, () => {
    //这里是跳完之后，此时页面已经显示第n个item了，
    //你可以在这里写自己的逻辑了，例如判断当前item是否收藏，是否错题...
    console.log('已经跳转到第' + Number(e.currentTarget.dataset.num) + '个item啦')
  })
}
/* ------------------------- 生命周期 -------------------------------------- */
onLoad(() => {
  //这里去请求所有数据，如果接口是分页的就多请求几次拿到所有数据，不存在性能问题
  // uni.request({
  // ...请求逻辑
  // () => { list = res.data.list }
  // })
  //这里模拟请求到了所有数据，例如10000条，然后放到list数组里
  for (let i = 0; i < 10000; i++) {
    list.push({
      bgImg: bgImg,
      title: '[第' + (i + 1) + '个元素]我是一个无限制数量高性能的swiper',
      desc:
        'A. [第' +
        (i + 1) +
        '个元素]实现原理：\n\nB. swiper里永远最多只放3个元素，\n\nC. 在swiper切换时根据原来的下标计算新的需要显示的item对应下标，\n\nD. 然后组装好新的最多3个item数据渲染到页面'
    })
  }
  //请求到所有数据后放到list变量里后，初始化swiper
  initSwiper(list, () => {
    //这里是初始化完后的回调，你可以写自己的逻辑了，例如拿到当前swiper-item
    console.log(swiperList.value[current.value])
  })
})
</script>

<style lang="scss" scoped>
.t-content {
  background-color: #f7f7f7;
  min-height: 100vh;
}

.t-h-100p {
  height: 100%;
}

.t-hover {
  opacity: 0.7;
}

.t-w-100p {
  width: 100%;
}

.t-wh-100p {
  width: 100%;
  height: 100%;
}

.t-swiper {
  width: 100%;
  box-sizing: border-box;
  height: 500rpx;
}

.t-item-con {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30rpx;
  box-sizing: border-box;
}

.t-item-title {
  font-size: 36rpx;
  color: #ffffff;
  font-weight: bold;
  text-align: justify;
}

.t-item-desc {
  font-size: 28rpx;
  color: #ffffff;
  margin-top: 30rpx;
  text-align: justify;
}

.t-leap-desc {
  font-size: 28rpx;
  width: 690rpx;
  margin: 60rpx auto 0rpx;
  color: black;
}

.t-leap {
  width: 663rpx;
  height: 100rpx;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 15rpx;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.t-leap view {
  font-size: 24rpx;
  color: #fff;
  padding: 15rpx;
  background: #42b983;
  border-radius: 10rpx;
  width: 57rpx;
  height: 30rpx;
  text-align: center;
  line-height: 30rpx;
  margin: 10rpx;
}
</style>
```

