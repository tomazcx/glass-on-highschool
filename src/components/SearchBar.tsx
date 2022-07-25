import {MagnifyingGlass} from 'phosphor-react'

export const SearchBar = () => {
    return (
        <div className="flex-1 flex items-center w-full">
            <MagnifyingGlass size={25} color="#e8e8e8" className='relative left-8' />
            <input type="text" placeholder="Pesquisar" className="w-full rounded pl-12 bg-gray-800 border border-gray-400 py-1.5" />

        </div>
    )
}