/*
==============
JS for - Audio Play/Pause Toggle
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
*/

$(function(){
		if($('#audio').length) {
			var playing = false;

			$('#audio').on('click', function(){
				if(playing == false) {
					console.log('mati');
					playing = true;
					$('#player')[0].pause();
					$('.audio').addClass('audio-mute');
				} else {
					console.log('hidup');
					playing = false;
					$('#player')[0].play();
					$('.audio').removeClass('audio-mute');
				}
			});
		}
});
