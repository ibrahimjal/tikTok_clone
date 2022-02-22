const heartNum1 = document.getElementById('heartNum1')
const heartNum2 = document.getElementById('heartNum2')
const heartNum3 = document.getElementById('heartNum3')
const heartNum4 = document.getElementById('heartNum4')


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

  
// show messages
const msgContainer1 = document.getElementById('msgContainer1')
document.getElementById("messageBtn").addEventListener("click", ()=> {
    msgContainer1.classList.add("show-msg")
    document.getElementById("msgCloseBtn1").addEventListener("click",()=>{
        msgContainer1.classList.remove("show-msg")

    })
}) 


// add comment 
const msgBody = document.getElementById("msgBody")
const msgInput1 = document.getElementById("msgInput1")
const message = document.getElementById("message")
const msg = document.getElementById("msg")
console.log(msg)


document.getElementById("addComment").addEventListener("click", ()=>{
    // console.log("Comment added")
    // paragraph = document.createElement("p")
    // paragraph.classList.add("msg-styling")
    // paragraph.textContent = msgInput1.value
    // msgBody.appendChild(paragraph)
    msgBody.appendChild(message)
    message.style.display = "flex"
    const userMessage = msgInput1.value
    msg.textContent = userMessage
    

    msgInput1.value = ""


})
