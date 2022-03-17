let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]
  var table = document.getElementById("tbody");
  
// cette function pour afficher le modale de l'insertion utilisateur
function add() {
    document.getElementById("modal").style.display="block"
}
// cette function pour afficher la lsite des utilisateurs en louad de la page
function listerUser(){
 
 table.innerHTML = "";
 users.forEach(user => {
     
if(user.status === "En validation"){

    table.innerHTML += `<tr><td>${user.id}</td><td> ${new Date(user.createdDate).toLocaleDateString()}</td><td > <label class="on-validation">${user.status}</label> </td><td>${user.lastName}</td><td>${user.firstName}</td><td>${user.userName}</td><td>${user.registrationNumber}</td><td><img src="public/bin.png" alt="trash" class="btn-trash delete"  id="remove"></td></tr>`
}else if(user.status === "Validé"){
    table.innerHTML += `<tr><td>${user.id}</td><td>${new Date(user.createdDate).toLocaleDateString()}</td><td > <label class="valide">${user.status}</label> </td><td>${user.lastName}</td><td>${user.firstName}</td><td>${user.userName}</td><td>${user.registrationNumber}</td><td><img src="public/bin.png" alt="trash" class="btn-trash delete"  ></td></tr>`
}else {
    table.innerHTML += `<tr><td>${user.id}</td><td>${new Date(user.createdDate).toLocaleDateString()}</td><td > <label class="rejected">${user.status}</label> </td><td>${user.lastName}</td><td>${user.firstName}</td><td>${user.userName}</td><td>${user.registrationNumber}</td><td><img src="public/bin.png" alt="trash" class="btn-trash delete" </td></tr>`
}     
 });
 
}
// cette function pour enregistrer les donner de l'utilisateur
function save(){
     
    const newDataUser = {
            id: Math.floor(Math.random() * parseInt("9".repeat(9))),
            createdDate: document.getElementById("dateCreation").value,
            status: document.getElementById("etat").value,
            firstName: document.getElementById("prenom").value,
            lastName: document.getElementById("nom").value,
            userName: document.getElementById("nomUtilisateur").value,
            registrationNumber: document.getElementById("matricule").value,
    }
    
    users.push(newDataUser);
    listerUser()
    document.getElementById("modal").style.display="none"
}

// delete users
table.addEventListener("click",(e)=>{
    let text = "voulez vous vraiment supprimer!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        if (e.target.classList.contains('delete')) {
        
            console.log(e.target.parentNode.parentNode.remove());
        }
    } 
    
}) 
