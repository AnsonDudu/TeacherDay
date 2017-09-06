// 绑定input事件

$("input").bind('focusout', function(){
	if($('#cha_1')[0].value && $('#cha_2')[0].value && $('#cha_3')[0].value !== ""){
		$('#button1').removeClass('unable');
		$('#button1').addClass('able');
	}
	else{
		$('#button1').addClass('unable');
		$('#button1').removeClass('able');
	}
})



$('.button').click(function(){
var a = $('#cha_1')[0].value;
var b = $('#cha_2')[0].value;
var c = $('#cha_3')[0].value;

var characterJson = {
	'"1"': "" + a + "",
	'"2"': "" + b + "",
	'"3"': "" + c + ""
}

$.ajax({
	type:'POST',
	data:JSON.stringify(characterJson),
	contentType :'application/json',
	dataType:'json',
	url :'http://localhost:3000/posts',
	success :function(data) {
		alert("OK");
		},
	error :function(e) {
		alert("error");
		}
	});
})