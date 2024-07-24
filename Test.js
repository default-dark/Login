function login(){
    const name = document.getElementsByName("name")[0].value;
    user = name.toLowerCase();
    const password = document.getElementsByName("pass")[0].value;
    senha = password.toLowerCase();
    if (user == "admin" && senha == "admin" ){
        alert("seja bem vindo admin")
    }else{
        alert("error de senha ou de usuario")
    }
}
