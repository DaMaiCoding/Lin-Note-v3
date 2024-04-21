# argon2

## argon2 安装

argon2 在 window10 下，无法直接安装，需要下载对应的工具

```shell
# 安装工具
npm install --global --production windows-build-tools

# 下载
npm install argon2
```



## 加密解密

```typescript
import * as argon2 from 'argon2'

// 加密
const newPassword = await argon2.hash(password) // password 为前端传过来的密码

// 解密
const isPasswordValid = await argon2.verify(user.password, password) // user.password 数据库的密码、password 前端传过来的数据
```

