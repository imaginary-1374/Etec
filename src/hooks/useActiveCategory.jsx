import { useContext } from "react";
import {ActiveCategoryContext} from "../context/categoryContext";
export default function useActiveCategory() {
  return useContext(ActiveCategoryContext);
}
