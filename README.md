# 資料表結構


## 會員中心

---

## 我的資料users

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | 會員ID | value | PK (AI) |  |
| account | 會員帳號 | string |  |  |
| username | 使用者名稱 | string |  |  |
| password | 會員密碼 | string |  |  |
| createdAt | 創建時間/更新時間 | string |  |  |
| avatar | 大頭貼 | string |  |  |
| thumb | 讚數 | value |  |  |
| userRank | 牌位 | string |  |  |
| likePosition | 擅長位置 | string |  |  |
| likeHero | 擅長英雄 | string |  |  |
| valid | 會員是否有效 | booolen |  |  |
| teams | 加入隊伍ID |  |  | FK(teamsID) |

## 評價資訊comments

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | 流水號Id | value | PK (AI) |  |
| userId | 會員Id | value |  | FK(userId) |
| commentedId | 被評價會員Id | value |  | FK(userId) |

## 好友名單friends

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | 流水號Id | value | PK (AI) |  |
| userId | 會員Id | value |  | FK(userId) |
| friendId | 加入會員Id | value |  | FK(userId) |
| status | 狀態(等待加入…) | value |  |  |
- status
    - 1 - 等待加入
    - 2 - 已加入

## 黑名單banLists

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | 流水號Id | value | PK (AI) |  |
| userId | 會員Id | value |  | FK(userId) |
| friendId | 加入會員Id | value |  | FK(userId) |

## 歷史組隊teamHistorys

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | 流水號Id | value | PK (AI) |  |
| userId | 會員Id | value |  | FK(userProfileId) |
| teamId | 隊伍Id | value |  | FK(teamProfileId) |
| createAt | 加入組隊時間 | string |  |  |

## 組隊資料

---

## 組隊資料 teams

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | id | value | PK |  |
| userId | 隊長Id | value |  | FK(userId) |
| teamName | 隊伍名稱 | string |  |  |
| playTime | 遊戲時間 | string |  |  |
| rankLimt | 牌位限定 | value |  |  |
| teamNotice | 公告 | string |  |  |
| teamMeerberId | 隊員 | vlaue |  | FK(userd) |
| createAt | 創建時間 | string |  |  |

## 留言板 messages

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | ID | value | PK (AI) |  |
| teamId | 哪一個組隊的留言板 | value |  | FK(teamId) |
| userId | 誰留言 | value |  | FK(userId) |
| createAt | 留言時間 | string |  |  |
| messageText | 留言內容 | Text |  |  |

## 推薦隊友 **recommends**

| 欄位 | 意義 | 型別 | PK | FK |
| --- | --- | --- | --- | --- |
| id | 流水號Id | value | PK (AI) |  |
| teamId | 哪一個組隊的推薦 |  |  | FK(teamId) |
| userId | 會員Id | value |  | FK(userId) |
| recommendId | 推薦會員Id | value |  | FK(userId) |
| status | 狀態(等待加入…) | value |  |  |
- status
    - 1 - 等待加入
    - 2 - 已加入
    - 0 - 忽略




備註

1. PK(primary key):主鍵，單張資料表的唯一值，確保每一筆資料的唯一性
2. FK(Foreign key):外鍵，用來關聯其他資料的Id