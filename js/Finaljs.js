
function signIn(){
    alert("Signing In");
    var email= document.getElementById('Email').value;
    var password = document.getElementById('pass').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert("Error signing in");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function signOut(){
    firebase.auth().signOut().then(function() {
        alert("Signed out!");
    }).catch(function(error) {
        // An error happened.});
    });
}

function adduser() {
    alert("adding user!");
    var email = document.getElementById('CEmail').value;
    var password = document.getElementById('Cpass').value ;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error" + error.message);
    });
}
function addData() {
    alert("adding data");
    var User_name = document.getElementById("user").value;
    var User_Subject = document.getElementById("usub").value;
    var User_text = document.getElementById("utext").value;
    db.collection("products").add({
        username: User_name,
        usersubject: User_Subject,
        usertext: User_text,
        userimage: User_image
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        //update the products view
        getProducts();
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });
}