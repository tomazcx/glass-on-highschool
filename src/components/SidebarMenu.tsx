import { X } from 'phosphor-react'
import { useContext } from 'react';
import { ModalContext } from '../providers/modal';
import {Link} from 'react-router-dom'

interface SidebarInterface {
    sidebar: boolean;
    handleSidebar(value: boolean): void;
}

export const SidebarMenu = (props: SidebarInterface) => {

    const { setModal } = useContext(ModalContext)

    return (
        <aside className="bg-white shadow-2xl absolute left-0 z-50 flex px-8 py-12 flex-col gap-12 w-8/12 h-screen animate-show-sidebar">
            <X size={32} color="#000000" onClick={() => props.handleSidebar(false)} />
            <nav className='flex flex-col gap-6 font-bold'>
                <Link to={'/product'} onClick={() => props.handleSidebar(false)}>Produtos</Link>
                <Link to={'/questions'} onClick={() => props.handleSidebar(false)}>Perguntas frequentes</Link>
                <Link to={'/register'} onClick={() => props.handleSidebar(false)}>Registrar-se</Link>
            </nav>
        </aside>
    )
}