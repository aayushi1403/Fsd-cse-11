function register() {
  waitForDelay(10000);
  console.log("register here");
}
function login() {
  waitForDelay(5000);
  console.log("login here");
}
function getData() {
  waitForDelay(3000);
  console.log("fetch data from DB");
}
function displayData() {
  waitForDelay(7000);
  console.log("display data");
}
function waitForDelay(delay){
const mt=Date.now()+delay;
while(Date.now()<mt){

}
}
register()
login()
getData()
console.log("call another application")