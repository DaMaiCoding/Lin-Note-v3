# window11去除图标小箭头

## 去除快捷方式小箭头

```shell
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```

## 恢复快捷方式小箭头

```shell
reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```

## 操作方法

1. 桌面创建一个空白文本文件
2. 将上面的代码复制到空白文件, 保存
3. 将文件后缀改为 `.bat`, 并右键选择以管理员允许即可

## 缺点

会导致桌面图标消失

任务栏异常



## 根本解决方案

使用 `Dism++`

点击系统优化 -> Explorer -> 隐藏快捷方式小箭头