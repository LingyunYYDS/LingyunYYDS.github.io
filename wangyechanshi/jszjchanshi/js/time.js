var t=setInterval(function(){
			var sj=document.querySelector('.shijian');
			var date = new Date();
			var h=date.getHours();
			var f=date.getMinutes();
			var m=date.getSeconds();
			sj.innerHTML=h+':'+f+':'+m;
		})