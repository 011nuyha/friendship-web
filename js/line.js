window.onload = function(){
	var canvas = document.getElementById('canvas');
	if(canvas.getContext){ 
		var context = canvas.getContext('2d');
		
		context.beginPath();
		//시작점을 (50,200)으로 옮김
		context.moveTo(50,200);
		//조절점 지정
		context.bezierCurveTo(90,50,310,50,350,200);
		context.stroke();
		
	}else{
		alert('브라우저가 캔버스를 지원하지 않습니다.');		
	}
	
};