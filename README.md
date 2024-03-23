# changeImg-library(LP用)

副業ナビ系のLPで画像の切り替え処理をするライブラリ
 
# DEMO
 
"hoge"の魅力が直感的に伝えわるデモ動画や図解を載せる
 
 
# Requirement
 
LP側ですること

質問ごとにいくつか答えの画像があるが、その質問ごとのimgタグに同じクラス属性を追加する。    
(例)    



```bash
<!-- question1 -->
<div class="q1 relative questions">
    <p><img src="img/nabi_a_01.png"></p>
    <div class="absolute answer1 flex">
        <p><img src="img/nabi_a_c_1.png" class="a1"></p>
        <p><img src="img/nabi_a_c_2.png" class="a1"></p>
    </div>
</div>


<!-- question2 -->
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
```

 
# Installation
 
1. npm使用する場合
 ```bash
 npm i changeImg-library
 ```
 
# Usage
 
DEMOの実行方法など、"hoge"の基本的な使い方を説明する
 
```bash
git clone https://github.com/hoge/~
cd examples
python demo.py
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
