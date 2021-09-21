function generateSha256() {
  let char = document.getElementById("ip1").value;
  document.getElementById('pHash').innerHTML = 'SHA256{' + char + '}: ' + SHA256(char);
}

function generateSha256nsalt() {
  let char = document.getElementById("ip1").value;
  let salt = '&S' + Math.floor(Math.random() * 100000 + 100000);
  char += salt;
  document.getElementById('pHash').innerHTML = 'SHA256{' + char + '}: ' + SHA256(char) + '<br>  {Salted_}: ' + salt;
}

function encriptAes() {
  let char = document.getElementById("ip2").value;
  let key = document.getElementById("ipk").value;
  let cipher = CryptoJS.AES.encrypt(char, key);
  let msg = cipher.toString();
  document.getElementById('pSyn').innerHTML = 'AES Encript{value: ' + char + ', key: ' + key + '}: <br>' + msg;
}

function decriptAes() {
  let char = document.getElementById("ip2").value;
  let key = document.getElementById("ipk").value;
  let cipher = CryptoJS.AES.decrypt(char, key);
  let msg = cipher.toString(CryptoJS.enc.Utf8);
  document.getElementById('pSyn').innerHTML = 'AES Decript{value: ' + char + ', key: ' + key + '}: <br>' + msg;
}
