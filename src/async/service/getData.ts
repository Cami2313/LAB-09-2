(async () => {

    const getId = Math.floor(Math.random() * 100) + 1;

    const response = await fetch(`https://dummyjson.com/products/${getId}`);
    
    const data = await response.json();
    
    console.log(data);
})();
  