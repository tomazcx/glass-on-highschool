import { FacebookLogo, InstagramLogo, EnvelopeSimple, Phone, TwitterLogo } from 'phosphor-react'
import { useContext } from 'react'
import { ModalContext } from '../providers/modal'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

export const Footer = () => {

    const {modal} = useContext(ModalContext)

    return (
        <footer className={classNames("bg-gray-800 md:px-16 pt-12 pb-16 flex gap-16 flex-col items-center text-white text-[14px]", {
            'opacity-50': modal
        })}>
            <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-12 w-full">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <span className="text-gray-400">Nosso Objetivo</span>
                        <span>A GlassOn nasceu para revolucionar a maneira de como enxergamos o mundo, por meio de armações únicas e tecnológicas.</span>
                    </div>
                    <div className=" lg:gap-12 hidden lg:flex ">
                        <FacebookLogo size={25} color="#e8e8e8" />
                        <InstagramLogo size={25} color="#e8e8e8" />
                        <EnvelopeSimple size={25} color="#e8e8e8" />
                        <Phone size={25} color="#e8e8e8" />
                        <TwitterLogo size={25} color="#e8e8e8" />
                    </div>

                </div>
                <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4">
                    <span className="text-gray-400">Onde</span>
                    <div className="flex flex-col gap-2">
                        <span>89562-000</span>
                        <span>R. Saul Brandalise, 539</span>
                        <span>Centro - Videira</span>
                        <span>SC - Brasil</span>
                    </div>

                </div>
                <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4">
                    <span className="text-gray-400">Dúvidas</span>
                    <div className="flex flex-col gap-2">
                        <Link to={'/questions'} className="hover:text-gray-400 cursor-pointer transition-colors">Termos de uso</Link>
                        <Link to={'/questions'} className="hover:text-gray-400 cursor-pointer transition-colors">Trocas e devoluções</Link>
                        <Link to={'/questions'} className="hover:text-gray-400 cursor-pointer transition-colors">Termos de serviço</Link>
                        <Link to={'/questions'} className="hover:text-gray-400 cursor-pointer transition-colors">Política de reembolso</Link>
                    </div>
                </div>
                <div className="gap-12 lg:hidden flex ">
                    <FacebookLogo size={25} color="#e8e8e8" />
                    <InstagramLogo size={25} color="#e8e8e8" />
                    <EnvelopeSimple size={25} color="#e8e8e8" />
                    <Phone size={25} color="#e8e8e8" />
                    <TwitterLogo size={25} color="#e8e8e8" />
                </div>
            </div>
            <span className="text-center">Powered by <a href="https://github.com/tomazcx" target="_blank" className="hover:border-b">tomazcx</a> </span>

        </ footer>

    )
}