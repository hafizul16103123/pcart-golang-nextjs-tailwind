import ProductCardShop from "../utils/product/productCardShop";

function ProductShop() {
  return (
    <div className="container max-w-7xl relative m-auto  border-b-2">
      <div className="flex justify-between items-center px-2 h-20 border-b-2 ">
        <h1>Showing 10 of 100 Products</h1>
        <div className="flex">
        <h1 className="w-32 pt-2 text-sm">Sort By :</h1>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select a size</option>
            <option value="US">Small</option>
            <option value="CA">Medium</option>
            <option value="FR">Large</option>
            <option value="DE">Extra Learge</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
        <ProductCardShop />
      </div>
    </div>
  );
}

export default ProductShop;
