

const getImagen = async () => {

    try {
        const apikey = 'LpUDnTEBEOX3bT0liEipskpK32f2d9fY';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        //manejo del error
        console.error(error);
    }


}

getImagen();