# Project Description

This project is a web-based application that utilizes the Three.js library to create a 3D scene and interactive 3D model rendering. The main purpose of the code is to set up the necessary components for rendering the 3D model and implementing user interactions.

![Опис зображення](video.gif)

## Libraries Used

Three.js: Three.js is a popular JavaScript library for creating and displaying 3D computer graphics on the web. It provides a wide range of functionalities for creating and manipulating 3D objects, scenes, cameras, and lights. In this project, Three.js is used to render the 3D scene, load and display the GLTF model, handle camera movement and zooming, and enable user interactions.

## Functionality

The project consists of the following main functionalities:

The init function sets up the necessary components for rendering the 3D scene. It creates a scene, camera, renderer, and container element to hold the rendered scene. The container element is obtained from the DOM using its ID (canvas-container). The renderer is responsible for rendering the scene with WebGL capabilities.

### - Model Loading:
The code uses the THREE.GLTFLoader to load a 3D model from a GLTF file (source/scene.gltf). Once the model is loaded, it is added to the scene using scene.add(model).

### - Lighting:
The code creates multiple point lights and adds them to the scene. These lights are positioned at different locations to provide illumination and enhance the visual appearance of the 3D model.

### - Mouse Interactions:
The code includes event listeners for mouse interactions. When the user clicks the mouse button (mousedown event) inside the container element, the onDocumentMouseClick function is triggered. It calculates the mouse coordinates relative to the container and performs a raycast to determine if any objects in the scene are intersected by the ray. If an intersection occurs, the code performs zooming and camera movement animations to focus on the clicked object.

### - Model Rotation:
The code includes event listeners for model rotation using the mouse. When the user clicks and drags the mouse (mousedown, mousemove, mouseup events) inside the container element, the onMouseDown, onMouseMove, and onMouseUp functions are triggered. These functions track the mouse movement and update the rotation of the 3D model accordingly, creating a rotation effect.

### - Window Load and Animation:
The init function is executed when the window is loaded (window.addEventListener('load', init)). It initializes the scene and starts the animation loop using the requestAnimationFrame function. The animation loop (animate function) continuously renders the scene with the updated camera and model positions, providing smooth and interactive rendering.

## HTML and CSS

The code includes an HTML structure with a canvas-container div element to hold the rendered scene. It also includes a reference to an external CSS file (style.css) that defines the styles for the canvas-container and body elements.

The HTML file includes script tags to load the required JavaScript libraries (Three.js and GLTFLoader) and the main script file (script.js) that contains the project code.

The CSS file (style.css) sets the width and height of the canvas-container element to occupy the entire viewport (100% width and 100vh height) and removes the default margin and padding from the body element.

Please note that the provided code is incomplete and missing the closing html tag.
