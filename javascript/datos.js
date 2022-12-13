const articulos = [
    {id: 1,
    nombre: 'Blusa terciopelo',
    clasificacion: 'tops',
    tipo: 'Blusa',
    precio: 599,
    descripcion: 'Blusa ajustada de tirante fino y escote pico',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2021-07-26'
    },

    {id: 2,
    nombre: 'Corset lentejuelas',
    clasificacion: 'tops',
    tipo: 'Corset',
    precio: 399,
    descripcion: 'Corset de tirante fino de lentejuelas',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-07-26'
    },

    {id: 3,
    nombre: 'Crop top',
    clasificacion: 'tops',
    tipo: 'Crop',
    precio: 459,
    descripcion: 'Crop top con escote redondo y manga larga',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2021-10-01'
    },

    {id: 4,
    nombre: 'Camiseta lentejuelas',
    clasificacion: 'tops',
    tipo: 'Blusa',
    precio: 399,
    descripcion: 'Blusa de lentejuelas con escote corazón',
    color1: 'negro',
    color2: 'azul',
    fecha: '2021-01-23'
    },

    {id: 5,
    nombre: 'Top cut out',
    clasificacion: 'tops',
    tipo: 'Crop',
    precio: 299,
    descripcion: 'Top con escote redondeado y diseño en tiras en los laterales',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-05-07'
    },

    {id: 6,
    nombre: 'Corset brillo',
    clasificacion: 'tops',
    tipo: 'Corset',
    precio: 459,
    descripcion: 'Corset con escote en triángulo y detalle de tiras en los costados',
    color1: 'negro',
    color2: 'verde',
    descuento: true,
    fecha: '2022-03-15'
    },

    {id: 7,
    nombre: 'Blusa hombros descubiertos',
    clasificacion: 'tops',
    tipo: 'Blusa',
    precio: 299,
    descripcion: 'Blusa cuello de tortuga con hombros descubiertos',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2021-12-30'
    },

    {id: 8,
    nombre: 'Corset satén',
    clasificacion: 'tops',
    tipo: 'Corset',
    precio: 599,
    descripcion: 'Corset  de satén disponible en distintos colores',
    color1: 'negro',
    color2: 'azul',
    fecha: '2021-11-06'
    },

    {id: 9,
    nombre: 'Crop top espalda tiras',
    tipo: 'Crop',
    clasificacion: 'tops',
    precio: 449,
    descripcion: 'Crop top con diseño de tiras en la espalda',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2021-02-20'
    },

    {id: 10,
    nombre: 'Blusa satín',
    clasificacion: 'tops',
    tipo: 'Blusa',
    precio: 549,
    descripcion: 'Blusa satín con escote redondeado y abertura en los laterales',
    color1: 'negro',
    color2: 'verde',
    fecha: '2022-09-18'
    },

    {id: 11,
    nombre: 'Pantalón wide leg',
    clasificacion: 'bottoms',
    tipo: 'De vestir',
    precio: 749,
    descripcion: 'Pantalón de tiro alto y amplio en la parte inferior',
    color1: 'Crema',
    color2: 'blanco',
    descuento: true,
    fecha: '2022-05-08'
    },

    {id: 12,
    nombre: 'Jeans straight',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 399,
    descripcion: 'Jeans corte straight con bolsillos grandes',
    color1: 'azul',
    color2: 'blanco',
    fecha: '2022-01-31'
    },

    {id: 13,
    nombre: 'Pantalón cargo relaxed',
    clasificacion: 'bottoms',
    tipo: 'Cargo',
    precio: 549,
    descripcion: 'Pantalón cargo de pierna ancha, con 6 bolsillos ',
    color1: 'negro',
    color2: 'beige',
    descuento: true,
    fecha: '2022-11-20'
    },

    {id: 14,
    nombre: 'Pantalón de vestir pinzas',
    clasificacion: 'bottoms',
    tipo: 'De vestir',
    precio: 499,
    descripcion: 'Pantalón de tiro alto con cierre y pinzas',
    color1: 'negro',
    color2: 'azul',
    fecha: '2022-06-16'
    },

    {id: 15,
    nombre: 'Pantalón cargo satén',
    clasificacion: 'bottoms',
    tipo: 'Cargo',
    precio: 499,
    descripcion: 'Pantalón cargo de satén',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-10-26'
    },

    {id: 16,
    nombre: 'Mom jeans',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 399,
    descripcion: 'Jeans corte mom fit con pierna relajada',
    color1: 'negro',
    color2: 'azul',
    descuento: true,
    fecha: '2022-08-14'
    },

    {id: 17,
    nombre: 'Pantalón con abertura',
    clasificacion: 'bottoms',
    tipo: 'De vestir',
    precio: 449,
    descripcion: 'Pantalón de vestir con abertura en los tobillos',
    color1: 'negro',
    color2: 'azul',
    fecha: '2022-10-10'
    },

    {id: 18,
    nombre: 'Pantalón cargo straight',
    clasificacion: 'bottoms',
    tipo: 'Cargo',
    precio: 749,
    descripcion: 'Cargo de tiro alto y pierna recta',
    color1: 'cafe',
    color2: 'blanco',
    fecha: '2022-03-19'
    },

    {id: 19,
    nombre: 'Jeans flare',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 349,
    descripcion: 'Jeans con cinco bolsillos, disponible en varios colores',
    color1: 'cafe',
    color2: 'negro',
    descuento: true,
    fecha: '2022-03-07'
    },

    {id: 20,
    nombre: 'Jeans cropped',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 549,
    descripcion: 'Jeans rectos de tiro alto',
    color1: 'azul',
    color2: 'blanco',
    fecha: '2022-08-04'
    },

    {id: 21,
    nombre: 'Tacón con plataforma',
    clasificacion: 'zapatos',
    tipo: 'Tacones',
    precio: 799,
    descripcion: 'Tacón con plataforma disponible en negro',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2022-06-12'
    },

    {id: 22,
    nombre: 'Botines con plataforma',
    clasificacion: 'zapatos',
    tipo: 'Botas',
    precio: 1099,
    descripcion: 'Botines con plataforma, material stretch',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2021-02-21'
    },

    {id: 23,
    nombre: 'Botas altas',
    clasificacion: 'zapatos',
    tipo: 'Botas',
    precio: 1299,
    descripcion: 'Botas disponibles en negro, acordonadas y suela tipo track',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2020-08-16'
    },

    {id: 24,
    nombre: 'Sandalias con plataforma',
    clasificacion: 'zapatos',
    tipo: 'Sandalias',
    precio: 549,
    descripcion: 'Sandalias con plataforma y cierre mediante tiras adherentes',
    color1: 'negro',
    color2: 'crema',
    fecha: '2021-04-22'
    },

    {id: 25,
    nombre: 'Tacones lace up',
    clasificacion: 'zapatos',
    tipo: 'Tacones',
    precio: 749,
    descripcion: 'Tacones con cierre mediante lazo atado al tobillo',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2021-10-30'
    },

    {id: 26,
    nombre: 'Sandalias suela track',
    clasificacion: 'zapatos',
    tipo: 'Sandalias',
    precio: 449,
    descripcion: 'Sandalias con bandas entrelazadas y suela tipo track',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2022-01-08'
    },

    {id: 27,
    nombre: 'Botas track',
    clasificacion: 'zapatos',
    tipo: 'Botas',
    precio: 699,
    descripcion: 'Botines planos con suela tipo track',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-03-18'
    },

    {id: 28,
    nombre: 'Tacón fino',
    clasificacion: 'zapatos',
    tipo: 'Tacones',
    precio: 549,
    descripcion: 'Tacón con punta fina, suela acolchonada, disponible en blanco',
    color1: 'blanco',
    color2: 'azul',
    fecha: '2020-07-26'
    },

    {id: 29,
    nombre: 'Botas acordonadas',
    clasificacion: 'zapatos',
    tipo: 'Botas',
    precio: 899,
    descripcion: 'Botas planas acordonadas, disponibles en negro',
    color1: 'negro',
    color2: 'beige',
    descuento: true,
    fecha: '2022-07-01'
    },

    {id: 30,
    nombre: 'Sandalias planas',
    clasificacion: 'zapatos',
    tipo: 'Sandalias',
    precio: 299,
    descripcion: 'Sandalias planas con suela acolchada',
    color1: 'blanco',
    color2: 'negro',
    fecha: '2022-10-26'
    }
   
        
]



