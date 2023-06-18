# npm-基础知识

## 基础安装命令

`npm install` 和 `npm i` 是一样的,都是安装package.json文件中的依赖包



`--save` 等同于 `-S` 会把依赖包名称添加到 package.json 文件 dependencies 下（生产环境）

`--save-dev` 等同于 `-D` 则添加到 package.json 文件 devDependencies下 (开发环境)



`@版本号` 可安装指定版本号的插件

```shell
npm install --save  react-router@2.8.1  # 2.8.1是指定的版本号
```

