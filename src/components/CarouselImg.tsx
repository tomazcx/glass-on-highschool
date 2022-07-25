import {Link} from 'react-router-dom'

interface CarouselInterface{
    template: string;
    text: string;
    textButton: string;
}

export const CarouselImg = (props: CarouselInterface) => {
    return (
        <div>
            <img src={props.template} alt="Template image" className='object-cover w-full h-[600px]' />
            <div className=' relative bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4'>
                <strong className='font-normal text-white text-2xl'>{props.text}</strong>
                <Link to={'/products'} className='bg-transparent px-8 py-2 border rounded-md text-white hover:bg-black hover:border-black transition-colors'>{props.textButton}</Link>
            </div>

        </div>
    )
}