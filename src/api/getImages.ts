export default async function getImages () {
    const res = await fetch("https://api.unsplash.com/photos/?client_id=dZer_O794FszcFX4LX0QRCl4LTYeDSgQyhM5evx9Iw8&page=1&per_page=20&order_by=popular")
    return res.json()
}