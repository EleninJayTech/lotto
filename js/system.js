let i_System = {
	rootDir:'/lotto',
	loadScriptType:'async', // 스크립트 로드 타입 async defer
	loadScriptInHead:[], // 스크립트 로드 head
	loadScript:[], // 스크립트 로드 body
	loadCss:[], // Css 로드 body

	/**
	 * 스크립트 HTML 생성
	 * @param src
	 * @returns {HTMLScriptElement}
	 */
	createScriptHtml:function(src){
		let _this = this;
		let loadType = _this.loadScriptType;
		let newScript = document.createElement('script');
		newScript.setAttribute('src', src);
		newScript.setAttribute('crossorigin', 'anonymous');
		newScript.setAttribute(loadType, '');
		return newScript;
	},

	/**
	 * 스크립트 HTML 생성
	 * @param href
	 * @returns {HTMLLinkElement}
	 */
	createStyleHtml:function(href){
		let newStyle = document.createElement('link');
		newStyle.setAttribute('href', href);
		newStyle.setAttribute('rel', 'stylesheet');
		return newStyle;
	}
};

// document ready
document.addEventListener("DOMContentLoaded", function(){
	i_System.loadScriptInHead.push(`${i_System.rootDir}/plugin/jquery.min.js`);
	i_System.loadScriptInHead.push(`${i_System.rootDir}/plugin/SemanticUI/semantic.min.js`);
	i_System.loadScriptInHead.forEach(function(item, index, array){
		let newScript = i_System.createScriptHtml(item);
		document.getElementsByTagName('head')[0].appendChild(newScript);
	});

	i_System.loadCss.push(`${i_System.rootDir}/plugin/SemanticUI/semantic.min.css`);
	i_System.loadCss.forEach(function(item, index, array){
		let newStyle = i_System.createStyleHtml(item);
		document.getElementsByTagName('head')[0].appendChild(newStyle);
	});
});

// window load
window.addEventListener('load', function(){
	i_System.loadScript.push(`${i_System.rootDir}/js/common.js`);
	i_System.loadScript.forEach(function(item, index, array){
		let newScript = i_System.createScriptHtml(item);
		document.getElementsByTagName('body')[0].appendChild(newScript);
	});
});