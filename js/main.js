var scene = new THREE.Scene();
// (angle, aspect, near, far)
/*
	Angle: 
	Aspect Ratio:
	Near: Distance at which the camera will start rendering scene objects.
	Far: Anything beyond this distance will not be rendered, draw distance.
*/
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 100 );
var cameraDistance = 7.5;

camera.position.x = cameraDistance;
camera.position.y = cameraDistance*2/3;
camera.position.z = cameraDistance;

camera.lookAt( scene.position );

/*
	CONTROLS
*/

//Move around Y axis by default

//var controls = new THREE.OrbitControls( camera );
//controls.addEventListener('change', render );


/*
	RENDERER (CANVAS)
*/

//Create html element (canvas)
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xCCCCCC, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.addEventListener("keypress", function(e){
	alert("Hey");
});
document.body.appendChild( renderer.domElement );

/*
	CUBE
*/

//Root element
var rubik = new THREE.Object3D();

drawCube(rubik);

/*
	AMBIENT LIGHT
*/

var ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

/*
	STATS
*/

var stats = new Stats();
stats.setMode(0); // 0: fps, 1: ms

// align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

/*
	EVENTS
*/

document.addEventListener("keypress", function(e){
	processKey(e.keyCode);
});

document.addEventListener("mousedown", function(e){
	//alert(e.offsetX + " " + e.offsetY);
	processMouseDown(e);
});

document.addEventListener("mouseup", function(e){
	//alert(e.offsetX + " " + e.offsetY);
	processMouseUp(e);
});

/*
	RENDER
*/

var render = function () {
	requestAnimationFrame( render );

	stats.begin();
	
	renderer.render(scene, camera);

	stats.end();
};

render();