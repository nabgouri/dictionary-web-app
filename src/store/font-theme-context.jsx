import { createContext } from "react";

const FontContext = createContext({
  font: "",
  handleFont: () => {},
});

export { FontContext };
