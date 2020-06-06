---
top: 1
category: 一般
tags:
  - ja
  - archlinux
  - 解説
  - shellscript
date: 2020-06-06
title: ShellScriptで変数に値があるかどうかを判断する方法
---

<!-- markdownlint-disable MD033 -->

<!-- more -->

::: note
AND　ORを使う際は気をつけよう
:::

<TOC />

## まずはじめに

ShellScriptで変数に値がある場合だけ動かしたい処理などは多くあるはずです。

## やりかた

### 変数が空の場合

今回はtestという変数を使ってテストします。

```bash
if [[ -z "$test" ]];then
    echo "変数がないよ!"
fi
```

### 変数がある場合

```bash
#変数を定義
test="test"

if [[ -n "$test" ]];then
    echo "変数があるよ!"
fi
```

-nを使うことで変数がない場合**真**となります。

### 1つで確認する方法

ifの使い方をある程度知ってる場合は当たり前のような話ですが
一応書いておきます。

```bash
#変数を定義(elseで動作)
test="test"

if [[ -z "$test" ]];then
    echo "変数がないよ!"
else
    echo "変数があるよ!"
fi
```

-zを使うことで変数がある場合は**真**となります

ですが、一応ギルド主として恥じぬレベルにはやっていく予定です。

## 最後に

ShellScriptは楽しいので、今後もこういった事を書いていく予定です。
あと、昔作った記事で書きかけのやつとかは今度書きます。
最後に更新が遅くなってしまったのは純粋無為に何も書くようなことが無かったからです

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
