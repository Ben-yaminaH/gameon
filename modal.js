function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}


function launchModal2() {
  modalbg2.style.display = "block";
}

function closeModal2() {
  modalbg2.style.display = "none";
}

// FORMULAIRE

function formulaire() {

  //variable de validation de champs

  let validation = 0;

  // Prénom

  let baliseprenom = document.getElementById("first");
  let prenom = baliseprenom.value;
  console.log(prenom);


  if (prenom.length < 2) {

    if (document.getElementById("name_alert")) {

    }
    else {
      let name_alert = document.getElementById('prenom');
      name_alert.insertAdjacentHTML('afterend', "<div id='name_alert'>Veuillez entrer 2 caractères ou plus pour le champ prénom</div>");
    }
  }

  else {
    if (document.getElementById("name_alert")) {
      document.getElementById("name_alert").remove();
    } else { }
    validation = validation + 1;
  }


  // Nom

  let balisenom = document.getElementById("last");
  let nom = balisenom.value;
  console.log(nom);

  if (nom.length < 2) {

    if (document.getElementById("surname_alert")) {

    }
    else {
      let surname_alert = document.getElementById('nom');
      surname_alert.insertAdjacentHTML('afterend', "<div id='surname_alert'>Veuillez entrer 2 caractères ou plus pour le champ nom</div>");
    }

  }

  else {
    if (document.getElementById("surname_alert")) {
      document.getElementById("surname_alert").remove();
    } else { }
    validation = validation + 1;
  }

  // Email

  let baliseemail = document.getElementById("email");
  let email = baliseemail.value;
  let emailRegexp = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
  let result = email.match(emailRegexp);
  console.log(email);


  if (email != result) {

    if (document.getElementById("email_alert")) {
    }
    else {
      let email_alert = document.getElementById('adressemail');
      email_alert.insertAdjacentHTML('afterend', "<div id='email_alert'>Veuillez vérifier le format de l'email</div>");
    }
  }

  else {
    if (document.getElementById("email_alert")) {
      document.getElementById("email_alert").remove();
    } else { }
    validation = validation + 1;
  }

  // Date de naissance

  let balisenaissance = document.getElementById("birthdate");
  let naissance = balisenaissance.value;
  console.log(naissance);

  if (naissance === "") {

    if (document.getElementById("naissance_alert")) {

    }
    else {
      let birthdate_alert = document.getElementById('naissance');
      birthdate_alert.insertAdjacentHTML('afterend', "<div id='naissance_alert'>Vous devez choisir une option</div>");
    }

  }

  else {
    if (document.getElementById("naissance_alert")) {
      document.getElementById("naissance_alert").remove();
    } else { }
    validation = validation + 1;
  }

  // Nombre tournoi

  let balisenbrtournoi = document.getElementById("quantity");
  let nbrtournoi = balisenbrtournoi.value;
  const nbrtournoiRegexp = new RegExp("^[0-9]+$");
  console.log(nbrtournoi);

  if ((nbrtournoi === "") && (nbrtournoi != nbrtournoiRegexp)) {

    if (document.getElementById("nbrtournoi_alert")) {

    }
    else {
      let nbrtournoi_alert = document.getElementById('nbrtournoi');
      nbrtournoi_alert.insertAdjacentHTML('afterend', "<div id='nbrtournoi_alert'>Veuillez indiquer un nombre</div>");
    }

  }

  else {
    if (document.getElementById("nbrtournoi_alert")) {
      document.getElementById("nbrtournoi_alert").remove();
    } else { }
    validation = validation + 1;
  }

  // Quelle tournoi

  let balisechoixtournoi = document.querySelectorAll('input[name="location"]');
  let tournoi = "";
  for (let i = 0; i < balisechoixtournoi.length; i++) {
    if (balisechoixtournoi[i].checked) {
      tournoi = balisechoixtournoi[i].value;
      break
    }
  }

  if (tournoi === "") {

    if (document.getElementById("tournoi_alert")) {

    }
    else {
      let tournoi_alert = document.getElementById('tournoi');
      tournoi_alert.insertAdjacentHTML('afterend', "<div id='tournoi_alert'>Veuillez faire un choix</div>");
    }

  }

  else {
    if (document.getElementById("tournoi_alert")) {
      document.getElementById("tournoi_alert").remove();
    } else { }
    validation = validation + 1;
  }

  console.log(tournoi);

  // Condition utilisation

  let baliseutilisation = document.getElementById("checkbox1");
  let condition = baliseutilisation.checked;
  console.log(condition);

  if (condition == false) {

    if (document.getElementById("condition_alert")) {

    }
    else {
      let condition_alert = document.getElementById('condition');
      condition_alert.insertAdjacentHTML('afterend', "<div id='condition_alert'>Vous devez vérifier que vous acceptez les termes et conditions</div>");
    }

  }

  else {
    if (document.getElementById("condition_alert")) {
      document.getElementById("condition_alert").remove();
    } else { }
    validation = validation + 1;
  }

  // Infos evenement

  let baliseevenement = document.getElementById("checkbox2");
  let evenement = baliseevenement.checked;
  console.log(evenement);


  if ((validation === 7)
  ) {
    closeModal();
    launchModal2();
    baliseprenom.value = "";
    balisenom.value = "";
    baliseemail.value = "";
    balisenaissance.value = "";
    balisenbrtournoi.value = "";
    for (let i = 0; i < balisechoixtournoi.length; i++){
      balisechoixtournoi[i].checked = false;
    }
    baliseutilisation.value = "";
  }
  else {

  }

  console.log(validation)

}
