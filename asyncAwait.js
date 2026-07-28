
function register() {

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("register here")
    resolve();
  },10000)
  })
  
  
}
function login() {

   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("login here")
    reject("failed to login");
  },10000)
  })

}
function getData() {
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("fetch data from db")
    resolve();
  },10000)
  })
}
function displayData() {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("display data")
    resolve();
  },10000)
  })
}

async function test(){
  try{
    await register();
    await login();
    await getData();
    await displayData();
  }
  catch (err){
   console.log("error",err);
  }
}
test();
console.log("call another application")