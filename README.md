# changeImg-library(LP用)

副業ナビ系のLPで画像の切り替え処理をするライブラリ
 
# DEMO
index.php

```bash
<div class="q1 relative questions">
   <p><img src="img/nabi_a_01.png"></p>
   <div class="absolute answer1 flex">
       <p><img src="img/nabi_a_c_1.png" class="a1"></p>
       <p><img src="img/nabi_a_c_2.png" class="a1"></p>
   </div>
</div>
<div class="padding_t40"></div>
<div class="q2 relative questions">
   <p><img src="img/nabi_a_02.png"></p>
   <div class="absolute answer2">
       <div class="flex">
           <p ><img src="img/nabi_a_02_1.png" class="a2"></p>
           <p ><img src="img/nabi_a_02_2.png" class="a2"></p>
       </div>
       <div class="flex">
           <p><img src="img/nabi_a_02_3.png" class="a2"></p>
           <p><img src="img/nabi_a_02_4.png" class="a2"></p>
       </div>
       <div class="flex2 margin_auto">
           <p class="c margin_auto"><img src="img/nabi_a_02_5.png" class="a2"></p>
       </div>
   </div>
</div>
<div class="padding_t40"></div>
<div class="q3 relative questions">
   <p><img src="img/nabi_a_03.png"></p>
   <div class="absolute answer3">
       <div class="flex">
           <p><img src="img/nabi_a_03_1.png" class="a3"></p>
           <p><img src="img/nabi_a_03_2.png" class="a3"></p>
       </div>
       <div class="flex">
           <p><img src="img/nabi_a_03_3.png" class="a3"></p>
           <p><img src="img/nabi_a_03_4.png" class="a3"></p>
       </div>
   </div>
</div>
<div class="padding_t40"></div>
<div class="q4 relative questions">
   <p><img src="img/nabi_a_04.png"></p>
   <div class="absolute answer4">
       <div class="flex">
           <p><img src="img/nabi_a_04_1.png" class="a4"></p>
           <p><img src="img/nabi_a_04_2.png" class="a4"></p>
       </div>
       <div class="flex">
           <p><img src="img/nabi_a_03_3.png" class="a4"></p>
           <p><img src="img/nabi_a_02_5.png" class="a4"></p>
       </div>
   </div>
</div>
```

 ```bash
<script src="https://cdn.jsdelivr.net/gh/If-you-give-up-then-it-all-ends-here/changeImg-library@v1.1.0/dist/index.js"></script>
<script>
    const answers1 = document.querySelectorAll(".a1")
    const answers2 = document.querySelectorAll(".a2")
    const answers3 = document.querySelectorAll(".a3")
    const answers4 = document.querySelectorAll(".a4")

    changeImgLibrary.changeAnswerImg(answers1, "png", 1)
    changeImgLibrary.changeAnswerImg(answers2, "png", 2)
    changeImgLibrary.changeAnswerImg(answers3, "png", 1)
    changeImgLibrary.changeAnswerImg(answers4, "png", 3)
</script>
 ```

 
 
# Requirement
 
LP側ですること

1. 画像の名前を変更する  
   (例)    
   選択する前の画像 -> nabi_a_04.png  
   選択後の画像 -> nabi_a_04_after.png　(afterを最後につけ加える)

2. 質問ごとにいくつか答えの画像があるが、その質問ごとの答えのimgタグに同じクラス属性を追加する。    
(例) 
```bash
<!-- question1 -->
<div class="q1 relative questions">
    <p><img src="img/nabi_a_01.png"></p>
    <div class="absolute answer1 flex">
        <p><img src="img/nabi_a_c_1.png" class="クラス名1"></p>
        <p><img src="img/nabi_a_c_2.png" class="クラス名1"></p>
    </div>
</div>


<!-- question2 -->
<div class="q2 relative questions">
    <p><img src="img/nabi_a_02.png"></p>
    <div class="absolute answer2">
        <div class="flex">
            <p ><img src="img/nabi_a_02_1.png" class="クラス名2"></p>
            <p ><img src="img/nabi_a_02_2.png" class="クラス名2"></p>
        </div>
        <div class="flex">
            <p><img src="img/nabi_a_02_3.png" class="クラス名2"></p>
            <p><img src="img/nabi_a_02_4.png" class="クラス名2"></p>
        </div>
        <div class="flex2 margin_auto">
            <p class="c margin_auto"><img src="img/nabi_a_02_5.png" class="クラス名2"></p>
        </div>
    </div>
</div>
```

 
# Installation
 
1. npm使用する場合
 ```bash
 npm i changeImg-library
 ```
2. CDNで使用する場合
 ```bash
 <script src="https://cdn.jsdelivr.net/gh/If-you-give-up-then-it-all-ends-here/changeImg-library@v1.1.0/dist/index.js"></script>
 ```
 
# Usage
 
1. グローバル変数を設定する(imgタグに追加したクラスを指定する)
 
```bash
const グローバル変数 = document.querySelectorAll(".クラス名")
```

2. 関数呼び出し  

```bash
changeImgLibrary.changeAnswerImg(グローバル変数, 画像拡張子, 選択できる数)
```

       
 
# Note
 
注意点などがあれば書く
 
# Author
 
作成情報を列挙する
 
* 作成者
* 所属
* E-mail
 
# License
ライセンスを明示する
 
"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
 
社内向けなら社外秘であることを明示してる
 
"hoge" is Confidential.
