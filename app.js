const heartNum1 = document.getElementById('heartNum1')
const heartNum2 = document.getElementById('heartNum2')
const heartNum3 = document.getElementById('heartNum3')
const heartNum4 = document.getElementById('heartNum4')
console.log(heartNum1)

heartNum1.textContent = "0"
// heartNum2.textContent = "0"
// heartNum3.textContent = "0"
// heartNum4.textContent = "0"


document.getElementById("likeBtn1").addEventListener("click", function() {
    likeBtn1.style.color = "#ed4853"
    heartNum1.textContent ++
      
  });
document.getElementById("likeBtn2").addEventListener("click", function() {
    likeBtn2.style.color = "#ed4853"
    heartNum2.textContent ++
      
  });
document.getElementById("likeBtn3").addEventListener("click", function() {
    likeBtn3.style.color = "#ed4853"
    heartNum3.textContent ++
      
  });
document.getElementById("likeBtn4").addEventListener("click", function() {
    likeBtn4.style.color = "#ed4853"
    heartNum4.textContent ++
      
  });
