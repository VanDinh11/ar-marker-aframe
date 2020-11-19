AFRAME.registerComponent('button', {
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
});

// AFRAME.registerComponent('clickhandletest', {
//     init: function() {
//         document.getElementById('boxId', function() {
//             console.log('xxx');
//         })
//     }
// })

document.getElementById('boxId', function() {
    console.log('xxx');
})