# Nestjs 入门

## IOC 控制反转 DI 依赖注入 (`没懂`)

### 什么是强耦合

```typescript
class A {
  name: string;
  constructor() {
    this.name = "小满";
  }
}

class B {
  a: any;
  constructor() {
    this.a = new A().name;
  }
}

class C {
  a: any;
  constructor() {
    this.a = new A().name;
  }
}
```

可以看到，上面的代码，如果 `class A` constructor 改为参数传入 (如下面代码)

那么，`class B`、`class C` 也需要修改，他们的关系非常混乱，这就是一种**强耦合**

```typescript
class A {
  name: string;
  constructor(name:string) {
    this.name = "小满";
  }
}

class B {
  a: any;
  constructor() {
    this.a = new A().name; // 这里需要改
  }
}

class C {
  a: any;
  constructor() {
    this.a = new A().name; // 这里需要改
  }
}
```

为了解决这样的一个问题，我们需要使用一种**依赖注入**的方式来解决

下面是改造后的代码

```typescript
class A {
  name: string;
  constructor(name: string) {
    this.name = "小满";
  }
}

class C {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  mo: any;
  constructor() {
    this.mo = {};
  }

  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  get(key: string) {
    return this.mo[key];
  }
}

const mo = new Container();
mo.provide("a", new A("小米哈哈哈"));
mo.provide("c", new A("小名哈哈哈"));

class B {
  a: any;
  c: any;
  constructor(mo: Container) {
    this.a = mo.get("a");
    this.c = mo.get("c");
  }
}
```



## 控制器

### Controller Request

控制器的作用就是拿到从前端传过来的数据，Nestjs 提供了方法参数装饰器，用于帮助我们快速获取参数

| @Request()              | req                             |
| ----------------------- | ------------------------------- |
| @Response()             | res                             |
| @Next()                 | next                            |
| @Session()              | req.session                     |
| @Param(key?: string)    | req.params`/`req.params[key]    |
| @Body(key?: string)     | req.body`/`req.body[key]        |
| @Query(key?: string)    | req.query`/`req.query[key]      |
| @Headers(name?: string) | req.headers`/`req.headers[name] |
| @HttpCode(code: Number) | 状态码: 200、300、500 ...       |
| @Headers()              | headers                         |

具体代码演示

```typescript
import {
  Controller,
  Get,
  Query,
  Post,
  Request,
  Headers,
  HttpCode,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() query) {
    //@request 的语法糖，不用写 req.query，可以简写为 query
    console.log(query);

    return {
      code: 200,
      message: query.name,
    };
  }
  // findAll(@Request() req) {
  //   console.log(req.query);

  //   return {
  //     code: 200,
  //     message: req.query.name,
  //   };
  // }

  @Post()
  create(@Body('age') body) {
    console.log(body);

    return {
      code: 200,
      // message: body.name,
    };
  }
  // create(@Request() req) {
  //   console.log(req.body);

  //   return {
  //     code: 200,
  //     message: req.body.name,
  //   };
  // }

  @Get(':id')
  @HttpCode(500) // 状态码
  findId(@Param('id') params, @Headers() headers) {
    console.log(headers);
    return {
      code: 200,
    };
  }
  // findId(@Request() req) {
  //   console.log(req.params);
  //   return {
  //     code: 200,
  //   };
  // }
}
```



## 提供者 `没懂`

