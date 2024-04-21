# OpenIm 部署 从零出发

## 基础环境搭建

安装宝塔，安装 docker 与 docker-compose

配置 docker 阿里docker镜像，解决镜像下载过慢问题

## OpenIm 搭建

[文档](https://docs.openim.io/zh-Hans/guides/gettingStarted/dockerCompose)

服务器大小：4核8G，然后按步骤走就行了

如果过程中报错，很大可能就是 `设置OPENIM_IP` 出现了问题

需要把拉下来的代码删除，重新拉，再执行就好了

##  OIMWS 搭建

克隆代码下来

```shell
git clone https://github.com/openim-sigs/oimws
cd oimws
```

构建 oimws

```shell
make build
```

> 这个可能会报错，如果报错按以下命令安装下，再 `build` 就差不多了

```shell
export GOPROXY=https://goproxy.io,direct
export GO111MODULE=on
```

开始执行

```shell
make start
```

