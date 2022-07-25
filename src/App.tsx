import { ModalProvider } from "./providers/modal"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router"

export const App = () => {
    return (
        <div className="flex flex-col items-center justify-between h-full">
            <ModalProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ModalProvider>

        </div>

    )
}