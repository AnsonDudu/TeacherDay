// 定义全局变量
var LocalData;
var base = new Base64();

// 绑定input事件

var event = function(){
	if($('#cha_1')[0].value && $('#cha_2')[0].value && $('#cha_3')[0].value&& $('#name')[0].value !== ""){
		$('#button1').removeClass('unable');
		$('#button1').addClass('able');
	}
	else{
		$('#button1').addClass('unable');
		$('#button1').removeClass('able');
	}
}

var inputs = document.getElementsByTagName('input');
for(i = 0; i<inputs.length; i++){
	inputs[i].addEventListener('touch',event);
	inputs[i].addEventListener('touchend',event);
	inputs[i].addEventListener('onfocusout',event);
}





$('.button').click(function(){
	var a = $('#cha_1')[0].value;
	var b = $('#cha_2')[0].value;
	var c = $('#cha_3')[0].value;
	var d = $('#name')[0].value;

	var a_ = base.encode(a);
	var b_ = base.encode(b);
	var c_ = base.encode(c);
	var d_ = base.encode(d);

	var url = "page3.html?"+a_+"&"+b_+"&"+c_+"&"+d_;
	location.href = url;

})

