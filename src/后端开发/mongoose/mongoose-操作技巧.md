# mongoose-操作技巧

定义唯一的键值，用于区别其他的相同的数据

其中 `index：{ unique: true }`, 就是生成唯一键值的写法

```javascript
username: { type: String, index: { unique: true }, sparse: true },
```



重复数据插入的解决办法，采用官方的方法，去检查 `error.code === 11000`

```javascript
UserSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Error: Mongoose has a duplicate key'))
    } else {
        next(error)
    }
})
```



用户更新数据的时候也可以使用 `pre` 方法

```java
UserSchema.pre('update', function (next) {
    this.update = moment().format('YYYY-MM-DD HH:mm:ss')
})
```



联合查询，通过查询到的 `uid` 再查询获取其他信息

```javascript
PostSchema.statics = {
/**
 * 获取文章列表数据
 * @param {Object} Options 筛选条件
 * @param {String} sort 排序方式
 * @param {Number} page 分页页数
 * @param {Number} limit 分页条数
*/
  getList: function (options, sort, page, limit) {
    return this.find(options)
      .sort({ [sort]: -1 })
      .skip(page * limit)
      .limit(limit)
      .populate({
        path: 'uid',
        select: 'name isVip'
      })
  }
}
```

