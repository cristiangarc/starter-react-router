import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function Product({ products }) {
    const navigate = useNavigate();

    const mockBuyNow = () => {
        alert(
            "You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let's go back to the home page!"
        );
        navigate("/");
    };

    let { id } = useParams();
    console.log(id);
    let filteredProducts;
    let product;
    if (typeof id !== "number") {
        filteredProducts = products.filter(
            (product) => product.type.toLowerCase() === id
        );
        console.log(filteredProducts);
    } else {
        [product] = products.filter((product) => product.id === id);
    }

    if (product) {
        return (
            <section>
                <h5>{product.name}</h5>
                <img src={product.image} alt={product.name} />
                <p>{product.type}</p>
                <p>{product.style}</p>
                <p>${product.price}</p>
                <button onClick={mockBuyNow}>Buy Now!</button>
            </section>
        );
    } else if (filteredProducts) {
        return filteredProducts.map((product) => {
            return (
                <section key={product.id}>
                    <h5>{product.name}</h5>
                    <img src={product.image} alt={product.name} />
                    <p>{product.type}</p>
                    <p>{product.style}</p>
                    <p>${product.price}</p>
                    <button onClick={mockBuyNow}>Buy Now!</button>
                </section>
            );
        });
    } else {
        return <h3>Coming soon</h3>;
    }
}
