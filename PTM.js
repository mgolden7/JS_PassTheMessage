const messageInput = document.getElementById('messageInput');

function getMessage(){
    document.getElementById('PTMHeader2A').innerHTML = messageInput.value;
    document.getElementById('PTMHeader2A').style.textShadow = "0px 1px 2px orange";
    //note: "style.text-shadow" needs to be converted to "style.textShadow"
    messageInput.value = "";

}