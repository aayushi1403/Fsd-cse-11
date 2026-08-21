function addParagraph(){
  const para=document.createElement('p');
  para.textContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum obcaecati ipsum consequatur velit libero"
  para.style.backgroundColor="black"
  para.style.color="white"
  const parent=document.querySelector('div')
  parent.appendChild(para)
}

function deleteAll(){
  const parent=document.querySelector('div')
  parent.remove(parent.childNodes)
}


  const para=document.querySelector('p');
  const parent=document.querySelector('div')
  const delBtn=document.querySelector('#del');
  delBtn.addEventListener("click",()=>{
    if(parent.firstElementChild){
      parent.firstElementChild.remove();
    }
    else{
      alert("no more element left to delete");
    }
  })