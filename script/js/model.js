function init() {
    var container = document.getElementById('canvas-container');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    var loader = new THREE.GLTFLoader();

    var gltfURL = 'source/scene.gltf';

    loader.load(gltfURL, function (gltf) {
        var model = gltf.scene;
        scene.add(model);

        // Create lights
        var light1 = new THREE.PointLight(0xffffff, 2);
        light1.position.set(0, 0, 20);
        scene.add(light1);

        var light2 = new THREE.PointLight(0xff0000, 2);
        light2.position.set(10, 10, 20);
        scene.add(light2);

        var light3 = new THREE.PointLight(0x00ff00, 1);
        light3.position.set(-10, 10, 10);
        scene.add(light3);

        var light4 = new THREE.PointLight(0x0000ff, 1);
        light4.position.set(-10, -10, 10);
        scene.add(light4);

        var light5 = new THREE.PointLight(0xffff00, 0.5);
        light5.position.set(0, -10, 5);
        scene.add(light5);

        // Zoom and move camera based on mouse click
        function onDocumentMouseClick(event) {
            event.preventDefault();

            if (event.button === 0) {
                var containerRect = container.getBoundingClientRect();
                var mouseX = event.clientX - containerRect.left;
                var mouseY = event.clientY - containerRect.top;
                var normalizedX = (mouseX / container.offsetWidth) * 2 - 1;
                var normalizedY = -(mouseY / container.offsetHeight) * 2 + 1;

                var vector = new THREE.Vector3(normalizedX, normalizedY, 0.5);
                vector.unproject(camera);

                var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
                var intersects = raycaster.intersectObjects(scene.children, true);

                if (intersects.length > 0) {
                    var targetObject = intersects[0].object;
                    var cursorPosition = intersects[0].point;
                    var currentZoom = camera.zoom;
                    var boundingBox = new THREE.Box3().setFromObject(targetObject);
                    var targetZoom = boundingBox.getSize().length() * 0.2;
                    var zoomDuration = 1000;
                    var zoomStartTime = Date.now();

                    animateZoom(zoomStartTime, currentZoom, targetZoom, zoomDuration);

                    // Raise camera to the height level of the cursor
                    var targetCameraY = cursorPosition.y;
                    var cameraMoveDuration = 1000;
                    var cameraMoveStartTime = Date.now();
                    animateCameraY(cameraMoveStartTime, camera.position.y, targetCameraY, cameraMoveDuration);
                }
            }
        }

        function animateZoom(startTime, startZoom, targetZoom, duration) {
            var currentTime = Date.now();
            var elapsed = currentTime - startTime;
            var progress = elapsed / duration;
            camera.zoom = THREE.MathUtils.lerp(startZoom, targetZoom, progress);
            camera.updateProjectionMatrix();
            model.rotation.y = THREE.MathUtils.lerp(0, Math.PI / -2, progress);

            if (progress < 1) {
                requestAnimationFrame(function () {
                    animateZoom(startTime, startZoom, targetZoom, duration);
                });
            }
        }

        function animateCameraY(startTime, startY, targetY, duration) {
            var currentTime = Date.now();
            var elapsed = currentTime - startTime;
            var progress = elapsed / duration;
            camera.position.y = THREE.MathUtils.lerp(startY, targetY, progress);

            if (progress < 1) {
                requestAnimationFrame(function () {
                    animateCameraY(startTime, startY, targetY, duration);
                });
            }
        }

        document.addEventListener('mousedown', onDocumentMouseClick, false);

        // Event handlers for model rotation using mouse
        var rotateStart = new THREE.Vector2();
        var rotateEnd = new THREE.Vector2();
        var rotateDelta = new THREE.Vector2();
        var isDragging = false;

        function onMouseDown(event) {
            event.preventDefault();
            isDragging = true;
            rotateStart.set(event.clientX, event.clientY);
        }

        function onMouseMove(event) {
            event.preventDefault();
            if (isDragging) {
                rotateEnd.set(event.clientX, event.clientY);
                rotateDelta.subVectors(rotateEnd, rotateStart);
                var rotateSpeed = 0.01;
                model.rotation.x += rotateDelta.y * rotateSpeed;
                model.rotation.y += rotateDelta.x * rotateSpeed;
                rotateStart.copy(rotateEnd);
            }
        }

        function onMouseUp(event) {
            event.preventDefault();
            isDragging = false;
        }

        container.addEventListener('mousedown', onMouseDown, false);
        container.addEventListener('mousemove', onMouseMove, false);
        container.addEventListener('mouseup', onMouseUp, false);
    }, undefined, function (error) {
        console.error(error);
    });

    camera.position.z = 50;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

window.addEventListener('load', init);
