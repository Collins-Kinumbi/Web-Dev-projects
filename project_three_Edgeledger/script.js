//the map
function mapContent() {
  var api_key = "67soto7Xh8KGabAW7duZ7EwFgGOulyEm";
  var latAndLong = { lat: -0.303099, lng: 36.080025 };
  var zoomLevel = 14;
  var yourAddress = "EdgeLedger Financial";

  var map = tt.map({
    container: "map",
    key: api_key,
    center: latAndLong,
    zoom: zoomLevel,
  });

  var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);

  // FOR CUSTOM MARKER
  //var customMarker = document.createElement('div');
  //customMarker.id = 'marker';
  //var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

  var popupOffsets = {
    top: [0, 0],
    bottom: [0, -70],
    "bottom-right": [0, -70],
    "bottom-left": [0, -70],
    left: [25, -35],
    right: [-25, -35],
  };

  var popup = new tt.Popup({ offset: popupOffsets }).setHTML(yourAddress);
  marker.setPopup(popup).togglePopup();
}

// Smooth scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
