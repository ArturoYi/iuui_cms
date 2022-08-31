<center><font color="red" size=10>🍊_🍊</font></center>

![](https://img.shields.io/badge/版本-0.0.1-3963bc.svg)
![](https://img.shields.io/badge/node-8.11.0+-3963bc.svg)
![](https://img.shields.io/badge/脚手架-vuecli5-3963bc.svg)


## 线上 Demo

<https://iuui-cms.netlify.app/#/>

## 介紹

1. 🍊UI：是在實踐中總結出來的cms解決方案。基於vue2，使用TS，和JSX封裝了常用的組件（如表單，選擇器，圖標等等），且支持自定義以及和第三方組件庫並行開發。
2. 封裝了vue-router權限級別菜單，vuex持久化，i18n國際化，scss多主題。
3. 網絡封裝axios，身份驗證使用雙token方案：access_token和refresh_token，請求時access_token用於身份驗證，但過期時間較短，記錄主要使用的用戶信息，refresh_token過期時間較長，負責刷新access_token，這樣達到用戶狀態實時更新。
4. 同時axios封裝了重複請求攔截

## 使用

```bash
$ git clone https://github.com/540765/iuui_cms.git
```

```bash
yarn
```

```bash
yarn dev
```

## 注意

開源項目不能無縫升級，請按需使用

## 後續

......
