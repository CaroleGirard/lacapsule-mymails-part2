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
    var newDiv= document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.className='row';
    var newAvatar= document.createElement("img");
    newDiv.appendChild(newAvatar);
    newAvatar.src = 'avatar-5.jpg';
    newAvatar.className= 'avatar';
    var prenom= document.createElement("h6");
    newDiv.appendChild(prenom);
    prenom.textContent = 'Carole Girard';
    var p= document.createElement("p");
    newDiv.appendChild(p);
    var newMessage = document.createTextNode(document.getElementById('champs').value);
    p.appendChild(newMessage);
    var newTrash= document.createElement("img");
    newDiv.appendChild(newTrash);
    newTrash.src = "trash.png";
    newTrash.className= "trash";
    document.getElementById('champs').value = " "
    document.getElementById('compteur').textContent = document.getElementsByTagName('p').length;
}
);

