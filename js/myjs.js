function revealpass(){
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }
 else {
    x.type = "password";
}
    return x.type;
}