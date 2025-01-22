## Atomic相關服務說明

- atomic-gravity: 為atomic頁面中那些給gravity使用的component, 像是subscriber, publish, server…etc, 可視為atomic的client端
- node-gravity-sdk: 為上述的sdk, 主要實作與gravity中nats等元件的操作
- atomic: 為gravity atomic 點開連結看到的前端頁面

## Atomic相關服務安裝與環境設定

git clone 上述三份專案於local上

- atomic
[https://github.com/BrobridgeOrg/atomic.git](https://github.com/BrobridgeOrg/atomic.git])
- atomic-gravity
  [https://github.com/BrobridgeOrg/atomic-gravity.git](https://github.com/BrobridgeOrg/atomic-gravity.git)
- node-gravity-sdk
  [https://github.com/BrobridgeOrg/node-gravity-sdk.git](https://github.com/BrobridgeOrg/node-gravity-sdk.git)

- 預期的資料夾位置
- /brobridge
    - /atomic
    - /atomic-gravity
    - /node-gravity-sdk

- 調整各自專案參考的pacakge 位置(package.json)

1. atomic-gravity: 於dependencies中加入: "gravity-sdk": "file:../node-gravity-sdk",
2. node-gravity-sdk:
3. atomic: 安裝時會在$HOME目錄下產生.node-red資料夾, 所以需修改當中的dependencies來指向對應參考的package位置增加 "atomic-gravity": "file:../brobridge/atomic-gravity",

## Atomic Batch 功能使用介紹

![image](/img/atomic-batch1.png)
上述設定完成之後, 可於atomic專案下使用npm start啟動專案
於左邊tab中選取components: subscriber、function、mssql、gravity acknowledge..etc

- gravity subscriber: 當中可以設定已建立好的nats 位置以及data product和batch的size
- function: 主要將收到的資料以批次的形式整理好insert近資料庫的實作程式碼
- mssql execute: 主要設定欲insert入的資料庫設定
- gravity acknowledge: 主要是用來當成功寫入批次資料至資料庫時, 會發起一個ack 通知nats可以繼續送下一批次的資料了, 且通常需要搭配gravity subscriber中的manual ack才有作用
- debug: 可將串接到此節點的資料以debug mode方式呈現在右邊欄位上
- catch: 可以監聽某個node上的狀態, 如果有錯誤即可被捕獲並與acknowldege做進一步的搭配回傳nak至nats上來重新索取已操作的失敗的該批資料

## Atomic Batch 功能預期行為

- 假設批次的量為1000, 並於subscriber中設定manual ack, 且收到之後為此批次給予manual ack, 其目前預期正常行為是:
    - 如果單純收取資料不落地至任何資料庫(未經過function & mssql), 則資料筆數與順序會與原資料相同
    - 如果取完資料並且有落地資料庫, 會以批次的方式成功寫入資料庫:
        - 但是如果再重新送一批舊的資料, 則會因duplicate data error而導致寫入失敗, 此時subscriber也會觸發重傳機制, 會一直送出該批相同的資料
- 也因為開發批次的功能之後, 整個取資料的資料結構和邏輯也有修改, 除了上述的功能開發之外, 也修改了對單筆資料的存取, 其目前預期正常行為是:
    - 如果取單筆資料時並不落地, 結束後則數量與順序會與原資料相同
    - 如果取單筆資料時落地至資料庫的話, 則會以每筆資料insert的方式寫入至資料庫
        - 但是如果再寫入已有的資料時, 則會因duplicate data error而導致寫入失敗, 此時subscriber也會觸發重傳機制, 會一直送出該筆相同的資料

## Atomic Batch 測試情境

目前希望能測試更大量的資料量, 10萬, 100萬, 情境是單純寫入資料庫即可
如果成功則寫入資料庫, 失敗則會繼續回傳該批次的檔案
