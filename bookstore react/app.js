import  Book  from "./index";
 export const bookdata=[
  {image:"",title:"reactJS", price:464},
  {image:"",title:"NodeJS", price:585},
  {image:"",title:"ExpressJS", price:400},
  {image:"",title:"reactJS", price:464},
  {image:"",title:"NodeJS", price:585},
  {image:"",title:"ExpressJS", price:400},
]


function App(){

  const bookstore=bookdata.map((b)=>{
    return Book(b)
  })
  const div=React.createElement("div",{className:"bookstore"},[...bookstore])
  return div;

}
export default App;

