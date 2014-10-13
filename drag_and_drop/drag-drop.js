$(document).ready(function() {
	$('#drop').on('dragover', function(e) {
		e.preventDefault();
	});
	$('#drop').on('drop', function(e) {
		e.preventDefault();
		var data = e.originalEvent.dataTransfer.getData("text/html");
		$(e.target).html($('#'+data));
	});
	$('#drag').on('dragstart', function(e) {
		e.originalEvent.dataTransfer.setData("text/html", e.target.id);
	});
});