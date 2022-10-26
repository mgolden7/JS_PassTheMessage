const messageInput = document.getElementById('messageInput');

function getMessage(){
    document.getElementById('PTMHeader2A').innerHTML = messageInput.value;
    messageInput.value = "";
}