---
top: 1
category: 解説
tags:
  - ja
  - windows
  - scoop
  - 解説
date: 2020-05-01
title: scoopを入れよう！！
---

<!-- markdownlint-disable MD033 -->

<!-- more -->

::: tip
scoopって知ってる？便利だよ～
:::

<TOC />

## はじめに

sudo回で使ってる``scoop``を入れます。~~投稿順序逆だね~~

ここではroot=管理者権限

## 前提環境

- PowerShell (^5) または　PowerShell Core
- .Net Framework (^4.5)

::: tip
サポート中のWindowsなら問題ないはずです。
:::

## インストール

```powershell
#非root
iwr -useb get.scoop.sh | iex
```

次のものを実行する必要がある可能性があります。

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

## How to

```powershell
scoop install git
```

## 最後に

便利でしょ？
追加でjavaやphpなどのbucket（scoopでのリポジトリ）もあるので追加することが可能です。

じゃんじゃん使っていこうね～

::: tip
もしかすると、応用編も出るかもしれません。
:::
~~<div v-twemoji>投稿順序はGitHub行かないと基本的にはバレない:thinking:</div>~~

<div class="auther-grid">
  <article class="auther-side">
    <div class="auther-line">
        <div class="balloon1">
          <p>この記事を書いた人</p>
        </div>
        <br>
        <img
        class="auther-icon"
        src="https://repo.akarinext.org/assets/image/icon/aki-icon.png"
        width="100"
        height="100"
        />
          <h3>あき</h3>
    </div>
  </article>
  <section class="auther-main">
    <div class="auther-main">
      主にMinecraftServerを運営しています
    </div>
  </section>
</div>
