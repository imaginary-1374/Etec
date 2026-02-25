// import { useContext, useMemo } from "react";
// import { ProductsContext } from "../../context/productscontext";
// import useDebounce from "../../hooks/useDebounce";

// export default function useProductSearch(value) {
//   const debouncedSearchTerm = useDebounce(value, 500);

//   const { products } = useContext(ProductsContext);

//   const debouncedSearchTerm = useDebounce(value, 500);
//   const filteredProducts = products.filter((item) => {
//     if (!value) return null;

//     const searchTerm = debouncedSearchTerm.toLowerCase();
//     const productName = item.name.toLowerCase();
//     return productName.includes(searchTerm);
//   });
//   console.log(filteredProducts);
//   return filteredProducts;
// }
