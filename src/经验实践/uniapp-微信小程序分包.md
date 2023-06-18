# uniapp-微信小程序分包

## 场景

因为 微信小程序上传有 大小限制，需要将代码包进行分包



## 分包步骤

1. 开启分包优化

```json
"mp-weixin": {
	"optimization":{"subPackages":true}
}
```

**[注意]**

只支持 mp-weixin、mp-qq、mp-baidu 的分包优化



2. 配置 pages.json

```json
"subPackages": [{
		"root": "pagesB",
		"pages": [{
			"path": "search/searchShop",
			"style": {
				"navigationBarTitleText": "商家搜索",
				"enablePullDownRefresh": false,
				"navigationStyle": "custom"
			}
		}]
	},
  {
		"root": "pagesA",
		"pages": [{
				"path": "address/index",
				"style": {
					"navigationBarTitleText": "我的收货地址",
					"navigationStyle": "custom",
					"enablePullDownRefresh": false
				}
		}]
}],
```

