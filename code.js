window.addEventListener("load",function(){
	let nodes = document.querySelectorAll(".pauseBtn");
	nodes.forEach(function(item){
		item.addEventListener("click",function(e){
			this.parentNode.classList.toggle("paused");
		});
	});
});
