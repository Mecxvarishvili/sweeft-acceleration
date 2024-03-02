import data from "./image.json"
export default async function getImages (query: string, page: number, signal: AbortSignal) {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`, { signal })
    return res.json()
}

// https://api.unsplash.com/photos/?client_id=dZer_O794FszcFX4LX0QRCl4LTYeDSgQyhM5evx9Iw8&page=1&per_page=20&order_by=popular&page=${page}&query=${query}