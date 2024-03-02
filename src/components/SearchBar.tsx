import styles from '../styles/searchBar.module.css'

type Props = {
    handleChange: Function
}

export default function SearchBar ({handleChange}: Props) {

    return (
        <header className='search-bar'>
            <input className='search-input' type='search' placeholder="Serach Image"  id="search" onChange={(e) =>handleChange(e.target.value)} />
        </header>
    )
}