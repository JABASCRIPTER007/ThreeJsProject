# Назва проекту

Опис проекту тут.

## Встановлення

1. Клонуйте репозиторій: `git clone https://github.com/ваш-репозиторій`
2. Відкрийте термінал і перейдіть до папки проекту: `cd назва-папки`
3. Встановіть залежності: `npm install`

## Використання

1. Відкрийте файл `index.html` у вашому браузері.
2. Інтерактивний 3D об'єкт буде відображено у вказаному контейнері.
3. Взаємодійте з об'єктом, виконуючи різні дії з мишею.

## Приклад

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div id="canvas-container"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.min.js" integrity="sha512-n8IpKWzDnBOcBhRlHirMZOUvEq2bLRMuJGjuVqbzUJwtTsgwOgK5aS0c1JA647XWYfqvXve8k3PtZdzpipFjgg==" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/three@0.126.0/examples/js/loaders/GLTFLoader.js"></script>
    <script src="script/js/model.js"></script>
</body>
</html>
