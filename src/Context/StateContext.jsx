import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../Reducer";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET-PRODUCT", payload: productList });
    const filterData = productList.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET-PRODUCT", payload: filterData });
  }, [productList, search]);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProductList(data);
  };

  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch, search, setSearch };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const StateContextCustom = () => useContext(stateContext);
