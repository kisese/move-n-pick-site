//----jquery-plagins----
include('js/jquery-1.7.1.min.js');
include('js/jquery.nivo.slider.js');
include('js/script.js');
//----Include-Function----
	$(window).load(function() {
		$('#slider').nivoSlider();
	});

//----Include-Function----
function include(url){ 
  document.write('<script type="text/javascript" src="'+ url +'" ></script>'); 
}