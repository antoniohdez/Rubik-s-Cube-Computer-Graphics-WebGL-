var scene = new THREE.Scene();
// (angle, aspect, near, far)
/*
	Angle: 
	Aspect Ratio:
	Near: Distance at which the camera will start rendering scene objects, )
	Far: Anything beyond this distance will not be rendered, draw distance
*/
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 100 );

//Move around Y axis by default
var controls = new THREE.OrbitControls( camera );
controls.addEventListener('change', render );

//Create html element (canvas)
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF } );
var cube = new THREE.Mesh( geometry, material );

scene.add(cube);

var ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

camera.position.z = 10;


var render = function () {
	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();
