function register() {
  setTimeout(()=>{
    console.log("register here")
  },10000)
  
}
function login() {
  setTimeout(()=>{
    console.log("login here")
  },3000)
}
function getData() {
  setTimeout(()=>{
    console.log("fetch data from DB");
  },5000)
}
function displayData() {
  setTimeout(()=>{
    console.log("display data");
  },9000)
  
}

register()
login()
getData()
displayData();
console.log("call another application")