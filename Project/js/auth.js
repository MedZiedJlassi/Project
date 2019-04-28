// variables globaux
var nom = "nom";
var prenom = "prenom";
var adresse = "adresse";
var ville = "ville";
var codepostal = "codepostal";
var tel = "tel";
var fax = "fax";
var marque = "marque";
var model = "model";
var vin = "vin";
var matricul = "matricul";
var date = "date";
var distance = "distance";

//sign up

var signupForm = document.querySelector("#signupForm");
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signupMail'].value;
    const password = signupForm['signupPass'].value;
    // signup user
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
    //create entry user in database
        var uid = auth.currentUser.uid;
        database.ref('user/' + uid).set({
            email: email,
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            ville: ville,
            codepostal: codepostal,
            tel: tel,
            fax: fax,
            marque: marque,
            model: model,
            vin: vin,
            matricul: matricul,
            date: date,
            distance: distance,
        })
    })
})

//sign in

var signinForm = document.querySelector("#signinForm");
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signinForm['signinMail'].value;
    const password = signinForm['signinPass'].value;
    // signup user
    auth.signInWithEmailAndPassword(email, password).then((user) =>{

    })
});

// user check

auth.onAuthStateChanged(user => {
    if (user) {
        signupForm.reset();
        signinForm.reset();
        // document.getElementById('signin').style.display='none';
        // document.getElementById('signup').style.display='none';
        // document.getElementById('logout').style.display='block';
        $(function () {
            $('#signin, #signup').hide();
            $('.modal').modal('hide');
            $('#logout').show();
        });
        console.log("logged");

    } else {
        console.log("not logged");
    }
})

// todo signout
logout.addEventListener('click', e => {
    auth.signOut();
    $("#logout").click(function () {
        $("#signin").hide();
        $("#signup").hide();
        $("#logout").show();
    })
});
    // document.getElementById('signin').style.display='block';
    // document.getElementById('signup').style.display='block';
    // document.getElementById('logout').style.display='none';
