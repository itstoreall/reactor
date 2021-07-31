/* ===========================================
** Webpack starter kit

01. Создаем новый репо с именем webpack-module-10
без ридми и гитигнор. Просто имя и жмем Создать

02. В терминале переходим в папку GitHub
cd documents/github

03. Клонируем репо Репеты
git clone https://github.com/luxplanjay/webpack-starter-kit.git

04. Переименовуем папку сборки
mv webpack-starter-kit webpack-module-10

05. Переходим в папку проекта
cd webpack-module-10

06. Удаляем папку .git связанную с репозиторием сборки
npx rimraf .git

07. Устанавливаем все зависимости
npm install

08. Открываем проект в IDE
open -a visual\ studio\ code .

09. Запустить режим разработки
npm start

10. CSS =-> SCSS
- Создаем src > sass
- Переименовуем styles.css в styles.scss
- В index.js изменяем путь - import './styles.scss';
- В index.html удаляем лишнее

11. Создаём в текущей директории новую поддиректорию с именем .git
git init

12. Связываем локальный репо с удаленным
git remote add origin https://github.com/itstoreall/иня-нового-remote-репо.git

13. Добавляем файлы в каталоге под версионный контроль
git add .

14. Делаем первый коммит
git commit -m "first commit"

15. Переименовываем ветку в main
git branch -M main

16.1. Пушим на гитхаб
git push -u origin main

17. Создаем оптимизированные файлы для хостинга
npm run build

18. В файле package.json редактируем поле homepage
"homepage": "https://имя_пользователя.github.io/имя_репозитория"

19. Запускаем сборку проекта в продакшен (в ветку gh-pages)
npm run deploy

// Комитим и пушим на гитхаб (уже в процессе работы)

git add . (добавляем файлы)
git status (проверяем статус)
git commit -m "qwe" (коммитим)
git push (пушим)

// Изменить ссылку на удаленный репозиторий

git remote -v (просмотр списка удаленных репозиториев)
git remote set-url origin https://github.com/другой-репо.git (изменение)

------------------------------------------- */