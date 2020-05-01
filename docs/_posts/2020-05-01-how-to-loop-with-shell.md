---
top: 1
category: 解説
tags:
  - ja
  - archlinux
  - steam
  - 解説
date: 2020-05-01
title: ShellScriptで処理をループさせる方法
vssue-id: 10
---

<!-- more -->

::: warning
この解説ではbashを使用することを前提としています。
:::

<TOC />

## 概要

ShellScriptで処理を複数回、または永続的にループさせたい、と思う方は多いはずです。今回はそんなときに役に立つテクニックを紹介します。

## どんな書き方があるの？

まず、ShellScriptで多く知られている手段としてはいかが挙げられます。

- for
- while

大体はこの2つだけで簡単に処理のループが行えます。

## whileを使った無限ループ

ではさっそく、while文を使用して処理をループさせてみましょう。
whileの書き方は以下のとおりです。

```shell
while :; do
  echo "Hello World"
  sleep 1
done
```

さてまず、1行目から解説です。
while :; doを解説しましょう。
ifには[]で条件をつけることができるのは皆様ご存知でしょうか？
今回の場合:となっている部分を[]にする事で条件をつけることが可能です。
次に2行目、言わずもがなechoですね。
次に3行目、あまりにも早いと迷惑なので、sleepで間隔を空けています。
最後に4行目はwhileの閉じタグの様なものです。


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

## 参考
<a class="button yx-background-color-archlinux font1 button-a-tag" style="font-size:1.5em;" href="https://wiki.archlinux.jp/index.php/Multilib"><i class="mdi mdi-arch"></i> ArchWiki</a>

## サポート

<a class="button yx-background-color-discord font1 button-a-tag" style="font-size:1.5em;" href="https://discord.gg/gsjcMQe"><i class="fab fa-discord"></i> Discord</a>