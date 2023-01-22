import  { createContext, useContext, useState } from "react";

const ConfigContext = createContext();
const SetConfigContext = createContext()

export function useDifficulty(){
    return useContext(ConfigContext)
}

export function useSetDifficulty(value) {
    return useContext(SetConfigContext)
}

export default function ConfigProvider({children}) {

    const [difficulty, setDifficulty] = useState(1)

    function UpdateDifficulty(value) {
        setDifficulty(value)
    }

    return(
        <ConfigContext.Provider value={difficulty}>
            <SetConfigContext.Provider value={setDifficulty}>
                {children}
            </SetConfigContext.Provider>
        </ConfigContext.Provider>
    )
}