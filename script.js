document.getElementById('compteur').textContent = document.getElementsByTagName('p').length;

for (var i=0; i<document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function (){
        this.parentNode.remove()
    }
    )
};


document.getElementById('bouton').addEventListener("click",
function () {
    var newDiv= document.body.appendChild(document.createElement("div"))
    var newMessage = document.createTextNode(document.getElementById('champs').value)
    newDiv.appendChild(newMessage)
}
);
