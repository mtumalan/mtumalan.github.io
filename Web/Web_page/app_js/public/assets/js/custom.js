
mystorage=window.localStorage;
if (localStorage.getItem("userlog")=="true"){
// Obtener el elemento con el texto existente
const loginLink = document.getElementById('login');
console.log(loginLink)
// Cambiar el contenido del texto
if (loginLink) {
    loginLink.innerHTML = "HOLA <em>" + localStorage.getItem("username") + "</em>";

 logoutElement = document.getElementById("logout");
    logoutElement.style.display = 'block';
}}
else
{
    const loginLink = document.getElementById('login');
    console.log(loginLink)
// Cambiar el contenido del texto
if (loginLink) {
 loginLink.innerHTML = "Log in";
 const logoutLink = document.getElementById('logout');

 logoutLink.addEventListener('click', function() {
   // Update the localStorage variable
   localStorage.setItem('userlog', false);
 });
 
}
}
console.log(localStorage.getItem("userlog"));

