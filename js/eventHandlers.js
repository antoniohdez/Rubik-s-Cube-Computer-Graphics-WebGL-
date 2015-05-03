var events = function (){
	document.addEventListener("keypress", function(e){
		//String.fromCharCode(e.keyCode)
		
		//alert( "Key pressed: " + e.keyCode );
		
		switch( e.keyCode ){
			case 49:

				var pivot = new THREE.Object3D();
				var active = new Array();
				for( var index in scene.children ){
					//var tmpCube = rubik.children[index];
					
					if( scene.children[index].position.y == 1 ){
						active.push( scene.children[index] );
					}
					
				}

				pivot.rotation.set( 0, 0, 0 );
				pivot.updateMatrixWorld();
				
				for ( var i in active ) {
					THREE.SceneUtils.attach( active[ i ], scene, pivot );
				}
				pivot.rotation.y += 90*(Math.PI/180);	

				pivot.updateMatrixWorld();
				for ( var i in active ) {
					active[ i ].updateMatrixWorld();
					THREE.SceneUtils.detach( active[ i ], pivot, scene );
				}
		
				break;

			case 50:

				break;

			case 51:
				
				break;

			case 52:
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
				pivot.rotation.z += 90*(Math.PI/180);

				pivot.updateMatrixWorld();
				for ( var i in active ) {
					active[ i ].updateMatrixWorld();
					THREE.SceneUtils.detach( active[ i ], pivot, scene );
				}
				break;
			default:
				//Code
		}
	});
}

events();