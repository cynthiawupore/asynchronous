// 异步加载js
(function(){
	var _asyn_js_data = ['index.js','index1.js','index2.js','index3.js']
	for(var i=0;i<_asyn_js_data.length;i++){
		var script=document.createElement("script"); 
		script.setAttribute("src", _asyn_js_data[i]); 
		var heads = document.getElementsByTagName("head");
		if(heads.length){
			heads[0].appendChild(script);
		}else{
			document.documentElement.appendChild(script); 
		}       	
	}
})();


// 异步加载图片
(function(){
	var _img_src = ['img/img1.png','img/img2.png','img/img3.png']
	var _img = document.getElementsByTagName("img")
	for(var i=0;i<_img.length;i++){
		_img[i].setAttribute("src",_img_src[i]); 
	}
})();