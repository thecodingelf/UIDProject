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
