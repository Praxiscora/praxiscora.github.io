function initialize () 
{
	var myLatlng = new google.maps.LatLng(48.209746,11.5677449);
	var mapOptions ={
		zoom: 15,
		center:myLatlng
		
	};
		
	var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		});
}		

function loadScript () {
	var script = document.createElement ('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;