var speed=30;
	pic_box_b.innerHTML = pic_box.innerHTML;
	function marquee(){
		if(pic_box_b.offsetTop - scroll_logo2.scrollTop <= 0) {
			scroll_logo2.scrollTop -= pic_box.offsetHeight;
		} else {
			scroll_logo2.scrollTop++;
		}
	}
	var myMar = setInterval(marquee,speed);
	scroll_logo2.onmouseover = function() {
		clearInterval(myMar);
	} 
	scroll_logo2.onmouseout = function(){
		myMar = setInterval(marquee,speed)
	}