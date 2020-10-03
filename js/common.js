let Common = {

};

jQuery(function($){
	console.log('자바 스크립트 로드 테스트');

	$.get('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903').done(function(a,b,c,d){
		console.log(a,b,c,d);
	});;
});