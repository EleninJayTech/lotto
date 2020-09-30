let i_System = {
	loadScriptType:'defer', // 스크립트 로드 타입
	loadScriptInHead:[], // 스크립트 로드 head
	loadScript:[], // 스크립트 로드 body

	/**
	 * 스크립트 HTML 생성
	 * @param src
	 * @returns {HTMLScriptElement}
	 */
	createScriptHtml:function(src){
		let _this = this;
		let loadType = _this.loadScriptType = 'defer';
		let newScript = document.createElement('script');
		newScript.setAttribute('src', src);
		newScript.setAttribute('crossorigin', 'anonymous');
		newScript.setAttribute(loadType, '');
		return newScript;
	}
};

// document ready
document.addEventListener("DOMContentLoaded", function(){
	i_System.loadScriptInHead.push('/lotto/plugin/jquery.min.js');
	i_System.loadScriptInHead.push('/lotto/plugin/SemanticUI/semantic.min.js');

	i_System.loadScriptInHead.forEach(function(item, index, array){
		let newScript = i_System.createScriptHtml(item);
		document.getElementsByTagName('head')[0].appendChild(newScript);
	});
});

// window load
window.addEventListener('load', function(){
	i_System.loadScript.push('/lotto/js/common.js');
	i_System.loadScript.forEach(function(item, index, array){
		let newScript = i_System.createScriptHtml(item);
		document.getElementsByTagName('body')[0].appendChild(newScript);
	});
});