const productosTops = [
    {id: 1,
    nombre: 'Blusa terciopelo',
    tipo: 'Blusa',
    precio: 599,
    descripcion: 'Blusa ajustada de tirante fino y escote pico',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2021-07-26'
    },

    {id: 2,
    nombre: 'Corset lentejuelas',
    tipo: 'Corset',
    precio: 399,
    descripcion: 'Corset de tirante fino de lentejuelas',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-07-26'
    },

    {id: 3,
    nombre: 'Crop top',
    tipo: 'Crop',
    precio: 459,
    descripcion: 'Crop top con escote redondo y manga larga',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2021-10-01'
    },

    {id: 4,
    nombre: 'Camiseta lentejuelas',
    tipo: 'Blusa',
    precio: 399,
    descripcion: 'Blusa de lentejuelas con escote corazón',
    color1: 'negro',
    color2: 'azul',
    fecha: '2021-01-23'
    },

    {id: 5,
    nombre: 'Top cut out',
    tipo: 'Crop',
    precio: 299,
    descripcion: 'Top con escote redondeado y diseño en tiras en los laterales',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-05-07'
    },

    {id: 6,
    nombre: 'Corset brillo',
    tipo: 'Corset',
    precio: 459,
    descripcion: 'Corset con escote en triángulo y detalle de tiras en los costados',
    color1: 'negro',
    color2: 'verde',
    descuento: true,
    fecha: '2022-03-15'
    },

    {id: 7,
    nombre: 'Blusa hombros descubiertos',
    tipo: 'Blusa',
    precio: 299,
    descripcion: 'Blusa cuello de tortuga con hombros descubiertos',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2021-12-30'
    },

    {id: 8,
    nombre: 'Corset satén',
    tipo: 'Corset',
    precio: 599,
    descripcion: 'Corset  de satén disponible en distintos colores',
    color1: 'negro',
    color2: 'azul',
    fecha: '2021-11-06'
    },

    {id: 9,
    nombre: 'Crop top espalda tiras',
    tipo: 'Crop',
    precio: 449,
    descripcion: 'Crop top con diseño de tiras en la espalda',
    color1: 'negro',
    color2: 'blanco',
    descuento: true,
    fecha: '2021-02-20'
    },

    {id: 10,
    nombre: 'Blusa satín',
    tipo: 'Blusa',
    precio: 549,
    descripcion: 'Blusa satín con escote redondeado y abertura en los laterales',
    color1: 'negro',
    color2: 'verde',
    fecha: '2022-09-18'
    }
   
        
]

