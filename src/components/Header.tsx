import { User, List, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ModalContext } from '../providers/modal'
import classNames from 'classnames'
import { SidebarMenu } from './SidebarMenu'
import { LoginModal } from './LoginModal'
import {Link} from 'react-router-dom'

export const Header = () => {

    const { modal, setModal } = useContext(ModalContext)
    const [sidebar, setSidebar] = useState(false)
    const [loginModal, setLogin] = useState(false)


    const handleSidebar = (value: boolean) => {
        setSidebar(value)
        setModal(value)
    }

    return (
        <>
            {sidebar ? <SidebarMenu sidebar={sidebar} handleSidebar={handleSidebar} /> : <></>}
            <header className={classNames("flex flex-col bg-gray-800 w-full text-white", {
                'opacity-50': modal
            })}>

                <div className={"w-full flex items-center justify-center py-1 bg-gray-500"}>
                    <span className="uppercase font-bold text-center text-sm md:text-md">
                        novos lançamentos toda semana
                    </span>
                </div>
                <div className="px-4 md:px-28 py-4 flex justify-between items-center gap-8 ">
                    <nav className="flex items-center">
                        <List size={32} color="#e8e8e8" className='mr-4 cursor-pointer md:hidden' onClick={() => handleSidebar(true)} />
                        <Link to={'/'} className="font-bold  hover:text-gray-400 transition-colors uppercase text-2xl tracking-wider mr-12">GlassOn</Link>
                        <div className="hidden items-center md:flex gap-6 text-[14px]">
                            <Link to={'/products'} className="hover:text-gray-400 transition-colors">Produtos</Link>
                            <Link to={'/questions'} className="hover:text-gray-400 transition-colors">Perguntas frequentes</Link>
                            <Link to={'/register'} className="hover:text-gray-400 transition-colors">Registrar-se</Link>
                        </div>
                    </nav>


                    <div className="flex items-center gap-4 ">
                        <ShoppingCartSimple size={32} color="#e8e8e8" className='cursor-pointer' />

                        <User size={32} color="#e8e8e8" className='cursor-pointer' onClick={() => setLogin(prevState => !prevState)} />
                        {loginModal ? <LoginModal /> : <></>}
                    </div>

                </div>
            </header>
        </>

    )
}