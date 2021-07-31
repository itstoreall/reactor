/* ===========================================
** React

01. Создаем репо на GitHub и клонируем локально
cd documents/github
git clone https://github.com/itstoreall/geri-react.git
cd geri-react

02.1 В локальной папке проекта запускаем React app
npx create-react-app . --use-npm

02.2 if error for example @4.0.2:
npm uninstall -g create-react-app (uninstall)
npm i -g npm@latest (install the latest version of the npm)
npm cache clean -f (clean cache --force)
npx create-react-app .
или: npx create-react-app@4.0.3 . (в случае ошибки)

02.3 После клонирования или перезаливки проекта (если ошибки)
npm install --save --save-exact react-scripts@4.0.3
02.4 Открываем в IDE
open -a visual\ studio\ code .

03. Устанавливаем пакет prop-types и импортировать библиотеку
npm install --save-dev prop-types
import PropTypes from 'prop-types';

04.1 Установка ESLint and Prettier
npm install eslint
npm install prettier -D --save-exact

04.2 Create .prettierrc:
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}

04.3 Проверить User Settings in VSCode
- "editor.formatOnSave": true
- "editor.defaultFormatter": "esbenp.prettier-vscode"

05.] Build and Deploy. Добавляем строку в package.json и выполняем команду
"homepage": "https://itstoreall.github.io/reactor",

05.2 Устанавливаем пакет для публикации
npm install --save gh-pages

05.3 В package.json в поле script добавляем два скрипта
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

05.4 Деплоим на гитхаб
npm run deploy

06.] Установка modern-normalize
npm i modern-normalize

06.2 Импортируем стили в index.js
import 'modern-normalize/modern-normalize.css';

07. Устанавливаем пакетик sass
npm install node-sass --save

08. Устанавливаем и импортируем JSS
npm instal react-jss
import {createUseStyles} from 'react-jss'

09. Устанавливаем npm React Router
npm install react-router-dom
import { BrowserRouter } from 'react-router-dom'

10. Устанавливаем axios
npm install axios
import axios from 'axios'

11.1 Устанавливаем JSON Server
npm i json-server

11.2 Добавляем строку в "scripts"
"server": "json-server --watch server/db.json --port 2222 --delay 500",

11.3 В корне создаем папку с файлом: 
server > db.json

------------------------------------------- */
