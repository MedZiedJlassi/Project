
auth.onAuthStateChanged(function (user) {
    if (user) {
        // Écouter la soumission du formulaire
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {

            e.preventDefault();
            //les valeurs des variables du formulaire
            const nom = contactForm['nom'].value;
            const prenom = contactForm['prenom'].value;
            const adresse = contactForm['adresse'].value;
            const ville = contactForm['ville'].value;
            const codepostal = contactForm['codepostal'].value;
            const tel = contactForm['tel'].value;
            const fax = contactForm['fax'].value;
            const marque = contactForm['marque'].value;
            const model = contactForm['model'].value;
            const vin = contactForm['vin'].value;
            const matricul = contactForm['matricul'].value;
            const date = contactForm['date'].value;
            const distance = contactForm['distance'].value;
            //enregistrement des données formulaire
            var uid = auth.currentUser.uid;
            var userRef = database.ref().child('user/' + uid);
            userRef.update({
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
            //reinitialisation formulaire
            document.getElementById('contactForm').reset();
            alert('Your profil has been updated');
        });
    } else {

    }
})
//fonction pour obtenir les valeurs du formulaire
// function getInputVal(id) {
//     return document.getElementById(id).value;
// }

// function saveMessage(email, password, nom, prenom, adresse, ville, codepostal, tel, fax, marque, model, vin, matricul, date, distance) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         email: email,
//         password: password,
//         nom: nom,
//         prenom: prenom,
//         adresse: adresse,
//         ville: ville,
//         codepostal: codepostal,
//         tel: tel,
//         fax: fax,
//         marque: marque,
//         model: model,
//         vin: vin,
//         matricul: matricul,
//         date: date,
//         distance: distance,
//     });
// }


