type Props = {
    handleChange: Function
}

export default function SearchBar ({handleChange}: Props) {

    return (
        <header>
            <input type='searc' id="search" onChange={(e) =>handleChange(e.target.value)} />
        </header>
    )
}