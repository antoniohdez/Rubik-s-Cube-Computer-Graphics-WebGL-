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

		case 87:
		case 119:
			rotateCube("x", -90);
			break;

		case 65:
		case 97:
			rotateCube("y", -90);
			break;

		case 68:
		case 100:
			rotateCube("y", 90);
			break;

		case 83:
		case 115:
			rotateCube("x", 90);
			break;

		default:
			console.log(key);
	}
}

var mouseCoordinates = { x:0, y:0 };

var processMouseDown = function (e){
	mouseCoordinates.x = e.offsetX;
	mouseCoordinates.y = e.offsetY;
}

var processMouseUp = function (e){
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
		if( mouseCoordinates.x < e.offsetX ){
			rotateSide("y", 90);
		}else{
			console.log("Left");
			rotateSide("y", -90);
		}
	}else{
		//console.log("Y rotation");
		if( mouseCoordinates.x < (window.innerWidth/2) ){
			if( mouseCoordinates.y < e.offsetY ){
				rotateSide("x", 90);
			}else{
				rotateSide("x", -90);
			}
		}else{
			if( mouseCoordinates.y < e.offsetY ){
				rotateSide("z", -90);
			}else{
				rotateSide("z", 90);
			}
		}
	}
}
