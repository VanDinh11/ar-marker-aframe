const Abox = document.querySelector('#boxTestClick');
Abox.addEventListener('click', function () {
    console.log('xxx');

    this.setAttribute('color', 'blue');
})

AFRAME.registerComponent('boxhandle', {
    init: function () {
        console.log('aaaa');
        const box = document.querySelector('#boxTestClick');
        this.el.addEventListener('click', function () {
            console.log('xxx');
        })
    }
})

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

// AFRAME.registerComponent('button-marker-handle', {
//     schema: {
//         default: ''
//     },
//     boundClickHandler: undefined,
//     clickHandler: function () {
//         console.log('button clicked!');
//         // const gltf = document.querySelector('#dinoId');
//         // var x = gltf.getAttribute('scale').x;
//         // var y = gltf.getAttribute('scale').y;
//         // var z = gltf.getAttribute('scale').z;

//         // // every click, we make our model grow in size :)
//         // gltf.addEventListener('click', function (ev, target) {
//         //     console.log(gltf.getAttribute('scale'));
//         //     gltf.setAttribute('scale', x + " " + y + " " + z);
//         //     x += 1;
//         //     y += 1;
//         //     z += 1;
//         // });

//         const box = document.querySelector('#modelId');
//         var x = box.getAttribute('scale').x;
//         var y = box.getAttribute('scale').y;
//         var z = box.getAttribute('scale').z;
//         x += 0.1;
//         y += 0.1;
//         z += 0.1;
//         box.setAttribute('scale', x + " " + y + " " + z);
//     },
//     init: function () {
//         this.boundClickHandler = this.clickHandler.bind(this);
//         const model = document.querySelector('#modelId');
//         model.addEventListener('click', this.boundClickHandler);

//         const scene = document.querySelector('a-scene');
//         let node = document.createElement('a-box');
//         node.setAttribute('position', '0 2 -10');
//         node.setAttribute('rotation', '0 45 45');
//         node.setAttribute('scale', '0.5 0.5 0.5');
//         scene.appendChild(node);
//     },
//     remove: function () {
//         this.el.removeEventListener('click', this.boundClickHandler);
//     }
// });

AFRAME.registerComponent('clickhandletest', {
    init: function () {
        console.log('xxxxxxx');
        const box = document.querySelector('#boxId');
        var x = box.getAttribute('scale').x;
        var y = box.getAttribute('scale').y;
        var z = box.getAttribute('scale').z;
        box.addEventListener('click', function () {
            x += 0.1;
            y += 0.1;
            z += 0.1;
            box.setAttribute('scale', x + " " + y + " " + z);
        })
    }
})
document.addEventListener('DOMContentLoaded', function () {
    // const scene = document.querySelector('a-scene');
    // scene.addEventListener('click', function(e) {
    //     // <a-box src="#boxTexture" color="red" position="0 2 -10" rotation="0 45 45" scale="0.5 0.5 0.5">
    //     // </a-box>
    //     console.log(e);
    //     // - ( e.clientY / window.innerHeight ) * 2 - 1
    //     let x = e.clientX - (window.innerWidth / 2);
    //     let y = e.clientX - (window.innerHeight / 2);
    //     let node = document.createElement('a-box');
    //     node.setAttribute('position', x + ' ' + y + ' ' + '-10');
    //     node.setAttribute('rotation', '0 45 45');
    //     node.setAttribute('scale', '0.5 0.5 0.5');
    //     scene.appendChild(node);
    // })
})
