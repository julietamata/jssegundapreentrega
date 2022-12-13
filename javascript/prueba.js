//funciones extras



//función para ordenar los productos según la fecha de lanzamiento menos reciente

const ordenAntiguedad = () => {
    articulos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())

    console.log(articulos)
    articulosOrdenadosAntiguedad()
};


//función para ordenar el precio de mayor a menor

const ordenPrecioMayoraMenor = () => {
    articulos.sort((a, b) => b.precio - a.precio)

    console.log(articulos)
    articulosOrdenadosPorPrecio()
};

//función para ordenar el precio de menor a mayor

const ordenPrecioMenoraMayor = () => {
    articulos.sort((a, b) => a.precio - b.precio)

    console.log(articulos)
    articulosOrdenadosPorPrecio()
};


// función para mostrar los artículos ordenados según su fecha de lanzamiento más antigua

const articulosOrdenadosAntiguedad = () => {
    const listaOrdenada = articulos.map (articulo => {
        return '- ' + articulo.nombre + ' $' +  articulo.precio +' (Disponible en ' + articulo.color1 + ' y '+ articulo.color2 +')'
    })

    alert ('Conoce los productos que no pasan de moda: ' + '\n\n' + listaOrdenada.join('\n'))
    agregarWishlist(listaOrdenada)
};


// función para mostrar los artículos ordenados según su precio, ya sea de mayor a menor o de menor a mayor

const articulosOrdenadosPorPrecio = () => {
    const listaOrdenada = articulos.map (articulo => {
        return '- ' + articulo.nombre + ' $' +  articulo.precio +' (Disponible en ' + articulo.color1 + ' y '+ articulo.color2 +')'
    })

    alert ('Estilos que no te puedes perder: ' + '\n\n' + listaOrdenada.join('\n'))
    agregarWishlist(listaOrdenada)
};

