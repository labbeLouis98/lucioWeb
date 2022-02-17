/* fonctions.js */


/* 1 fonctions boutons pour passer a la page suivante */


/* 2 validation des champs nécessaire avec messages d'erreur */


function suivant1() {

    var d = document

    /* validation requise avant d'activer la transition */

    /* je declare des variable pour simplifier le code pour user et password*/

    var u = document.querySelector("#user").value;

    var p = document.querySelector("#pass").value;



    if (u == "") {


        /* add class list erreur */

        d.querySelector("#err").classList.add("erreur");


    } else if (p == "") {


        /* add class list erreur */

        d.querySelector("#err2").classList.add("erreur");
    } else {

        d.querySelector("#err").classList.remove("erreur");
        d.querySelector("#err2").classList.remove("erreur");
        
        /* copier les valeurs des champs dans le profil */
        
        leProfil.utilisateur = document.querySelector("#user").value;
        leProfil.passWord = document.querySelector("#pass").value;



        /* 1 bouger le slider vers la gauche */

        d.querySelector("#divCentre").classList.toggle("transi1");


        /* activer le prochain bouton  */
        d.querySelector("#bSuivant2").addEventListener('mouseup', suivant2);


    }



}




function suivant2() {

    var d = document

    /* validation requise avant d'activer la transition */

    /* je declare des variable pour simplifier le code pour pays province et ville*/

    var pa = document.querySelector("#pays").value;

    var pr = document.querySelector("#pro").value;

    var v = document.querySelector("#ville").value;


    if (pa == "") {


        /* add class list erreur */

        d.querySelector("#err3").classList.add("erreur");


    } else if (pr == "") {


        /* add class list erreur */

        d.querySelector("#err4").classList.add("erreur");


    } else if (v == "") {


        /* add class list erreur */

        d.querySelector("#err5").classList.add("erreur");


    } else {

        /* 1 bouger le slider vers la gauche */


        d.querySelector("#err3").classList.remove("erreur");
        d.querySelector("#err4").classList.remove("erreur");
        d.querySelector("#err5").classList.remove("erreur");
        
        
        /* copier les valeurs des champs dans le profil */
        
        leProfil.pays = document.querySelector("#pays").value;
        leProfil.province = document.querySelector("#pro").value;
            leProfil.ville = document.querySelector("#ville").value;



        d.querySelector("#divCentre").classList.toggle("transi2");




        /* activer le prochain bouton  */

        d.querySelector("#bSuivant3").addEventListener('mouseup', suivant3);

    }



}

function suivant3() {

    var d = document


    /* validation requise avant d'activer la transition */

    /* je declare des variable pour simplifier le code pour pays province et ville*/

    var a = document.querySelector("#adresse").value;

    var c = document.querySelector("#codeP").value;

    var t = document.querySelector("#tel").value;


    if (a == "") {

        d.querySelector("#err6").classList.add("erreur");

    } else if (c == "") {

        d.querySelector("#err7").classList.add("erreur");

    } else if (t == "") {

        d.querySelector("#err8").classList.add("erreur");

    } else {

        /* 1 bouger le slider vers la gauche */
        d.querySelector("#err6").classList.remove("erreur");
        d.querySelector("#err7").classList.remove("erreur");
        d.querySelector("#err8").classList.remove("erreur");
        
        
        /* copier les valeurs des champs dans le profil */
        
        leProfil.adresse = document.querySelector("#adresse").value;
        leProfil.codePostal = document.querySelector("#codeP").value;
            leProfil.telephone = document.querySelector("#tel").value;

        d.querySelector("#divCentre").classList.toggle("transi3");
        
        
        
        /* selection des div conteneurs pour l'affichage des rep */
        
        
        
        document.querySelector("#uti").innerText = leProfil.utilisateur;
        document.querySelector("#mp").innerText = leProfil.passWord;
        document.querySelector("#pa").innerText = leProfil.pays;
        document.querySelector("#provi").innerText = leProfil.province;
        document.querySelector("#vi").innerText = leProfil.ville;
        document.querySelector("#adr").innerText = leProfil.adresse;
        document.querySelector("#cpl").innerText = leProfil.codePostal;
        document.querySelector("#telep").innerText = leProfil.telephone;

        
        
        
    }



}






/* creation des fonctions pour naviguer entre les sections*/



/* references aux boutons 1 2 3 4 */

/* associer les boutons au class des boutons html */





let bt1 = document.querySelector("#bouton1");

let bt2 = document.querySelector("#bouton2");

let bt3 = document.querySelector("#bouton3");

let bt4 = document.querySelector("#bouton4");



/* associer la fonction et les cas pour chaque boutons */

bt1.addEventListener('mouseup', function () {

    changerPage(1)
})


bt2.addEventListener('mouseup', function () {

    changerPage(2)
})

bt3.addEventListener('mouseup', function () {

    changerPage(3)
})

bt4.addEventListener('mouseup', function () {

    changerPage(4)
})



/* fucntion qui permet de changer de page en page et de revenir en arriere */


function changerPage(lapage) {


    let leSlider = document.querySelector("#divCentre");


    switch (lapage) {


        /* page 1 case 1 */

        case 1:

            /* 1 remove l anim actif des boutons */


            bt2.classList.remove("actif");
            bt3.classList.remove("actif");
            bt4.classList.remove("actif");

            /* 2  remove l anim de translate x des boutons */

            leSlider.classList.remove("transiNone");
            leSlider.classList.remove("transi1");
            leSlider.classList.remove("transi2");
            leSlider.classList.remove("transi3");

            /* 3 add l anim aproprie au bouton pour changer de page */

            bt1.classList.add("actif");

            leSlider.classList.add("transiNone");



            break;

        case 2:

            /* 1 remove l anim actif des boutons */

            bt1.classList.remove("actif");

            bt3.classList.remove("actif");
            bt4.classList.remove("actif");

            /* 2  remove l anim de translate x des boutons */

            leSlider.classList.remove("transiNone");
            leSlider.classList.remove("transi1");
            leSlider.classList.remove("transi2");
            leSlider.classList.remove("transi3");

            /* 3 add l anim aproprie au bouton pour changer de page */

            bt2.classList.add("actif");

            leSlider.classList.add("transi1");

            break;



        case 3:

            /* 1 remove l anim actif des boutons */

            bt1.classList.remove("actif");
            bt2.classList.remove("actif");

            bt4.classList.remove("actif");

            /* 2  remove l anim de translate x des boutons */

            leSlider.classList.remove("transiNone");
            leSlider.classList.remove("transi1");
            leSlider.classList.remove("transi2");
            leSlider.classList.remove("transi3");

            /* 3 add l anim aproprie au bouton pour changer de page */

            bt3.classList.add("actif");

            leSlider.classList.add("transi2");

            break;

        case 4:

            /* 1 remove l anim actif des boutons */

            bt1.classList.remove("actif");
            bt2.classList.remove("actif");
            bt3.classList.remove("actif");


            /* 2  remove l anim de translate x des boutons */

            leSlider.classList.remove("transiNone");
            leSlider.classList.remove("transi1");
            leSlider.classList.remove("transi2");
            leSlider.classList.remove("transi3");

            /* 3 add l anim aproprie au bouton pour changer de page */

            bt4.classList.add("actif");

            leSlider.classList.add("transi3");

            break;
    }
}
