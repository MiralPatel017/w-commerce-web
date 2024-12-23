import ProductList from "./ProductList.json";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DetailsPage = ({ darkMode }) => {
    const { id } = useParams();

    const product = ProductList.products[id-1]

    if (!product) {
        return (
            <div className={darkMode ? "text-white" : "bg-white text-black"}>
                <div className="max-w-[1440px] mx-auto text-center py-20">
                    <h1 className="text-3xl font-bold">Product not found!</h1>
                </div>
            </div>
        );
    }

    return (
        <div className={darkMode ? "text-white bg-black pt-[50px]" : "bg-white text-black pt-[50px]"}>

            <div className="max-w-[1440px] mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-lg font-medium mb-2">Price: {product.price}</p>
                <img
                    src={product.imgs}
                    // alt={product.title}
                    className="w-[300px] mb-4"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300";
                        // e.target.alt = "Image not available";
                    }}
                />
                <p className="text-lg">{product.dicpt}</p>
            </div>
        </div>
    );
};

export default DetailsPage;