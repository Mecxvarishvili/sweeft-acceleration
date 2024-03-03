import { createContext } from "react";

interface HistoryContext {
    history: string[],
    setHistory: Function
}

const SearchHistoryContext = createContext<HistoryContext>({
    history: [],
    setHistory: () => {}
})

export default SearchHistoryContext