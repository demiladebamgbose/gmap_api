

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(5.5244,3.3792),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);


// function start(){
// 	load()
// }

// window.addEventListener('load' start,false);