/* ===========================================
** Team project

- Втянуть изменения с удаленного репо
git checkout main (переключиться на ветку main)
git fetch (забирает данные в локальный репозиторий)
git pull (вливает данные из удалённой ветки в текущую ветку)
git checkout [branch name] ()
git merge main (влить ветку main в ветку [branch name])

<<<<<<< Current Change
 ... some code
=======
 ... some code
>>>>>> Incoming Change

git add . (добавляем после исправления конфликта)
git commit -m "qweqweqwe" (коммитим)

// -------

- Cтянуть изменения с другой ветки

git pull origin [имя_ветки] (стянуть изменения с ветки одного из участников)
git add . (добавляем после исправления конфликта)
git commit -m "qweqweqwe" (коммитим)

- Залить изменения на удаленный main

git merge main (находясь в своей локальной ветке пишем команду)

// -------

- Перезаливаем заново проект

Переименовываем старый (в папке GitHub)

01. В терминале переходим в папку GitHub
cd documents/github

02. Клонируем репо проекта
git clone https://github.com/hushkov/filmoteka-firebase-app.git

03. Переходим в папку проекта
cd filmoteka-firebase-app

04. Устанавливаем все зависимости
npm install

05. Запускаем проект
npm start

// -------

- Установить Webpack глобально

sudo npm uninstall webpack-dev-server -g

- Установить Webpack глобально

npm uninstall webpack-dev-server -g
или
sudo npm install webpack-dev-server -g

------------------------------------------- */