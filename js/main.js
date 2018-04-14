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
    var username = document.getElementById("username").Value
    var password = document.getElementById("password").Value
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
    var registerUser = document.getElementById("newUser").Value
    var registerPassword = document.getElementById("newPassword").Value
    var newUser ={
        username:registerUser,
        password:registerPassword
    }
    objpeople.push(newUser)
    console.log(objpeople)
}