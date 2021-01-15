---
title: '書いて覚えるDiscord.py'
categories: 一般
author: 'ゆぴ'
tags:
- ja
- ゆぴ
- Python
- discord.py
- discord
excerpt: 'discord.pyを実際に書いて覚えていきます。'
date: 2021-01-15 11:59
cover: '/image/cover/study-discord.py.svg'
---

<!-- toc -->

# はじめに

この記事はいくつかのパートに分かれています。このパートでは「Bot Commands Framework」をあえて使わない方法をご紹介します。
理由としては主にこちらの方が実際にどういう風にできているのかがよくわかると個人的に思っているからです。既にある程度の知識がある方は続編をご覧ください。

## discord.pyをインストールしよう

```python
LinuxやMacの場合
python3 -m pip install -U discord.py

Windowsの場合
py -3 -m pip install -U discord.py
```

## 実際に最低限のBotを作ってみる

さて、では本当に起動し、起動した際にログインしたBotの情報などを出すだけのBotを作ってみましょう。
これに関しては[公式ドキュメント](https://discordpy.readthedocs.io/ja/latest/intro.html)を参考にしています。

```python
#main.py

import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user.name}にログインしました')

@client.event
async def on_message(message):
    if message.author.bot:
        return
    if message.content == 'normal':
        await message.channel.send(f'あなたの名前は{message.author.name}ですね！')
    elif message.content == 'special':
        user = await client.fetch_user(ユーザーIDをここに)
        await message.channel.send(f'あなたの名前は{user.name}ですね！')

client.run('TOKENをここに')

```

このコードに書いてあるものの使い道はいかに記載しておきます。
- @client.event
  これはその次の行にある`async def on_message`などと共に使います。基本的にイベント（ボイスチャットに入る、抜ける）などといった物に合った動作
  をさせる場合に必要になるものです。

- client  
  基本的にこれはclientまたはbotとして記載されることが多いです。clientは自由性を向上させるうえでほぼ確実に覚えておいて損はありません。
  上記のコードにもある以下のコードをご覧ください。
  ```python
     user = await client.fetch_user(ユーザーIDをここに)
     await message.channel.send(f'あなたの名前は{user.name}ですね！')
  ```
  さてこれで何をしているかというと clientにあるfetch_userというものにDiscordのユーザーIDを渡すことでそのユーザーの情報を入手しています。
  よく見る記事とかで`message.author.name`といった感じで取得しているものが取得できるものだと思えばいいです。
  これを知っているか否かでかなりBotの自由度に差が出ます。例えばデータベースにユーザーのIDを保存し、そのユーザーIDを使って何かしたいとなったさいに
  この方法を知っていれば、ユーザーの名前などを簡単に取得できます。
  
- message
  これはそのままで、送信されてきたメッセージに関する情報が入っています。これに対して`message.content`といった風にすることで内容を取得したりすること
  ができます。
  
## 覚えておくと便利なもの
これは本当に一部だけです。これらの者は基本的に`message.channel.name`や`message.channel.id`といった風に途中まで同じ書きかたの物がとても多い
ので| メッセージ | メッセージがあったチャンネル | そのチャンネルの情報 | などといった風に考えるとわかりやすいと思います。
基本的に [公式ドキュメント](https://discordpy.readthedocs.io/ja/latest/api.html) をご覧いただければほとんどわかると思います。

|書き方|内容物|
|---|---|
|message.author.bot|メッセージの作者がbotか否かが入っている|
|message.content|メッセージの内容（こんにちはを送信したらこんにちは）が入っている|
|message.channel.id|メッセージが送信されたチャンネルのIDが入ってる|

## 参考
以下の記事などを参考にさせていただきました。

[公式ドキュメント](https://discordpy.readthedocs.io/)  
[1ntegrale9様の記事](https://qiita.com/1ntegrale9/items/9d570ef8175cf178468f)

## 最後に

一応私が昔かなり時間をかけて調べたことなどをある程度書いたつもりですが、何かご希望がありましたら、[こちら](https://ne.akarinext.org/yupix) 
のアカウントまで連絡いただけると幸いです。