function login()
{
    const login_correto = "luciano";
    const password_correto = "senha123";
    
    let login_informado = document.getElementById("username").value;
    let password_informado = document.getElementById("password").value;

    if(login_informado == login_correto 
        && password_informado == password_correto)
    {
        let continuar_logado 
                = document.getElementById("remember-me");
        
        if(continuar_logado){
            document.cookie = "logado=1";
        }

        window.location.href = "index.html";
    } else{
        alert("Login ou Senha incorretos");
    }
}

function register()
{
    let username = document.getElementById("username").value;   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat_password 
        = document.getElementById("repeat-password").value;

    if(password != repeat_password){
        alert("Digite as senhas iguais...");
    } else {
        const user = {
            username: username,
            password: password,
            email: email
          };

        alert(user.username + ", seu cadastro foi realizado com sucesso.");
        window.location.href = "index.html";
    }
}