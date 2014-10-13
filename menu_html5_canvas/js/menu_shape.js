$(document).ready(function() {
	var canvas = document.getElementById("canvas"), context = canvas.getContext("2d");
	var kappa = 0.75;
	var up = true, interval, all = $('#menu_shape li').length;
	function drawEllipse(context, x, y, w, h, number_ellipse,kappa) {
		ox = (w / 2) * kappa,
		oy = (h / 2) * kappa,
		x = x+((number_ellipse-1)*190),
		xe = x + w,           
		ye = y + h,          
		xm = x + w / 2,       
		ym = y + h / 2;       
		context.fillStyle = 'rgba(112,209,215,0.3)';
		context.strokeStyle = 'rgba(112,209,215,0.6)';
		context.beginPath();
		context.moveTo(x, ym);
		context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
		context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
		context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
		context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
		context.closePath();
		context.stroke();
		context.fill();
	}
	drawEllipse(context, 20, 5, 180, 40, 1, kappa);
	drawEllipse(context, 20, 5, 180, 40, 2, kappa);
	drawEllipse(context, 20, 5, 180, 40, 3, kappa);
	$('#menu_shape li').hover(function() {
		anim_menu(this);
	},
	function() {
		stop_anim_menu(this);
	});

	function anim_menu(element)
	{
		var ind = $(element).index();
		interval = window.setInterval(function() {
		if(kappa>=1.4)
		{
			up = false;
		}
		if(kappa<=0.7)
		{
			up = true;
		}
		if(up)
		{
			kappa+=0.1;
		}
		if(!up)
		{
			kappa-=0.1;
		}
		context.clearRect(0,0,canvas.width,canvas.height);
		drawEllipse(context, 20, 5, 180, 40, ind+1, kappa);
		for(var i=1; i <= all;i++)
		{
			if(i != ind+1)
			{
				drawEllipse(context, 20, 5, 180, 40, i, 0.75);
			}
		}
		},
		100);
	}
	function stop_anim_menu(element)
	{
		window.clearInterval(interval);
		context.clearRect(0,0,canvas.width,canvas.height);
		for(var i=1; i <= all;i++)
		{
			drawEllipse(context, 20, 5, 180, 40, i, 0.75);
		}
	}
});