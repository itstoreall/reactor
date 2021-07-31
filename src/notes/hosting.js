/* ===========================================
** Download to Hosting

01. Изменть в package.json url homepage
"homepage": "http://test.storeall.com.ua",

02. Сбилдить проект 
npm run build

03. Создать в папке build/.htaccess 

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

04. Залить на хостинг
:)

------------------------------------------- */