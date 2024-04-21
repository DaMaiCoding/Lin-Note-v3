# vue3 axios 请求封装

## 请求封装

```javascript
// 封装请求函数
export function deleteBillAPI(data) {
  return http
    .server()
    .post('app/chargingInvoiceTitle.deleteChargingInvoiceTitle', { ...data })
    .then(
      (res) => [null, res.data],
      (err) => [err, null]
    )
    .catch((err) => {
      console.log('错误信息', err)
    })
}
```



```javascript
// 函数调用
const [err, res] = await deleteBillAPI({ id, phone: userPhone.value })
  if (!err) {
    getBilList()
    setTimeout(() => {
      uni.showToast({
        icon: 'success',
        title: '删除成功'
      })
    }, 500)
  }else if(res){
      
  }
```

