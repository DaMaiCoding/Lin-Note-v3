# wifi 密码

## windows 查看 wifi 账号

```cmd
netsh wlan show profile
```

![image-20240106223638881](./assets/wifi密码/image-20240106223638881.png)	

## 查看 wifi 密码

```cmd
netsh wlan show profile name=CMCC-hRjU_5G key=clear
```

`CMCC-hRjU_5G` 就是 wifi账号名，这个关键内容就是 wifi 密码了

![image-20240106223810373](./assets/wifi密码/image-20240106223810373.png)