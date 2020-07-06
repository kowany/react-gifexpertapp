

export const getGifs = async( category ) => {

    const urlGiphy = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=jib3jyQRkS6zWj5UU0359dEYHmj4D74X`;
    const resp = await fetch( urlGiphy );
    const { data } = await resp.json();

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });
    return gifs;
}