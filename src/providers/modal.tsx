import { createContext, ReactNode, useState } from "react";

interface InitialValueInterface{
    modal: boolean;
    setModal (value: boolean): void;
}

interface ChildInteface{
    children: ReactNode;
}

const initialValue = {
    modal: false,
    setModal: () => {}
}

export const ModalContext = createContext<InitialValueInterface>(initialValue)

export const ModalProvider = ({children} : ChildInteface) =>{

    const [modal, setModal] = useState(initialValue.modal)

    return(
        <ModalContext.Provider value={{modal, setModal}} >
            {children}
        </ModalContext.Provider>
    )
}