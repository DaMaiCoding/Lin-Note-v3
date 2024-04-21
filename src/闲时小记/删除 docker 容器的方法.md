# 删除 docker 容器的方法

```shell
# 停止所有 docker 容器
docker kill $(docker ps -a -q)

# 删除所有 docker 容器
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)

# 删除 所有 docker 安装包
sudo yum remove docker*

# 删除所有 docker 相关文件夹
rm -rf /var/lib/docker/

# 查看 docker 是否删除
docker version
```



