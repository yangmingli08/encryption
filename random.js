function genPassword() {

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=?";
  var length = 64;
  var password = "";

  for (var i = 0; i < length; i++) {
    var rd = Math.floor(Math.random() * chars.length);
    password += chars.substring(rd, rd + 1);
  }
  document.getElementById('pRd').innerHTML = password;
}
