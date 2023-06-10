# Сервер для виджета неоновых вывесок ![Img](https://i.ibb.co/sRdv0kn/wdigetneon-1.png)

## Пример заполненной таблицы
Для правильной работы сервера необходимо такое же расположение ячеек таблицы.

![Img](https://i.ibb.co/L5cL9q5/table-1.png)

## Локальный запуск
Для локального запуска сервера необходимо
1. Создать файл .env
2. Заполнить необходимые переменные из файла .env.example
2.1. Получение [GOOGLE_API_KEY](https://sendpulse.by/knowledge-base/chatbot/integrations/googlesheets#:~:text=%D0%9F%D0%B5%D1%80%D0%B5%D0%B9%D0%B4%D0%B8%D1%82%D0%B5%20%D0%B2%20%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%20%C2%ABAPI%20%D0%B8,%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D0%B5%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%BA%D0%BB%D1%8E%D1%87%D0%B0.)
2.2. GOOGLE_SPREADSHEET_ID находится в URL-строке уже созданной вами таблицы https://docs.google.com/spreadsheets/d/ВАШ_SPREADSHEET_ID/edit#gid=0
3. Выполнить команду: 
``` nodejs
npm run start
```
## Запуск на хостинге 
Для запуска сервера на хостинге необходимо будет добавить переменные окружения из файла .env.example.
