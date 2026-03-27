import { useContext, useMemo } from "react";
import useDebounce from "./useDebounce";
import { ProductsContext } from "../context/ProductsContext";
export default function useSearch(value) {
  const debouncedSearchTerm = useDebounce(value, 500);
  const { products } = useContext(ProductsContext);

  // We use useMemo here so we don't re-calculate the filter
  // unless the products list or the debounced term actually changes.
  const filteredProducts = useMemo(() => {
    if (!debouncedSearchTerm) return []; // Or return [] depending on your UI needs

    const searchTerm = debouncedSearchTerm.toLowerCase();

    return products.filter((item) => {
      const productName = item.name.toLowerCase();
      return productName.includes(searchTerm);
    });
  }, [debouncedSearchTerm, products]);

  return filteredProducts;
}
