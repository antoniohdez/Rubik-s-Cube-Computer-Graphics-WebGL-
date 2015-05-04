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
			console.error("ERROR");
	}
}

var mouseCoordinates = { x:0, y:0 };

var processMouseDown = function (e){
	//console.log(e.offsetX + " " + e.offsetY);
	mouseCoordinates.x = e.offsetX;
	mouseCoordinates.y = e.offsetY;
}

var processMouseUp = function (e){
	//console.log(e.offsetX + " " + e.offsetY);

	var distanceX = e.offsetX - mouseCoordinates.x;
	var distanceY = e.offsetY - mouseCoordinates.y;

	distanceX = Math.abs(distanceX);
	distanceY = Math.abs(distanceY);

	var linearDistance = Math.sqrt( Math.pow(distanceX, 2) + Math.pow(distanceY, 2) );

	//If distance is less than 100px stop event
	if(linearDistance < 100){
		return;
	}

	console.log(distanceX + " " + distanceY);

	if( distanceX > distanceY ){
		console.log("X rotation");

		if( mouseCoordinates.x < e.offsetX ){
			console.log("Right");
			rotateSide("y", 90);

		}else{
			console.log("Left");
			rotateSide("y", -90);

		}
	}else{
		//console.log("Y rotation");
		if( mouseCoordinates.x < (window.innerWidth/2) ){
			console.log("Left rotation");

			if( mouseCoordinates.y < e.offsetY ){
				console.log("Down");
				rotateSide("x", 90);

			}else{
				console.log("Up");
				rotateSide("x", -90);

			}
		}else{
			console.log("Right roration");

			if( mouseCoordinates.y < e.offsetY ){
				console.log("Down");
				rotateSide("z", -90);

			}else{
				console.log("Up");
				rotateSide("z", 90);

			}
		}
	}
}
