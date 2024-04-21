# git clone 报错

## 报错

```shell
git clone https://github.com/openimsdk/open-im-uniapp-demo.git
```

直接克隆，因为网速慢，或者文件过大，会导致下面的错误

```shell
RPC failed； curl 92 HTTP/2 stream 5 was not closed cleanly: CANCEL (err 8)
```



## 解决方案

```shell
git clone https://github.com/openimsdk/open-im-uniapp-demo.git --depth 1
cd open-im-uniapp-demo
git fetch --unshallow
```

