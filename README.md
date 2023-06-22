# Project Description

This project is a web-based application that utilizes the Three.js library to create a 3D scene and interactive 3D model rendering. The main purpose of the code is to set up the necessary components for rendering the 3D model and implementing user interactions.

## Libraries Used

Three.js: Three.js is a popular JavaScript library for creating and displaying 3D computer graphics on the web. It provides a wide range of functionalities for creating and manipulating 3D objects, scenes, cameras, and lights. In this project, Three.js is used to render the 3D scene, load and display the GLTF model, handle camera movement and zooming, and enable user interactions.

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
