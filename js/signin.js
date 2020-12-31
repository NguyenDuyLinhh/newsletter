function validateForm()
{
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;


if (username == ''){
alert('Bạn chưa nhập user');
}
else if (password == '')
{
alert('Bạn chưa nhập pass');
}
else{
alert('Đăng nhập thành công');
return true;
}

return false;
}