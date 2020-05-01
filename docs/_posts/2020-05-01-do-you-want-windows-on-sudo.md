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

<!-- markdownlint-disable MD033 -->

<!-- more -->

::: tip
欲しいときあるよね？
:::

<TOC />

## はじめに

Windowsにsudoほしいけどわからない！！とか、調べても本物に程遠いのしか見つからない！！という人に向けて書いています。

ここではroot=管理者権限

## Q.使えるものはあるの？

A.あります

### 使えるもの

- [gerardog/gsudo](https://github.com/gerardog/gsudo)
- [lukesampson/psutils(sudo.ps1)](https://github.com/lukesampson/psutils)

## どうやって入れるの？

めんどくさいのでパッケージマネージャーを使いましょう。

### 使えるやつ

::: tip
chocoのインストール手順は準備中です。

scoopのインストール方法は[こちら](2020-05-01-install-scoop.md)

:::

- choco
- scoop

## インストール

実際に入れてみましょう。

### gerardog/gsudoの場合（個人的なオススメ）

```ps1
#非rootでできるのでオススメ
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

::: warning
何も気にせず乱用してはいけません。

ウイルス等の感染の原因になります。
:::

::: danger
``rm``や``rd``(及び``rmdir``)などのファイルを削除するコマンドに対して``C:\``や``/``を指定してはいけません。(OSや個人データをを破壊する可能性があります。)
:::

## 最後に

root（管理者）権限なので扱いには気をつけましょう。

Linuxやmacを使っているあなたもですよ？

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
