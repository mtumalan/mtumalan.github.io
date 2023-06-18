function main()
{
    
    document.getElementById('formInsert').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
      
        
          let response = await fetch('http://localhost:5500/api/users/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, //indica que el contenido es json
            body: JSON.stringify({ username, password })
        })
      
          if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Inicio de sesión exitoso
            // Realizar alguna acción adicional después de un inicio de sesión exitoso
            let  mystorage=window.localStorage;
            localStorage.setItem("userlog",true);
            console.log("estoy debajo de mystorage")
            let name = localStorage.setItem("username",username);
            location.href = "../index-1.html";
           

          } else {
            const error = await response.json();
            localStorage.setItem("userlog",false);
            console.log("username o passoword incorrectas"); // Credenciales inválidas
            // Mostrar un mensaje de error o realizar alguna acción adicional en caso de credenciales inválidas
            const sessionErrorMessage = document.getElementById('sessionError');
            sessionErrorMessage.style.display = 'block';
          }
        
      });
      
    

    document.getElementById("b-home").onclick = function () {
        //location.href = "index-1.html";
        console.log("si funciono");

    };
}
localStorage.setItem("userlog",false);
main()
console.log(localStorage.getItem("userlog"));