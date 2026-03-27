import { createContext, useState } from "react";

export const ActiveCategoryContext = createContext();

export default function ActiveCategoryProvider({ children }) {
  const [activeId, setActiveId] = useState("all products");

  return (
    <ActiveCategoryContext value={{ activeId, setActiveId }}>
      {children}
    </ActiveCategoryContext>
  );
}