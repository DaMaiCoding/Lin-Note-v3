# utils 统一出口 index.js

## 多个需要导入的文件

```javascript
// utils/test1.js
export function test1() {
  console.log('test1')
}
export function test2() {
  console.log('test2')
}
```



```javascript
// utils/test2.js
export function test3() {
  console.log('test3')
}
export function test4() {
  console.log('test4')
}
```



## 统一出口文件

```javascript
// utils/index.js
export * from './test1'
export * from './test2'
```



## 使用

```javascript
import { test1, test2, test3, test4 } from '@/utils/index'
```

