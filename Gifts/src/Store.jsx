import { createContext, useState } from "react";
import { listGift as gift, listGift } from "./data";

const initStore = {
    listGift: [],
    setListGift: (listGift) => {}
}

export const Store = createContext(initStore)

const StoreProvider = (props) => {
    const [listGift, setListGift] = useState(gift)
    return <Store.Provider value={{
        listGift: listGift,
        setListGift
    }}
    >
        {props.children}
    </Store.Provider>
}

export default StoreProvider