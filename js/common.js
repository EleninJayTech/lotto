let Common = {

};

jQuery(function($){
	console.log('자바 스크립트 로드 테스트');

	$.post('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903', {}, function(a,b,c,d,e){
		console.log('a');
		console.log(a,b,c,d);
	}).done(function(a,b,c,d){
		console.log('b');
		console.log(a,b,c,d);
	}).fail(function(a,b,c,d){
		console.log('c');
		console.log(a,b,c,d);
	});
});