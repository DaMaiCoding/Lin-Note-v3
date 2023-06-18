# js的巧妙写法

## 1. 截取 数组最快的办法

通过直接设置, 数组长度即可

```javascript
let arr = [1, 2, 6, 8]
arr.length = 2
console.log(arr) // [1, 2]
```



## 2. 字符类型 转 数字类型

使用 `+` 能巧妙实现 **字符类型** 转 **数字类型**

不仅可以转换 **整数**, 还是可以转换 **浮点数**

```javascript
var num1 = '236'
var num2 = '23'
var num3 = '1.32'
console.log(num2 + num1) // 23236
console.log(num3 + num1) // 1.32236
// 使用 '+'
console.log(+num2 + +num1) // 259
console.log(+num3 + +num1) // 237.32
// 使用 parseInt()
console.log(parseInt(num2) + parseInt()(num1)) // 259
```



## 3. 字符模板

```javascript
let name = 'Lin'
let srt = `我叫${name}`
```



## 4. 箭头函数返回值的 两种写法

下面两种写法都一样

- 有大括号的，必须写 `return` 才会返回执行结果
- 没有大括号的，直接把执行结果返回

```typescript
// 写法一
async () => {
 	const data =  data = await duplicateQuestionService(_id)
  return data
}

// 写法二
async () => await duplicateQuestionService(_id)
```



