//Array para wishlist

const wishlist = [];


// OCTAVA FUNCIÓN- Función para eliminar producto de la wishlist

const eliminarProductoWishlist = (productoAEliminar) => {
    wishlist.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoAEliminar){
            wishlist.splice(index, 1)
        } else {
            mostrarWishlist()
        }
    })

    mostrarWishlist()
};


// SEXTA FUNCIÓN- Función para preguntar si queremos seguir agregando más a la wishlist

const agregarMasWishlist = () => {
    let agregarMasArticulos;
    

    agregarMasArticulos = confirm('¿Quieres seguir agregando productos a la wishlist?');

    if (agregarMasArticulos) {
        mostrarTipos ()
        
    } else 
    mostrarWishlist ()
}

// SÉPTIMA FUNCIÓN - Para mostrar los productos en la wishlist 

const mostrarWishlist = () => {
    const listaWishlist = wishlist.map (producto => {
        return '' + producto.nombre 
    });


    const confirmar = confirm('Esta es tu wishlist hasta el momento: '+'\n\n'+listaWishlist.join('\n')+'\n\n Si deseas seguir explorando presiona aceptar, si deseas eliminar algún producto de tu wishlist presiona cancelar')

    if (confirmar) {

        wishlistConfirmada(listaWishlist)


    } else {
        const articuloAEliminar = prompt ('¿Cuál artículo deseas eliminar?')
        eliminarProductoWishlist (articuloAEliminar)
    }

};

// NOVENA FUNCIÓN -Función final para regresar al inicio o en todo caso ya no preguntar más

const wishlistConfirmada = (listaWishlist) => {
    alert ('¡Muy bien, te invitamos a seguir explorando el resto de la página!')
    mostrarTipos ()
}

// QUINTA FUNCIÓN -agregar a la wishlist

const agregarAWishlist = (producto, productoId) => {
    const productoRepetido = wishlist.find(producto => producto.id === productoId);
    if (productoRepetido){
        alert('El producto ya se encuentra en tu wishlist')
        
    } else {
        wishlist.push(producto)
    }

    agregarMasWishlist()
}

// CUARTA FUNCIÓN -función para mostrar los artículos ordenados según la función anterior y seleccionar los productos que queremos agregar a la wishlist

const articulosTopsOrdenadosNovedad = () => {
    let agregarArticulo
    let agregarMasArticulos


    const listaOrdenada = productosTops.map(articulo => {
        return '- ' + articulo.nombre + ' $' +  articulo.precio +' (Disponible en ' + articulo.color1 + ' y '+ articulo.color2 +')'
    })

    do{    
    alert ('Estos son los productos que tenemos disponibles por orden de lanzamiento: ' + '\n\n' + listaOrdenada.join('\n'))
    agregarArticulo = prompt ('¿Qué producto deseas agregar a la wishlist?' + '\n\n' + listaOrdenada.join('\n'))

        const producto = productosTops.find(producto => producto.nombre.toLocaleLowerCase() === agregarArticulo.toLocaleLowerCase())

        if (producto) {
            agregarAWishlist(producto, producto.id)
        } else
        {
            alert('Ups, no podemos encontrar el producto');
            articulosTopsOrdenadosNovedad()
        }

     } while (agregarMasArticulos)
};


