import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import './Card.css';

export const Card = () => {

    const [product, setProduct] = useState<Product>({} as Product);

    const getId = Math.floor(Math.random() * 100) + 1;

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${getId}`)
        .then(res => res.json())
        .then((data) => {setProduct(data)})
    }, []);

    return (
        <div className="card-container">
            <h2>{product.title}</h2>
            <img src={`https://cdn.dummyjson.com/product-images/${product?.id}/1.jpg`} alt={product?.title}/>
            <p>ID: {product.id}</p>
            <p>Descripcion: {product.description}</p>
            <p>USD$: {product.price}</p>
            <p>Marca: {product.brand}</p>
        </div>
    );
};