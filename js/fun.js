/**清空按钮--start**/
//得到点击事件的dom结构
function getEventTrigger(event)
{ 
	//ie 火狐 event兼容
	//参考资料： http://www.cnblogs.com/quanhai/archive/2010/04/20/1716149.html
	event = event? event: window.event
	var x = event.srcElement ? event.srcElement:event.target;
	return x;
}
/*提示弹框*/
function alertError(text) {
	event.preventDefault();
	$('.cd-popup').addClass('is-visible');
	$('.urog-err').html(text);
	setTimeout(function(event) {
		$(".cd-popup").removeClass('is-visible');
	}, 3000);
}

//手机号码验证
function verifyMobile(usermobile) {
	var r = /^[1][3578]([0-9]{9})$/;
	var reg = new RegExp(r);
	if (usermobile.length == 0 || usermobile.match(reg) == null) {
		return false;
	} else {
		return true;
	}
}
//6位数字验证
function verifyNumber(regmsg) {
	var r = /^[0-9]{6}$/;
	var reg = new RegExp(r);
	if (regmsg.length == 0 || regmsg.match(reg) == null) {
		return false;
	} else {
		return true;
	}
}
//密码验证（6-16位数字和小写字母的组合）
function verifypass(pass) {
	var r = /^[a-z0-9]{6,16}$/;
	var reg = new RegExp(r);
	if (pass.length == 0 || pass.match(reg) == null) {
		return false;
	} else {
		return true;
	}
}
//120s倒计时--发送验证码
function CountDown() {
	var count = 120;
	var interval = setInterval(function() {
		count--;
		if (count == 0) {
			$(".urog-jishi").html("重发验证码").css('background-color', '#f11721');
			$(".urog-jishi").attr("disable", 0);
			clearInterval(interval);
			interval = null;
		} else {
			$(".urog-jishi").attr("disable", 1);
			$(".urog-jishi").html("(" + count + "s)后重发").css('background-color', '#999999');
		}
	}, 1000);
}