# node-hw-1-yargs

 npm init -y запускає package.json
   Скрипти дозволяють запускати для виконання встановлені пакети. Використовуючи npm-скрипти, можна створювати цілі системи збирання проекту. Автоматизуємо запуск index.js. Для цього у файлі package.json в полі scripts додамо скрипт запуску start.
   "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node index.js",
   "dev": "nodemon index.js"
   },
2. npm install cors express вствновлює необхідні пакети
3. якщо папка node_modul не зявилась потрібно додати npm install
4. npm install --save-dev nodemon встановлюємо пакет, який відслідковує зміни у файлі. Це пакет для розробки, тому встановлюється в package.json
   "devDependencies": {
   "nodemon": "^3.0.1"
   }
5. !!!! після прописання скрипта при введені в терміналі 
\***\* npm start **\*\*\*\*\*\* запускається node index.js
6. **\*** npm run dev **\*** для запуска відслідковування змін
   ctrl C вийти
7. npm i commander
npm i yargs
8. в консолі node contact після першого слова назва файлу і він буде активний в консолі
9.  npm run dev  тому, що як раз і буде зациклювання.
10. Якщо функцію викликаєте прямо у коді в рамках перевірки, то просто запускаєте npm run start виконання запуститься один раз, циклитись не буде.