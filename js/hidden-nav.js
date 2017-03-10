window.onload = function(){
	var menuBtn = document.getElementById("menu-btn");
	var navMenu = document.getElementById("nav-menu");
	var wrapper = document.getElementById("wrapper");
	var mask = document.getElementById("mask");
	var li = navMenu.getElementsByTagName('li');
	var body = document.getElementsByTagName('body');
	var flag = 0;
	menuBtn.addEventListener('click', function(){
		if(flag == 0){
			wrapper.className += ' menu-open';
			navMenu.className += ' nav-menu-open';
			menuBtn.className += ' active';
			mask.className += ' active';
			body[0].className = 'body-open';
			for(var i=0; i<li.length; i++){
				li[i].className = 'menu-item-open item'+(i+1);
			}
			flag = 1;
		}else {
			wrapper.className = 'wrapper';
			navMenu.className = 'nav-menu';
			menuBtn.className = 'menu-btn';
			mask.className = 'menu-mask';
			body[0].className = '';
			for(var i=0; i<li.length; i++){
				li[i].className = 'menu-item';
			}
			flag = 0;
		}
	});
}
