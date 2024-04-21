# ts如何引入js文件

## 背景

网上有很多关于这方面的解决方案，都是有问题的，都是说要建立 `.d.ts` 文件配置下就好了，但是基本上都不能解决问题



## 解决办法

试了很久，发现只需要在 `tsconfig.json` 文件中加入 `“allowJs”: true` 即可

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false,
    "allowJs": true // 允许编译js文件
  }
}
```



js 文件，导出函数

```javascript
// tools.js
export default tools;
```



ts 文件，引入函数

```typescript
// main.ts
import * as tools from './tool.js'
const num = tools(2) as any // tools 为任意函数
```



> 可能引入没问题了，但是可能还是会报错，引入的函数是没有类型的，你可以给函数加个类型断言！

