var objpeople = [
    {
        username : "essence",
        password:"nn1"
        
    },
    {
        username : "mera",
        password:"aa1"
    },
    {
        username: "njod",
        password:"bb1" 
    },
    {
       username: "dody",
        password:"aa1"
    }
];
// login function
function login(){
    // input from the form
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    // loop through the obj
    for (i = 0 ; i < objpeople.length; i++){
        if (username == objpeople[i].username && password == objpeople[i].password){
            console.log(username + "is logged in !!");
            return
        };
    }
// if username and password not match
console.log("incorrect username or password")
}
function registerUser(){
    var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value
    var newUser ={
        username:registerUser,
        password:registerPassword
    }
    // for (i = 0; i < objpeople.length; i++){
    //     if (registerUser == objpeople.username) {
    //         alert ("that username is already in use, please choose another")
    //         return
        // } 
    }
    objpeople.push(newUser)
    console.log(objpeople)
