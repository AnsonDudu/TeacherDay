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

// var characterJson = {
// 	'"1"': "" + a + "",
// 	'"2"': "" + b + "",
// 	'"3"': "" + c + ""
// }

// 初始化Bomb
	Bmob.initialize("0db54364a8bec5f18b2b462e547d3e07", "9b1fc430205d355e5658db76c8f2a66e");
	var GameScore = Bmob.Object.extend("GameScore");
	var gameScore = new GameScore();
	gameScore.set("character_1", a);
	gameScore.set("character_2", b);
	gameScore.set("character_3", c);
	gameScore.save(null, {
		  success: function(gameScore) {
		    var dataId = gameScore.id;
		    window.location.href="index.html";
		    console.log(dataId);
		  },
		  error: function(gameScore, error) {
		    alert("fail");
		  }
	  });

})