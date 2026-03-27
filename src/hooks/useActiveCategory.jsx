import { useContext } from "react";
import { ActiveCategoryContext } from "../context/CategoryContext";
export default function useActiveCategory() {
  return useContext(ActiveCategoryContext);
}
