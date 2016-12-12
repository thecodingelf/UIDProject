function myMap() {

  var mapCanvas = document.getElementById("map");

  var mapOptions = {
    center: new google.maps.LatLng(65.011003, 25.469006), zoom: 15
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

}

$(document).ready(function(){ $( "#map_canvas" ).hide();
function mapDisplay() {

    var mapOptions = {
        zoom: 8,

        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
}


   $('#action').click(function(){
        mapDisplay();
        $( "#map_canvas" ).show();
    });
                             });
