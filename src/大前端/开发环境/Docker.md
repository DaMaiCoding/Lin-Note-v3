# Docker

## 1. 基本使用

```shell
# 查看 docker 版本
docker --version

# 查看 docker-compose 版本
docker-compose --version

# 查看 docker 中运行的服务
docker ps

# 停止 docker 中的服务, some-mysql 是服务名
docker stop some-mysql

# 删除 docker 中的服务
docker rm some-mysql

# 获取所有服务
docker network ls

# 查看某个服务的详细信息，docker_default 为服务名称
docker network inspect docker_default

# 查看服务运行失败的原因 mydb 为服务名称
docker logs -f mydb

# 配置镜像加速器
cd etc/docker
vim daemon.json

# 修改镜像地址为
{
  "registry-mirrors": ["https://lwviz7xj.mirror.aliyuncs.com"]
}
```





































