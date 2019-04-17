$(function(){
	$('.single-slider').jRange({
		from: 0,
		to: 100,
		step: 1,
		scale: [0,25,50,75,100],
		format: '%s',
		width: 300,
		showLabels: true,
		showScale: true
	});
	$('.range-slider').jRange({
		from: 0,
		to: 100,
		step: 1,
		scale: [],
		format: '%s',
		width: 255,
		showLabels: true,
		isRange : true
	});
	
	$("#g1").click(function(){
		var aa = $(".single-slider").val();
		alert(aa);
	});
	$("#g2").click(function(){
		var aa = $(".range-slider").val();
		alert(aa);
	});
});