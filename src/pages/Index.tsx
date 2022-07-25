import templateMain1 from '../assets/carousel/bg-img1.jpg'
import templateMain2 from '../assets/carousel/bg-img2.jpg'
import templateMain3 from '../assets/carousel/bg-img3.jpg'
import glass from '../assets/glasses/glass1.jpg'
import sunglass from '../assets/glasses/sunglass1.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from 'classnames'
import { CarouselImg } from '../components/CarouselImg';
import { ProductsMain } from '../components/ProductsMain';
import { useContext, useState } from 'react';
import { Truck, Lock, CalendarBlank } from 'phosphor-react'
import { ModalContext } from '../providers/modal'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {Link} from 'react-router-dom'

export const Index = () => {

    const [sunGlasses, setGlasses] = useState(false)
    const {modal} = useContext(ModalContext)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "w-full",
        accessibility: false
    };

    return (
        <>
        <Header />
        <main className={classNames('w-full', {
            'opacity-50': modal
        })}>
            <Slider {...settings} >
                <CarouselImg template={templateMain1} text='Armações Tecnológicas' textButton='Confira' />
                <CarouselImg template={templateMain2} text='Frete grátis para todo Brasil' textButton='Conheça' />
                <CarouselImg template={templateMain3} text='Novos lançamentos toda semana' textButton='Explore' />
            </Slider>
            <section className='mb-12'>
                <div className='flex flex-col items-center gap-8'>
                    <div className='flex items-center gap-12 w-full justify-center pb-4'>
                        <strong
                            className={classNames('uppercase text-2xl font-normal cursor-pointer', {
                                'border-b border-black': !sunGlasses
                            })}
                            onClick={() => setGlasses(false)}>De grau</strong>

                        <strong className={classNames('uppercase text-2xl font-normal cursor-pointer', {
                            'border-b border-black': sunGlasses
                        })}
                            onClick={() => setGlasses(true)}>De sol</strong>
                    </div>
                    {sunGlasses ? <ProductsMain img={[sunglass, sunglass, sunglass, sunglass]} /> : <ProductsMain img={[glass, glass, glass, glass]} />}
                    <Link to={'/products'} className='text-2xl border-b transition-colors hover:text-gray-700 hover:border-gray-700 py-2 border-black '>Confira todos os produtos</Link>
                </div>

            </section>
            <section className='bg-gray-100 w-full grid grid-cols-1 md:grid-cols-3 text-sm'>
                <div className='flex flex-col items-center py-6 gap-2'>
                    <Truck size={32} color="#000000" />
                    <span className='font-bold uppercase'>Frete grátis para todo Brasil</span>
                </div>
                <div className='flex flex-col items-center py-6 gap-2' >
                    <Lock size={32} color="#000000" />
                    <span className='font-bold uppercase '>Check-out seguro</span>
                </div> 
                <div className='flex flex-col items-center py-6 gap-2' >
                    <CalendarBlank size={32}  color="#000000" />
                    <span className='font-bold uppercase'>Agendar visita loja física</span>
                </div>
            </section>

        </main>
        <Footer />
        </>
        
    )
}