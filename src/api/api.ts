async function api (query: string, signal?: AbortSignal) {
    const res = await fetch(`https://api.unsplash.com/${query}`, {
        signal,
        headers: {
            'Authorization': `Client-ID dZer_O794FszcFX4LX0QRCl4LTYeDSgQyhM5evx9Iw8`
        }
    })
    return res.json()

}

export async function getPopularImages (page: number, signal?: AbortSignal) {
    return await api(`/photos/?page=${page}&per_page=20&order_by=popular`, signal)
}

export async function getSerachImages (search: string, page: number, signal: AbortSignal) {
    return await api(`/search/photos/?page=${page}&per_page=20&query=${search}`, signal)

}

export async function getSingleImage (id: string, signal?: AbortSignal) {
    return await api(`/photos/${id}`, signal)
}
