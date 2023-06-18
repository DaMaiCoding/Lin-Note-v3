# npm-管理插件

## node 版本管理插件

nvm 相关命令

```shell
# 查看已经安装的版本
nvm list 

# 安装最新版本 nvm
nvm install 

# 切换使用指定的版本node
nvm use

# 下载版本号为14.16.1的node
nvm install 14.16.1 

# 卸载版本号为14.16.1的node
nvm uninstall 14.16.1

# 查看 帮助
nvm --help

# 获取所有版本信息
nvm list available
```



## 依赖包 管理工具 

ncu: npm-check-updates

```shell
# 安装
npm install -g npm-check-updates

# 检查更新
ncu

# 升级packjson.json
ncu -u

# 安装
npm isntall
```



## 安装指定版本插件

```shell
# 直接在插件名后面加版本号
npm add vue-i18n@8.14.1 -S

# 直接修改 package.json 中插件的版本号，在重新下载插件
npm install
```



## 单元测试插件

```shell
# 安装
npm install jest --save-dev

# 测试
npm test src/test.ts
```

```tsx
// 测试代码
import { flattern } from './array-flatten'

describe('数组扁平化', () => {
    it('空数组', () => {
        const res = flatten1(arr)
        expect(res).toEqual([1, 2, 3])
    })
})
```



## 简易服务器插件 (开发时使用)

```shell
# 安装
npm install --save-dev lite-server
```

```json
// package.json 中配置
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"start": "lite-server"
},
```

```shell
# 运行 服务代码
npm start
```



## Rullup 热更新插件

```shell
# 安装
npm install rollup-plugin-livereload
```

```json
// rollup.config.js 中配置
import livereload from "rollup-plugin-livereload"; // 热更新插件
export default {
  plugins: [
    livereload()
  ]
}
```

代码启动后, 就自动有热更新了



## Rullup 代码压缩插件

```shell
# 安装
npm install rollup-plugin-terser
```

```json
// rollup.config.js 中配置
import { terser } from "rollup-plugin-terser";
const isDev = () => {
  return process.env.NODE_ENV === "development";
};
export default {
  plugins: [
    terser({
      compress: {
        drop_console: !isDev(),
      },
    }),
  ]
}
```

打开 `sourceMap` 可以让代码不混乱, 能找到原文件

```json
// tsconfig.json
{
  "sourceMap": true
}
```



