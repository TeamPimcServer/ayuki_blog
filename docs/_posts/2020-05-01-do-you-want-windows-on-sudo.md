---
top: 1
category: 解説
tags:
  - ja
  - windows
  - scoop
  - choco
  - sudo
  - 解説
date: 2020-05-01
title: Windowsにsudoが欲しいかい？
vssue-id: 10
---


<!-- more -->

::: tip
欲しいときあるよね？
:::

<TOC />

## はじめに

Windowsにsudoほしいけどわからない！！とか、調べても本物に程遠いのしか見つからない！！という人に向けて書いています。

## Q.使えるものはあるの?

A.あります

### 使えるもの

- [gerardog/gsudo](https://github.com/gerardog/gsudo)
- [lukesampson/psutils(sudo.ps1)](https://github.com/lukesampson/psutils)

## どうやって入れるの?

めんどくさいのでパッケージマネージャーを使いましょう。

### 使えるやつ

::: tip
パッケージマネージャーのインストール手順は準備中です。
:::

- choco
- scoop

## インストール

実際に入れてみましょう。

### gerardog/gsudoの場合(個人的なおすすめ)

```ps1
#非rootでできるのでおすすめ
scoop install gsudo

#要root
choco install gsudo
```

### lukesampson/psutils(sudo.ps1)の場合

```ps1
scoop install sudo

#chocoにも同名の物があるがこれは完成度低い
```

## How to

```ps1
sudo choco install windows-terminal
```

```ps1
#hostsファイルが楽に編集できるよ！やったね！！
sudo notepad C:\Windows\System32\drivers\etc\hosts
```

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
