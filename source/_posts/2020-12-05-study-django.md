---
title: django学習（2）
categories: 一般
author: 'ゆぴ'
tags:
- ja
- archlinux
- 学習
- python
- django
- シリーズ
excerpt: Djangoをゆぴと共に学習してみませんか?
date: 2020-12-05
---

## まずはじめに

この記事は私がdjangoをある程度使えるようになるまで続ける予定です。そしてこの記事を書いている私はまったく持っての初心者なのでそこのところご了承ください。

### モデルを作る

さて、前回から引き続きDjangoの学習を行っていくわけですが、今回からデータベースを使用します。モデルとはデータベースのレイアウトなどを指すものです。
モデルを元にデータベースが作成されるので、データベースを使用する場合は嫌でも触らなくてはいけません。

#### todo/models.py

```python
from django.db import models

class Todo(models.Model):
  title = models.CharField(max_length=60)
  pub_data = models.DateTimeField('date published')

class SubTodo(models.Model):
  todo =  models.ForeignKey('Todo', on_delete=models.CASCADE)
  choice_text = models.CharField(max_length=200)
```

はい、これでまず何を作成したのかについてです。基本的に`Todo`classにはTodoのタイトルと時間を入れるカラムがあります。`SubTodo`には`Todo`クラスで情報が削除された際に`SubTodo`側でも削除するために`ForeignKey`が設定してあります。あとは好きな文字を入れるためのカラムです。

#### dashboard/settings.py

```python
INSTALLED_APPS = [
    'todo.apps.TodoConfig',  # 追加
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

モデルを有効化するためにもINSTALLED_APPSへの追加を忘れないようにしましょう。基本的な命名規則は`作成したアプリの名前.apps.作成したアプリ名(先頭大文字)Config`になるので、今回の場合は`todo.apps.TodoConfig`となります。

### マイグレーションしてみよう

```cmd
python manage.py makemigrations todo
```

このコマンドを実行することによって、Djangoにモデル変化があったことを伝えることができます。そして、変更点をマイグレーション形式で保存します。
基本的にマイグレーションはmodels.pyを元に作成されたファイルです。

```cmd
python manage.py migrate
```

このコマンドを実行することでさきほどのコマンドで生成されたマイグレーションファイルを使用し、データベースにスキーマを同期します。
モデルに変更を加えて、この手順を再度踏むだけで簡単にデータベースの維持ができます。

### 管理者画面を使う

```cmd
python manage.py createsuperuser
```

名前などさまざまなことをきかれますがすべて自分用に設定してください。

設定が終われば念の為サーバーを再起動し、 http://localhost:8000/admin にアクセスしてください。
そしてさきほど作ったユーザーでログインできれば問題ありません。次にTodoモデルを管理者画面で使えるようにしましょう

#### todo/admin.py

```python
from django.contrib import admin

from .models import Todo

admin.site.register(Todo)
```

これでページを更新し、Todoという項目が増えていれば成功です！お疲れ様でした！

## 参考

https://docs.djangoproject.com/ja/3.1/intro/tutorial02/

## 最後に

最後まで読んでいただき感謝感激です。この記事は現状参考とほぼ同じことになっていますが、今後もっと多くのことに挑戦していくつもりです。
次回はデータベースからデータを取得し、ページに表示してみたいと想います。


