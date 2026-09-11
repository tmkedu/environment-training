能源學習站 PWA

部署方式：
1. 將此資料夾所有檔案一起上傳到 HTTPS 網頁空間（不可只傳 index.html）。
2. 用 iPad 的 Safari 開啟網站網址。
3. 點「分享」→「加入主畫面」→「加入」。
4. 第一次在線開啟後，PWA 會快取網站，可在離線狀態下再次啟動。

注意：Service Worker 必須透過 HTTPS（或開發時 localhost）才能正常運作，直接從「檔案」App 開 index.html 不會啟用完整 PWA。
