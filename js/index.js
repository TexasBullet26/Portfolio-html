new WOW().init();
  window.addEventListener('DOMContentLoaded', function () {
  BjsApp.init();
});

function initMap() {
	var uluru = {lat: 33.151246, lng: -97.127035};
  	var map = new google.maps.Map(document.getElementById('map'), {
      	zoom: 5,
      	center: uluru
	});
  	var marker = new google.maps.Marker({
      	position: uluru,
      	map: map
	});
}

https://maps.googleapis.com/maps/api/js?key=AIzaSyBjJpI84YeVEcQC2eISPOBJjSnYeU5TktY&callback=initMap

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-87552302-1', 'auto');
ga('send', 'pageview');