const productosBottoms = [{id: 11,
    nombre: 'Pantalón wide leg',
    clasificacion: 'bottoms',
    tipo: 'De vestir',
    precio: 749,
    descripcion: 'Pantalón de tiro alto y amplio en la parte inferior',
    color1: 'Crema',
    color2: 'blanco',
    descuento: true,
    fecha: '2022-05-08'
    },

    {id: 12,
    nombre: 'Jeans straight',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 399,
    descripcion: 'Jeans corte straight con bolsillos grandes',
    color1: 'azul',
    color2: 'blanco',
    fecha: '2022-01-31'
    },

    {id: 13,
    nombre: 'Pantalón cargo relaxed',
    clasificacion: 'bottoms',
    tipo: 'Cargo',
    precio: 549,
    descripcion: 'Pantalón cargo de pierna ancha, con 6 bolsillos ',
    color1: 'negro',
    color2: 'beige',
    descuento: true,
    fecha: '2022-11-20'
    },

    {id: 14,
    nombre: 'Pantalón de vestir pinzas',
    clasificacion: 'bottoms',
    tipo: 'De vestir',
    precio: 499,
    descripcion: 'Pantalón de tiro alto con cierre y pinzas',
    color1: 'negro',
    color2: 'azul',
    fecha: '2022-06-16'
    },

    {id: 15,
    nombre: 'Pantalón cargo satén',
    clasificacion: 'bottoms',
    tipo: 'Cargo',
    precio: 499,
    descripcion: 'Pantalón cargo de satén',
    color1: 'negro',
    color2: 'blanco',
    fecha: '2022-10-26'
    },

    {id: 16,
    nombre: 'Mom jeans',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 399,
    descripcion: 'Jeans corte mom fit con pierna relajada',
    color1: 'negro',
    color2: 'azul',
    descuento: true,
    fecha: '2022-08-14'
    },

    {id: 17,
    nombre: 'Pantalón con abertura',
    clasificacion: 'bottoms',
    tipo: 'De vestir',
    precio: 449,
    descripcion: 'Pantalón de vestir con abertura en los tobillos',
    color1: 'negro',
    color2: 'azul',
    fecha: '2022-10-10'
    },

    {id: 18,
    nombre: 'Pantalón cargo straight',
    clasificacion: 'bottoms',
    tipo: 'Cargo',
    precio: 749,
    descripcion: 'Cargo de tiro alto y pierna recta',
    color1: 'cafe',
    color2: 'blanco',
    fecha: '2022-03-19'
    },

    {id: 19,
    nombre: 'Jeans flare',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 349,
    descripcion: 'Jeans con cinco bolsillos, disponible en varios colores',
    color1: 'cafe',
    color2: 'negro',
    descuento: true,
    fecha: '2022-03-07'
    },

    {id: 20,
    nombre: 'Jeans cropped',
    clasificacion: 'bottoms',
    tipo: 'Jeans',
    precio: 549,
    descripcion: 'Jeans rectos de tiro alto',
    color1: 'azul',
    color2: 'blanco',
    fecha: '2022-08-04'
    }   
        
]


