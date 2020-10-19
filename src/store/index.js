import { createContext } from "react";
const AppContext = createContext({ loggedIn: false, user: null });

export default AppContext;