const articulosBottomsOrdenadosNovedad = () => {
    let agregarArticulo
    let agregarMasArticulos


    const listaOrdenada = productosBottoms.map(articulo => {
        return '- ' + articulo.nombre + ' $' +  articulo.precio +' (Disponible en ' + articulo.color1 + ' y '+ articulo.color2 +')'
    })

    do{    
    alert ('Estos son los productos que tenemos disponibles por orden de lanzamiento: ' + '\n\n' + listaOrdenada.join('\n'))
    agregarArticulo = prompt ('¿Qué producto deseas agregar a la wishlist?' + '\n\n' + listaOrdenada.join('\n'))

        const producto = productosBottoms.find(producto => producto.nombre.toLocaleLowerCase() === agregarArticulo.toLocaleLowerCase())

        if (producto) {
            agregarAWishlist(producto, producto.id)
        } else
        {
            alert('Ups, no podemos encontrar el producto');
            articulosTopsOrdenadosNovedad()
        }

     } while (agregarMasArticulos)
};


    const articulosZapatosOrdenadosNovedad = () => {
    let agregarArticulo
    let agregarMasArticulos


    const listaOrdenada = productosZapatos.map(articulo => {
        return '- ' + articulo.nombre + ' $' +  articulo.precio +' (Disponible en ' + articulo.color1 + ' y '+ articulo.color2 +')'
    })

    do{    
    alert ('Estos son los productos que tenemos disponibles por orden de lanzamiento: ' + '\n\n' + listaOrdenada.join('\n'))
    agregarArticulo = prompt ('¿Qué producto deseas agregar a la wishlist?' + '\n\n' + listaOrdenada.join('\n'))

        const producto = productosZapatos.find(producto => producto.nombre.toLocaleLowerCase() === agregarArticulo.toLocaleLowerCase())

        if (producto) {
            agregarAWishlist(producto, producto.id)
        } else
        {
            alert('Ups, no podemos encontrar el producto');
            articulosTopsOrdenadosNovedad()
        }
     } while (agregarMasArticulos)
};



//TERCERA FUNCIÓN EN MOSTRARSE -función para ordenar los productos según la fecha de lanzamiento más reciente, en donde uso productosTops, productosBottom y productosZapatos como resultado de filter

const ordenNovedad = () => {
    productosTops.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

    console.log(productosTops)
    articulosTopsOrdenadosNovedad() 
};

const ordenNovedadBottoms = () => {
    productosBottoms.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

    console.log(productosBottoms)
    articulosBottomsOrdenadosNovedad()
};

const ordenNovedadZapatos = () => {
    productosZapatos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

    console.log(productosZapatos)
    articulosZapatosOrdenadosNovedad()
};


// SEGUNDA FUNCIÓN EN MOSTRARSE -mostrando primera función para clasificar 

const mostrarListaDeTops = () => {
    const mostrarLista = articulos.filter(articulo => articulo.clasificacion === 'tops') 
    
    console.log(mostrarLista)
    // filtro en donde aparecen los productos filtrados por tipo
    ordenNovedad()

};

const mostrarListaDeBottoms = () => {
    const mostrarLista = articulos.filter(articulo => articulo.clasificacion === 'bottoms') 
    
    console.log(mostrarLista)
    
    ordenNovedadBottoms()

};

const mostrarListaDeZapatos = () => {
    const mostrarLista = articulos.filter(articulo => articulo.clasificacion === 'zapatos') 
    
    console.log(mostrarLista);
    
    ordenNovedadZapatos()

};


// PRIMERA FUNCIÓN EN MOSTRARSE - Función para mostrar los tipos de artículos //

const mostrarTipos = () => {
    let tipoDeArticulo;
 
    do {

    tipoDeArticulo = prompt ( '¡Bienvenido! Aquí podrás encontrar: ' + ('\n\n') + '- Bottoms' + ('\n') + '- Tops' + ('\n') + '- Zapatos' + ('\n') + '¿Qué tipo de artículo estás buscando?');

    if ((tipoDeArticulo.toLowerCase() === 'tops') || (tipoDeArticulo.toLowerCase() === 'top')) {
        
        mostrarListaDeTops()
        } 
    else if ((tipoDeArticulo.toLowerCase() === 'bottoms')||( tipoDeArticulo.toLowerCase () === 'bottom' )) {
        
        mostrarListaDeBottoms()
    }
    else if ((tipoDeArticulo.toLowerCase() === 'zapatos') ||( tipoDeArticulo.toLowerCase () === 'zapato' )){
        
        mostrarListaDeZapatos()
    } 
    else {
        alert ('Por favor ingresa un nombre válido')
        mostrarTipos()
    } 
    
} while (seguirExplorando);
}

mostrarTipos ()
