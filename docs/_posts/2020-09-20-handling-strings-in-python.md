---
top: 1
category: 一般
tags:
  - ja
  - archlinux
  - 解説
  - python
  - 変数
date: 2020-09-20
title: pythonでの文字列の扱い方1
---

## まずはじめに

ネットの拾い知識で python を触り始めたので、その際によく使うようなことを書いていきます。
初歩的なことだと思いますが、温かい目で見ていただけると幸いです。※間違っていたらごめんなさい

今回は主に文字列の出力の際の変数の展開などを紹介します。

## 環境

- ArchLinux
- python 3.8.5

## 一般的な文字列の出力

### 変数を使わない文字列出力

ごく普通の文字列出力です

```python
print('こんにちは')

# 出力結果: こんにちは
```

### 変数を使った文字列出力

変数に出力したい文字列を入れてそれを print に入れて出力しています

```python
hoge = 'こんにちは'
print(hoge)

# 出力結果: こんにちは
```

## 文字列の中で変数を展開する方法

基本的に文字列の中（シングルクォートかダブルクォート）の中で変数を展開する方法です

### F-strings を使った方法

個人的にはシンプルでとても使いやすいと思っています。

```python
hoge = 'ゆぴ'
print(f'こんにちは{hoge}さん')

# 出力結果: こんにちはゆぴさん
```

### format を使った方法

format に hoge 変数を私、{0}の場所に展開しています。

#### ひとつだけ展開する場合

```python
hoge = 'ゆぴ'
print('こんにちは{0}さん'.format(hoge))
```

#### 複数展開する場合

数字を{}に入れない場合も紹介していますが、繰り返し使う際などには不便になる可能性があるため、format の引数にあった数字を入れることをおすすめします。

```python
hoge = 'ゆぴ'
piyo = 'あき'

# 数字を{}に入れない場合
print('こんにちは{}と{}さん'.format(hoge, piyo))

# 出力結果: こんにちはゆぴとあきさん



# {}に数字を入れてformatの順番にそって使う方法
print('こんにちは{0}と{1}さん'.format(hoge, piyo))

# 出力結果: こんにちはゆぴとあきさん
```

## 最後に

最後まで読んでくださりありがとうございました。一応動作テストはしていますが、私の知識に誤りがあった際は教えていただけると幸いです。
次回は文字列の置き換えなどを紹介します。

<div class="auther-grid">
  <article class="auther-side">
    <div class="auther-line">
        <div class="balloon1">
          <p>この記事を書いた人</p>
        </div>
        <br>
        <img
        class="auther-icon"
        src="https://repo.akarinext.org/assets/image/icon/yupix-icon.png"
        width="100"
        height="100"
        />
          <h3>ゆぴ</h3>
    </div>
  </article>
  <section class="auther-main">
    <div class="auther-main">
      本サイトでのテンプレートのデザインに手を加えたり、独自のデザインを追加している人です。主にMinecraftServerを運営しています
    </div>
  </section>
</div>
