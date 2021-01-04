

AFRAME.registerComponent('button-marker-handle', {
    init: function () {
        const gltf = document.querySelector('#dinoId');
        var x = gltf.getAttribute('scale').x;
        var y = gltf.getAttribute('scale').y;
        var z = gltf.getAttribute('scale').z;

        // every click, we make our model grow in size :)
        gltf.addEventListener('click', function (ev, target) {
            console.log(gltf.getAttribute('scale'));
            gltf.setAttribute('scale', x + " " + y + " " + z);
            x += 1;
            y += 1;
            z += 1;
        });
    }
})

AFRAME.registerComponent('clickhandletest', {
    init: function (ev, target) {
        const markerId = document.querySelector('#markerId');
        const aEntity = document.querySelector('#modelId');

        markerId.addEventListener('click', function() {
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        })
    }
})
