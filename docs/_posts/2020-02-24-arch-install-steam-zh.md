---
top: 1
category: 解説
tags:
  - ja
  - archlinux
  - steam
  - 解説
date: 2019-04-24
title: ArchLinuxにSteamをインストールする方法
vssue-id: 10
---


<!-- more -->

::: tip
test
:::


<TOC />

## 概要

ArchLinuxを入れてよし、いざゲームするぞー！と意気込んで
sudo pacman -S steam 
をやろうとした人は少なからずいるはずです、
しかしながら、ArchLinuxでは32bitパッケージがデフォルトでは無効化されている為、
そのようなパッケージは見つかりませんと返されてしまいます。
ここはArchWikiを見ればわかるのですが、その後にコアダンプを修正する方法を解説します。

## 

<article class="main-div auther-box-shadow">
  <div class="auther-grid">
    <div>
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
    </div>
    <div style="text-align:left;">
      <h3 class="auther-description">本サイトでのテンプレートのデザインに手を加えたり、独自のデザインを追加している人です。主にMinecraftServerを運営しています</h3></h3>
    </div>
  </div>
</article>