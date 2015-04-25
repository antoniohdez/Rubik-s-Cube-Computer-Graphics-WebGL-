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

//Root element
var rubik = new THREE.Object3D();
var whiteFace = new THREE.Object3D();
var yellowFace = new THREE.Object3D();
var greenFace = new THREE.Object3D();
var blueFace = new THREE.Object3D();
var redFace = new THREE.Object3D();
var orangeFace = new THREE.Object3D();

whiteFace.position.x = 1;
yellowFace.position.x = -1;

greenFace.position.y = 1;
blueFace.position.y = -1;

redFace.position.z = 1;
orangeFace.position.z = -1;

var geometry = new THREE.BoxGeometry( 1, 1, 1 );

var whiteMaterial = new THREE.MeshLambertMaterial( { color: 0xFFFFFF } );
var yellowMaterial = new THREE.MeshLambertMaterial( { color: 0xFFD500 } );
var greenMaterial = new THREE.MeshLambertMaterial( { color: 0x009E60 } );
var blueMaterial = new THREE.MeshLambertMaterial( { color: 0x0051BA } );
var redMaterial = new THREE.MeshLambertMaterial( { color: 0xC41E3A } );
var orangeMaterial = new THREE.MeshLambertMaterial( { color: 0xFF5800 } );

whiteFace.add( new THREE.Mesh( geometry, whiteMaterial ) );
yellowFace.add( new THREE.Mesh( geometry, yellowMaterial ) );
greenFace.add( new THREE.Mesh( geometry, greenMaterial ) );
blueFace.add( new THREE.Mesh( geometry, blueMaterial ) );
redFace.add( new THREE.Mesh( geometry, redMaterial ) );
orangeFace.add( new THREE.Mesh( geometry, orangeMaterial ) );

rubik.add(whiteFace);
rubik.add(yellowFace);
rubik.add(greenFace);
rubik.add(blueFace);
rubik.add(redFace);
rubik.add(orangeFace);

scene.add(rubik);

var ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

camera.position.z = 10;

var render = function () {
	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();
