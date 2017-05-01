window.addEventListener("load", function () {
  captcha();
  document.getElementById("reset").addEventListener("click", captcha);
  function ConfirmCaptcha(){
     if (quitar(document.getElementById("see-captcha").value) === quitar(document.getElementById("write-captcha").value)){
       alert("Codigo Correcto")}
     else{
       alert("Codigo Incorrecto")}
  };
  document.getElementById("validate").addEventListener("click", ConfirmCaptcha);
  function quitar(string){ // Para validar asi el cliente escriba separado
   return string.replace(/\s/g,'');
  }

});

function captcha(){
  var letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var number = ['1','2','3','4','5','6','7','8','9','0'];
  var longitud= letter.length;
  var longitudDos=number.length;

  for (var i=0;i<5;i++){
    var letter1 = letter[Math.floor(Math.random() * longitud)];
    var number1 = number[Math.floor(Math.random() * longitudDos)];
    var letter2 = letter[Math.floor(Math.random() * longitud)];
    var number2 = number[Math.floor(Math.random() * longitudDos)];
    var letter3 = letter[Math.floor(Math.random() * longitud)];
    var number3= number[Math.floor(Math.random() * longitudDos)];
  };
 document.getElementById("see-captcha").value = letter1 + number1 + letter2 + number2 + letter3 + number3;
};
