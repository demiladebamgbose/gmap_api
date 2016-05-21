
var map;
var state;
function initialize( longitude, latitude) {
  var mapProp = {
    center:new google.maps.LatLng(longitude, latitude),
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
    mapProp.mapTypeId = google.maps.MapTypeId.ROADMAP;
     map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);


function start(){
	initialize( 6.5244, 3.3792);
	document.getElementById('state').addEventListener('change', loader,false);
	console.log(state);
}

function loader(){
	state = document.getElementById('state').value;
	switch (state){
		case '1':
		 initialize( 6.5244, 3.3792);
		 break;

		case '2':
		 initialize( 7.1453, 3.3590);
		 break;

		case '3':
		 initialize( 6.2059, 6.6959);
		 break;

		case '4':
		 initialize( 13.0059, 5.2476);
		 break;	

		default:
		 initialize( 5.4891, 7.0176) ;
	}
}


window.addEventListener('load' ,start,false);


//896e790a346efd35a97c8a2b83ab6566

	//lagos=6.5244° N, 3.3792° E
	// abk = 7.1453° N, 3.3590° E

	// asaba = 6.2059° N, 6.6959° E

	// bauch = 10.6371° N, 10.0807° E

	// sokoto = 13.0059° N, 5.2476° E

	// owerri = 5.4891° N, 7.0176° E

