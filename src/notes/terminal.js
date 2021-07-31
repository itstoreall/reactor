/* ===========================================
** Terminal

control+a (перейти в начало строки)
control+e (перейти в конец строки)

echo "любой текст" (просто выводит текст в терминал)
set -o (показывает опции терминала)
man имя_команды (показывает иануал команды)
q (выходит из мануала команды)

- В папке:

ls (все файлы и папки)
ls -l (..расширено)
ls -a (..и скрытые файлы)
ls -t (..отсортировать по времени)
ls -lat (..все вместе)
ls имя_папки (войти в папку)
ls имя_папки/имя_папки (..в папке)
cd имя_папки (переходим в папку)
cd .. (шаг назад)
cd ~ (вернуться в корень)
pwd (покывает путь, где мы находимся)
open . (открывает текущую папку в finder)
open имя_файла (открывает файл)
open -a sublime\ text index.html (открыть файл саблайме)

- Работа с файлами и папками:

touch somefile (создает файл в текущей папке)
nano (редактор кода в терминале)
mkdir имя_папки (создать папку)
touch имя_папки/имя_файла (создать файл в папке)
mv имя_файла имя_папки (переместить файл в паку)
touch f1 f2 f3 (создает несколько файлов)
mv f* foto (переместит все файлы с символами имени до* в папку foto)
mv имя_файла имя_файла2 (переименовует файл в другой)
cp имя_файла имя_файла.html (копирует файл с новым именем)
cp -r имя_папки имя_папки2 (скопировать папку рекурсивно)
rm имя_файла (удаляет файл)
rmdir имя_папки (удалить пустую папку)
rm -r имя_папки (удаляет папку рекурсивно)

- Ссылки:

ln -s имя_файла имя_ссылки (создает sift ссылку)
ln имя_файла имя_ссылки (создает hard ссылку)
cat имя_файла (показывает контент в терминале)

------------------------------------------- */