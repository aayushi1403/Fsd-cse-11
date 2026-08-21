const booksData=[
 {
   img:'https://images.ctfassets.net/9htf9uzhsn4z/51ynRwyfYI3iCsHLT7n9ew/0987e51e30a65974ac6adc97c84c84ed/lulu-products-product-types-print-books-2x.jpg?w=2880&h=960&fm=webp',
   price:465
 },
 {
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBvCnJvj4MIluPfYz1Fi6pBNawhJQAD4plBCx9uPesg&s',
   price:723
 },
 {
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSP5K7zpJ6WJ6lle4Bs9Px_raBzC72FvwAUordmVBFBQ&s=10',
   price:389
 }
]
function book(item)
{const div=document.createElement('div');
div.setAttribute("class","card");
div.style.border="2px solid"
div.style.width="200px"
div.style.height="200px"
const image=document.createElement('img');
image.setAttribute("src",item.img)
image.setAttribute("width","100px");
image.setAttribute("height","100px");
const H2=document.createElement("h2");
H2.innerText=item.price
const bt=document.createElement("button");
bt.innerText="AddToCart";
div.appendChild(image);
div.appendChild(H2);
div.appendChild(bt);
return div;
}


const bookstore=booksData.map((i)=>{
return book(i);
})

const parent=document.getElementById("root");

bookstore.forEach((bookCard) => {
  parent.appendChild(bookCard);
});