import React from "react";
import ProductList from "./ProductList.json"; // Ensure this path is correct
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Home = ({ darkMode }) => {
  const [selectedFilter, setSelectedFilter] = React.useState(null);
  const [filteredItems, setFilteredItems] = React.useState(ProductList.products);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilter === selectedCategory) {
      setSelectedFilter(null); // Deselect if the same category is clicked again
    } else {
      setSelectedFilter(selectedCategory); // Select the new category
    }
  };

  React.useEffect(() => {
    filterItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter) {
      const tempItems = ProductList.products.filter((item) => item.category === selectedFilter);
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...ProductList.products]);
    }
  };

  const categories = ["Shirt", "Pant", "Shoes", "Accessories", "Other"];

  return (
    <div className={darkMode ? "text-white pt-[70px] bg-black h-full" : "bg-white pt-[70px] text-black h-full"}>
      <div className="flex mx-auto max-lg:w-full w-[1440px] max-lg:flex-wrap max-w[1140px] justify-between">
        {categories.map((category, index) => (
          <div key={index}>
            <button
              className={`button ${
                selectedFilter === category
                  ? "active bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white text-black dark:text-white dark:bg-black"
              } ${
                darkMode
                  ? "text-white px-10 text-[20px] font-bold w-[230px] p-3 border-4 mt-5 rounded-lg border-white"
                  : "bg-white px-10 text-[20px] font-bold w-[230px] p-3 border-4 mt-5 rounded-lg border-gray-900 text-black"
              }`}
              onClick={() => handleFilterButtonClick(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      <div className="grid gap-10 grid-cols-4 max-lg:grid-cols-1 pt-[50px] max-w-[1440px] w-full mx-auto">
        {filteredItems.map((product, id) => (
          <div key={id} className="relative w-fit border-black border max-lg:mx-auto rounded-[20px] max-sm:px-5">
            <img src={product.imgs} alt={product.title} className="w-[500px] rounded-[20px]" />

            <div className="absolute bottom-0 bgblure text-white p-2.5 mx-[10px] mb-[10px] w-[95%] max-sm:w-[85%] text-[18px] text-center rounded-[15px]">
              <p className="mb-2 font-semibold">{product.title}</p>
              <div className="flex gap-x-10">
                <p className="font-semibold">{product.price}</p>
                <button className="border k p-[7px] font-bold rounded-lg text-[14px] ml-auto">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;