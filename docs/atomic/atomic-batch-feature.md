# Batch Processing Module

Edited by Enoch, Jan 22, 2025

## *1.* 相關服務簡介

### *1.1* atomic-gravity

- 作為 Atomic 頁面的 Gravity 客戶端元件集合

- 包含 subscriber、publish、server 等核心功能組件

### *1.2* node-gravity-sdk

- atomic-gravity 的基礎開發套件

- 主要實作與 Gravity 中 NATS 等元件的操作介面

### *1.3* atomic

- Gravity Atomic 的前端介面實作
- 提供使用者直觀的操作界面

## *2.* 環境建置指南
### *2.1* 專案下載
請將以下三個專案 clone 到本地環境：

```
git clone https://github.com/BrobridgeOrg/atomic.git
git clone https://github.com/BrobridgeOrg/atomic-gravity.git
git clone https://github.com/BrobridgeOrg/node-gravity-sdk.git
```

### *2.2* 目錄結構
範例目錄結構：
```
/brobridge/
├── atomic/
├── atomic-gravity/
└── node-gravity-sdk/
```

### *2.3* 相依套件設定

- atomic-gravity 設定:
在 package.json 的 dependencies 中添加：


```
{
  "dependencies": {
    "gravity-sdk": "file:../node-gravity-sdk"
  }
}
```

- atomic 設定:
當安裝完成後，系統會在使用者家目錄下建立 .node-red 資料夾。需要修改該資料夾中的 dependencies 設定：

```
{
  "dependencies": {
    "atomic-gravity": "file:../brobridge/atomic-gravity"
  }
}
```

這樣的配置可確保各服務之間的正確相依關係。

## *3.* Atomic Batch功能使用指南

### *3.1* 專案啟動

  完成環境配置後，可在 atomic 專案目錄下執行以下指令啟動服務：

```
npm start
```

### *3.2* 元件說明
**Gravity Subscriber**

- 用於設定已建立的 NATS 連線位置

- 可配置 Data Product 設定

- 可設定批次處理的大小（Batch Size）

- 支援 Manual Acknowledgement 模式

### *3.3* Function
- 主要用於實作批次資料處理邏輯

- 負責將接收到的資料整理成適合資料庫插入的格式

- 可編寫自定義的資料轉換邏輯

### *3.4* MSSQL Execute

- 用於配置目標資料庫的連線設定

- 負責執行資料庫插入操作

- 支援批次資料的寫入

### *3.5* Gravity Acknowledge

- 當批次資料成功/失敗寫入資料庫後，發送ack/nak訊號

- 通知可以繼續發送下一筆/批或原本的資料

- 需要配合 Gravity Subscriber 的 Manual Acknowledgement 模式使用

- 確保資料處理的可靠性

### *3.6* Debug

- 可將節點間傳遞的資料以除錯模式顯示

- 資料會即時呈現在右側面板

- 有助於開發階段的問題排查

### *3.7* Catch

- 用於監控特定節點的執行狀態

- 可捕獲節點執行過程中的錯誤

- 當發生錯誤時，可與 Acknowledge 節點配合

## *4.* 操作流程

在左側標籤頁中選擇所需元件,依需求配置各個元件的參數將元件進行適當的連接,測試並監控資料流轉過程,這些元件的合理組合可建構出一個可靠的批次資料處理流程，能夠確保資料的完整性和處理的可靠性。

### *4.1* Atomic Batch 功能說明

#### *4.1.1* 批次處理模式
- 基本設定
  - 可在 Subscriber 中設定批次大小（例如：1000 筆）
  - 勾選為 Batch Mode
  - 支援 Manual Acknowledgement 模式

- 純資料接收模式
  - 當僅使用 Subscriber + Acknowledgement 接收資料時：
  - 保證資料筆數的完整性
  - 維持原始資料的順序

- 資料庫寫入模式
  - 當配合 Subscriber + Function + MSSQL 組件使用時：
    - 支援批次資料欄位更新與資料庫寫入
  - 搭配 Catch + Acknowledgement 可監控該 MSSQL組件:
    - 預設支援操作失敗資料重傳機制
    - 可自定義錯誤處理邏輯

#### *4.1.2* 單筆處理模式

處理行為與上述批次處理模式相同
