var x = document.getElementById("account_login");
var y = document.getElementById("account_register");
var z = document.getElementById("account_forgot");

function CheckLogin() {
	var check = document.getElementById("login");
	if(check.checked == true) {
		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
	}
	else {
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
	}
}

function CheckRegister() {
	var check = document.getElementById("register");
	if(check.checked == true) {
		y.style.display = "block";
		x.style.display = "none";
		z.style.display = "none";
	}
	else {
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
	}
}

function CheckForgot() {
	var check = document.getElementById("forgot");
	if(check.checked == true) {
		y.style.display = "none";
		x.style.display = "none";
		z.style.display = "block";
	}
	else {
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
	}
}

function ForgotPass() {
	var check = document.getElementById("forgot");
	check.checked = true;
	y.style.display = "none";
	x.style.display = "none";
	z.style.display = "block";
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

