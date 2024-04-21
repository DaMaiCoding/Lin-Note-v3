# js 技巧

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



## 5. 原始类型 与 包装类型

### 前提知识

js中的数据类型包括基础数据类型：`number`、`string`、`boolean`、`null`、`undefined`

复合(引用)数据类型：`Object` -> 包括 `Array`、`function`、`Data`等



其中基础数据类型的 `boolean`、`number`、`string` 又称为包装类型，因为 JavaScript 会在后台隐式地将**基本类型**转换为**对象**

当 `Number()` 和 运算符 `new` 一起作为构造函数使用时，它返回一个新创建的 `Number` 对象。如果不用 `new` 运算符，把 `Number()` 作为一个函数来调用，它将把自己的参数转换成一个原始的数值，并且返回这个值（如果转换失败，则返回 NaN）



### 包装类型与原始类型之间的转换

- 原始->包装: `new Number(123)`
- 包装->原始: `(new Number(123)).valueOf()`



```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false
```



`valueOf()` 是 `Object` 的原型方法，它定义在 `Object.prototype` 对象上，所有 `Object` 的实例对象都会继承 `valueOf()` 方法

`valueOf()` 方法能够返回对象的值。`JavaScript` 自动类型转换时会默认调用 `valueOf()` 原型方法

`Object` 对象默认 `valueOf()` 方法返回值与 `toString()` 方法返回值相同，但是部分类型对象重写了 `valueOf()` 方法



> **小知识：**
>
> 1、Number(1)是指将1转化为number类型，跟1是全等关系。Number(1)是把1转换为数字类型，new Number(1)是把 1 包装成了一个对象
>
> 2、一个原始类型值并没有任何可用的方法，其使用的方法是包装对象原型上的，例如：(12).toFixed()，toFixed()实际上是在Number对象原型(prototype)中声明的方法



## 6. hasOwnProperty 与 has

### hasOwnProperty

判断对象或者数组是否有 key 值，不检查类型

### has

判断对象或者数组是否有 key 值，不检查类型



## 7. falsy 与 truthy

### falsy 实例

```javascript
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```



### truthy 实例

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```



## 8. 变量对象的最优写法

### 实例

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y); 
  // name Lydia 
  // age 21
}
```



### 语法解释

`Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，上述情况返回一个二维数组，数组每个元素是一个包含键和值的数组：

```
[['name'，'Lydia']，['age'，21]]
```

使用`for-of`循环，我们可以迭代数组中的每个元素，上述情况是子数组。 我们可以使用`const [x，y]`在`for-of`循环中解构子数组。 `x`等于子数组中的第一个元素，`y`等于子数组中的第二个元素。

第一个子阵列是`[“name”，“Lydia”]`，其中`x`等于`name`，而`y`等于`Lydia`。第二个子阵列是`[“age”，21]`，其中`x`等于`age`，而`y`等于`21`。



## 回调函数、链式调用

异步请求，基本上都是采用 回调函数的方式，来进行处理异步返回数据的对吧

但是多个请求有相关联，那么回调函数 可能会造成回调地狱，这种连续多层嵌套的调用方式



ES6 的 Promise 将回调函数的这种请求方式，改换为 链式调用的方式去解决这种多成嵌套的请求方式

那么，这个链式调用，是如何实现的呢



```javascript
// 编写 then 函数调用方法
let taskList = []
let next = function ( nextParam ) {
    if( taskList.length > 0 ){
        let fn = taskList.shift()
        let result = fn && fn.call(this, nextParam)
        // 同步调用
        if( !(result instanceof MyPromise)){
            next(result)
        }
    }
}

function MyPromise(fn) {
    if(fn){
        fn((a)=>{
            //异步调
            setTimeout(()=>{
                next(a)
            }, 0)
        })
    }
    return this
}

MyPromise.prototype.then = function (fn) {
    taskList.push(fn)
    return this
}
```



```javascript
// 使用 封装的 then 方法
var pro = new MyPromise((resolved)=>{
 	resolved(1)
}).then((a)=>{
 	console.log(a) 	//1
    return new MyPromise((resolved)=>{
        setTimeout(()=>{
            resolved(2)
        }, 1000)
    })
}).then((a)=>{
	console.log(a)  //2
	return 3
}).then((a)=>{
 	console.log(a)	//3
})
```



## 判断字符串是否为纯数字

```javascript
const str = "37";
const n = Number(str) // 转为 number 类型
if (!isNaN(n)) // isNaN = not a number
{
    alert("是数字")
}
```













