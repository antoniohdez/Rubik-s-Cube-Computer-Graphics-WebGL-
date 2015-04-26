var getMaterial = function (x, y, z){
	var defaultColor = 0x000000;
	var materials = [
		new THREE.MeshLambertMaterial({
			//color: 0x0051BA //Blue
			color: defaultColor
		}),
		new THREE.MeshLambertMaterial({
			//color: 0x009E60 //Green
			color: defaultColor
		}),
		new THREE.MeshLambertMaterial({
			//color: 0xFFFFFF //White
			color: defaultColor
		}),
		new THREE.MeshLambertMaterial({
			//color: 0xFFD500 //Yellow
			color: defaultColor
		}),
		new THREE.MeshLambertMaterial({
			//color: 0xC41E3A //Red
			color: defaultColor
		}),
		new THREE.MeshLambertMaterial({
			//color: 0xFF5800 //Orange
			color: defaultColor
		})
	];
	
	if( x == 1 ){
		//Blue
		materials[0] = new THREE.MeshLambertMaterial({ color: 0x0051BA })
	}else if( x == 0 ){
		//No color needed
	}else if( x == -1 ){
		//Green
		materials[1] = new THREE.MeshLambertMaterial({ color: 0x009E60 })
	}

	if( y == 1 ){
		//White
		materials[2] = new THREE.MeshLambertMaterial({ color: 0xFFFFFF })
	}else if( y == 0 ){
		//No color needed
	}else if( y == -1 ){
		//Yellow
		materials[3] = new THREE.MeshLambertMaterial({ color: 0xFFD500 })
	}

	if( z == 1 ){
		//Red
		materials[4] = new THREE.MeshLambertMaterial({ color: 0xC41E3A })
	}else if( z == 0 ){
		//No color needed
	}else if( z == -1 ){
		//Orange
		materials[5] = new THREE.MeshLambertMaterial({ color: 0xFF5800 })
	}
	return materials;
	
}


var scene = new THREE.Scene();
// (angle, aspect, near, far)
/*
	Angle: 
	Aspect Ratio:
	Near: Distance at which the camera will start rendering scene objects, )
	Far: Anything beyond this distance will not be rendered, draw distance
*/
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 100 );
camera.position.z = 10;

//Look at (0,0,0)
//camera.lookAt(scene.position);

//Move around Y axis by default
var controls = new THREE.OrbitControls( camera );
controls.addEventListener('change', render );

//Create html element (canvas)
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xCCCCCC, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Root element
var rubik = new THREE.Object3D();

//Faces
var whiteFace = new THREE.Object3D();
var yellowFace = new THREE.Object3D();
var greenFace = new THREE.Object3D();
var blueFace = new THREE.Object3D();
var redFace = new THREE.Object3D();
var orangeFace = new THREE.Object3D();

blueFace.position.x = 1;
greenFace.position.x = -1;

whiteFace.position.y = 1;
yellowFace.position.y = -1;

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

var i = 1;
for(var x = -1; x <= 1; x++ ){
	for(var y = -1; y <= 1; y++ ){
		for(var z = -1; z <= 1; z++ ){
			console.log( "Line " + (i++) + " " + "X: " + x + " Y: " + y + " Z: " + z );
			
			materials = getMaterial(x, y, z);

			dice = new THREE.Mesh(
			    new THREE.CubeGeometry(0.9, 0.9, 0.9, 1, 1, 1),
			    new THREE.MeshFaceMaterial( materials ));
			dice.position.x = x;
			dice.position.y = y;
			dice.position.z = z;

			rubik.add(dice);

		}
	}
}

/*
rubik.add(whiteFace);
rubik.add(yellowFace);
rubik.add(greenFace);
rubik.add(blueFace);
rubik.add(redFace);
rubik.add(orangeFace);
*/

scene.add(rubik);

var ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

var render = function () {
	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();
