// 定义全局变量
var LocalData;
var base = new Base64();

// respone
window.onload = window.onresize = function(){
    pageResponse({
        selectors : 'body',     //模块选择器，使用querySelectorAll的方法
        mode : 'auto',     // auto || contain || cover
        width : '414',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '736'      //输入页面的高度，只支持输入数值，默认高度为504px
    })
}


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
	inputs[i].addEventListener('touchstart',event);
	inputs[i].addEventListener('touchmove',event);
	inputs[i].addEventListener('touchcancel',event);
	inputs[i].addEventListener('touchend',event);
	inputs[i].addEventListener('onfocusout',event);
}

$('input').bind('focusout',event);





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

