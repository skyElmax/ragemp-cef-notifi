# СКРИПТ УВЕДОМЛЕНИЙ ДЛЯ RAGE:MP

Поместите скачанные файлы в папку `client_packages/cef/notifi`
Вставьте эту часть кода в любой файл (`index.js`) на клиенте:
```js
const br_notify = mp.browsers.new("package://cef/notifi/index.html");
mp.events.add("CEF:NOTIFI:ADD", (type, time, message, title) => {
    br_notify.call("addNotifi", type, time, message, title);
});
mp.events.call("CEF:NOTIFI:ADD", "warning", 3000, "Текст предупреждения!", "Предупреждение!"); // вызов с клиентской стороны
mp.events.call("CEF:NOTIFI:ADD", "error", 3000, "Текст ошибки!", "Ошибка!"); // вызов с клиентской стороны
mp.events.call("CEF:NOTIFI:ADD", "success", 3000, "Текст об успехе!", "Успешно!"); // вызов с клиентской стороны
```

Вызов с сервера:
```js
mp.events.add("playerReady", player => {
    player.call("CEF:NOTIFI:ADD", ["warning", 3000, "Текст предупреждения!", "Предупреждение!"]); // вызов с серверной стороны
    player.call("CEF:NOTIFI:ADD", ["error", 3000, "Текст ошибки!", "Ошибка!"]); // вызов с серверной стороны
    player.call("CEF:NOTIFI:ADD", ["success", 3000, "Текст об успехе!", "Успешно!"]); // вызов с серверной стороны
});
```