const productosZapatos = [
    {id: 21,
        nombre: 'Tacón con plataforma',
        clasificacion: 'zapatos',
        tipo: 'Tacones',
        precio: 799,
        descripcion: 'Tacón con plataforma disponible en negro',
        color1: 'negro',
        color2: 'blanco',
        descuento: true,
        fecha: '2022-06-12'
        },
    
        {id: 22,
        nombre: 'Botines con plataforma',
        clasificacion: 'zapatos',
        tipo: 'Botas',
        precio: 1099,
        descripcion: 'Botines con plataforma, material stretch',
        color1: 'negro',
        color2: 'blanco',
        fecha: '2021-02-21'
        },
    
        {id: 23,
        nombre: 'Botas altas',
        clasificacion: 'zapatos',
        tipo: 'Botas',
        precio: 1299,
        descripcion: 'Botas disponibles en negro, acordonadas y suela tipo track',
        color1: 'negro',
        color2: 'blanco',
        descuento: true,
        fecha: '2020-08-16'
        },
    
        {id: 24,
        nombre: 'Sandalias con plataforma',
        clasificacion: 'zapatos',
        tipo: 'Sandalias',
        precio: 549,
        descripcion: 'Sandalias con plataforma y cierre mediante tiras adherentes',
        color1: 'negro',
        color2: 'crema',
        fecha: '2021-04-22'
        },
    
        {id: 25,
        nombre: 'Tacones lace up',
        clasificacion: 'zapatos',
        tipo: 'Tacones',
        precio: 749,
        descripcion: 'Tacones con cierre mediante lazo atado al tobillo',
        color1: 'negro',
        color2: 'blanco',
        fecha: '2021-10-30'
        },
    
        {id: 26,
        nombre: 'Sandalias suela track',
        clasificacion: 'zapatos',
        tipo: 'Sandalias',
        precio: 449,
        descripcion: 'Sandalias con bandas entrelazadas y suela tipo track',
        color1: 'negro',
        color2: 'blanco',
        descuento: true,
        fecha: '2022-01-08'
        },
    
        {id: 27,
        nombre: 'Botas track',
        clasificacion: 'zapatos',
        tipo: 'Botas',
        precio: 699,
        descripcion: 'Botines planos con suela tipo track',
        color1: 'negro',
        color2: 'blanco',
        fecha: '2022-03-18'
        },
    
        {id: 28,
        nombre: 'Tacón fino',
        clasificacion: 'zapatos',
        tipo: 'Tacones',
        precio: 549,
        descripcion: 'Tacón con punta fina, suela acolchonada, disponible en blanco',
        color1: 'blanco',
        color2: 'azul',
        fecha: '2020-07-26'
        },
    
        {id: 29,
        nombre: 'Botas acordonadas',
        clasificacion: 'zapatos',
        tipo: 'Botas',
        precio: 899,
        descripcion: 'Botas planas acordonadas, disponibles en negro',
        color1: 'negro',
        color2: 'beige',
        descuento: true,
        fecha: '2022-07-01'
        },
    
        {id: 30,
        nombre: 'Sandalias planas',
        clasificacion: 'zapatos',
        tipo: 'Sandalias',
        precio: 299,
        descripcion: 'Sandalias planas con suela acolchada',
        color1: 'blanco',
        color2: 'negro',
        fecha: '2022-10-26'
        }   
        
]
