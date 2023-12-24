Сервис для хранения и получения оценок за занятия.
Сервис имеет 5 методов:
1) получение списка учеников, 
  GET /user
  curl -X GET "http://localhost:8080/api/users" -H "Content-Type: application/json"

2) добавление одного ученика, 
  POST /user
  curl -X POST "http://localhost:8080/api/users" -H "Content-Type: application/json" -d "{\"name\": \"Джонни\", \"email\": \"silverhand@mail.com\"}"

3) добавление занятия,
  POST /lessons
  curl -X POST "http://localhost:8080/api/lessons" -H "Content-Type: application/json" -d "{\"name\": \"Музыка\", \"code\": \"music\"}"

4) получение списка занятий с оценками учеников,
  GET /lesson/{id}
  curl -X GET "http://localhost:8080/api/lessons" -H "Content-Type: application/json"

5) добавление оценки ученика по занятию.
  POST /lessons/{id}/evaluations
  curl -X POST "http://localhost:8080/api/lessons/3/evaluations" -H "Content-Type: application/json" -d "{\"user_id\": \"1\", \"score\": \"56\"}"

=====================================
инструкция для запуска:
1. Устанавливаем зависимости node_modules:
  npm i
2. Запускаем контейнеры Docker:
  docker-compose up -d
3. Запускаем миграции для создания таблиц в БД:
  npm run migr:r
4. Запускаем приложение
  npm run start:dev
5. Для выполнения Запросов нужна авторизация. Для этого необходимо отправить {name: "Ваше имя", pass: "Ваш пароль" } по маршруту api/auth. В ответ получить токен для авторизации, который должен быть добавлен в заголовок authorization Запроса.