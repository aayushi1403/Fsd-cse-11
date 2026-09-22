import React,{useState} from 'react'
import ProductCard from './ProductCard';

function Product() {
   const [response, setResponse] = useState([]);

  async function fetchUserData() {
    const url = "https://dummyjson.com/products";

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      // console.log(data);

      setResponse(data.products);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }
   
    fetchUserData();
  
  return (
    <div className='flex flex-wrap gap-2'>
      {response.map((item)=>(<ProductCard key={item.id} props={item}/>))}
    </div>
  )
}

export default Product
