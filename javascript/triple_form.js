var x = document.getElementById("account_login");
var y = document.getElementById("account_register");
var z = document.getElementById("account_forgot");
var btn_action = document.getElementById("login");
btn_action.onclick = function() {
	btn_action.classList.toggle("open");
	btn_action2.classList.remove("open");
	btn_action3.classList.remove("open");
		x.classList.toggle("show");
		y.classList.remove("show");
		z.classList.remove("show");
}

var btn_action2 = document.getElementById("register");
btn_action2.onclick = function() {
	btn_action2.classList.toggle("open");
	btn_action.classList.remove("open");
	btn_action3.classList.remove("open");
		y.classList.toggle("show");
		x.classList.remove("show");
		z.classList.remove("show");
}

var btn_action3 = document.getElementById("forget");
btn_action3.onclick = function() {
	btn_action3.classList.toggle("open");
	btn_action.classList.remove("open");
	btn_action2.classList.remove("open");
		z.classList.toggle("show");
		x.classList.remove("show");
		y.classList.remove("show");
}

function ForgotPass() {
	btn_action3.classList.toggle("open");
	btn_action.classList.remove("open");
	btn_action2.classList.remove("open");
		z.classList.toggle("show");
		x.classList.remove("show");
		y.classList.remove("show");
}

function Login() {
	var x = document.getElementById("email").value;
	var y = document.getElementById("password").value;
	if(x == "" && y == "") {
		alert("Bạn cần điền Email, Password ");
	}
	else if(x == "") {
		alert("Vui lòng nhập Email ");
	}
	else if(y == "") {
		alert("Vui lòng nhập Password ");
	}
	else {
		alert("Xin chào, Email của bạn là :" + " " + x + " và mật khẩu của bạn là :" + " " +y);
	}
}

function Register() {
	var x = document.getElementById("new_username").value;
	var y = document.getElementById("new_email").value;
	var z = document.getElementById("new_password").value;
	if(x == "" && y == "" && z == "") {
		alert("Bạn chưa nhập thông tin nào ");
	}
	else if(x == "") {
		alert("Vui lòng nhập Username ");
	}
	else if(y == "") {
		alert("Vui lòng nhập Email ");
	}
	else if(z == "") {
		alert("Vui lòng nhập Password ");
	}
	else {
		alert("Xin chào :" + " " + x);
	}

}

function Forgot() {
	var x = document.getElementById("old_email").value;
	var y = document.getElementById("change_password").value;
	if(x == "" && y == "") {
		alert("Bạn cần điền Email, Password ");
	}
	else if(x == "") {
		alert("Vui lòng nhập Email ");
	}
	else if(y == "") {
		alert("Vui lòng nhập Password ");
	}
	else {
		alert("Mật khẩu mới của bạn là :" + " " +y);
	}
}

