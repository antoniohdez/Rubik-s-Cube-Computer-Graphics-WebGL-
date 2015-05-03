var processKey = function (key){
	switch( key ){
		case 49:
			rotateSide("y", 90);
			break;

		case 50:
			rotateSide("x", 90);
			break;

		case 51:
			rotateSide("z", 90);
			break;

		case 52:
			rotateCube("x", 90);
			break;

		case 53:
			rotateCube("y", 90);
			break;

		case 54:
			rotateCube("z", 90);
			break;

		default:
			//Code
	}
}

var rotateSide = function (axis, angle){
	var pivot = new THREE.Object3D();
	var active = new Array();

	for( var index in scene.children ){
		if( scene.children[index].position[axis] === 1 ){
			active.push( scene.children[index] );
		}
		
		
	}

	pivot.rotation.set( 0, 0, 0 );
	pivot.updateMatrixWorld();
	
	for ( var i in active ) {
		THREE.SceneUtils.attach( active[ i ], scene, pivot );
	}

	pivot.rotation[axis] += angle*(Math.PI/180);	
	pivot.updateMatrixWorld();
	
	for ( var i in active ) {
		active[ i ].updateMatrixWorld();
		THREE.SceneUtils.detach( active[ i ], pivot, scene );
	}
}

var rotateCube = function (axis, angle){
	var pivot = new THREE.Object3D();
	var active = new Array();
	for( var index in scene.children ){
		//var tmpCube = rubik.children[index];
		
		active.push( scene.children[index] );
		
	}

	pivot.rotation.set( 0, 0, 0 );
	pivot.updateMatrixWorld();
	
	for ( var i in active ) {
		THREE.SceneUtils.attach( active[ i ], scene, pivot );
	}

	pivot.rotation[axis] += 90*(Math.PI/180);

	pivot.updateMatrixWorld();
	for ( var i in active ) {
		active[ i ].updateMatrixWorld();
		THREE.SceneUtils.detach( active[ i ], pivot, scene );
	}
}

document.addEventListener("keypress", function(e){
	processKey(e.keyCode);
});
