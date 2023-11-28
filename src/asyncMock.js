const products = [
    {
    "id": 1,
    "title": "Samsung Galaxy S23 Plus 5G 512GB",
    "price": 999.999,
    "description": "Si sos un apasionado del gaming, entonces el Galaxy S23 Plus tiene que ser tu próximo celular. Gracias a su procesador Snapdragon 8 y su batería de carga rápida de 4.700 mAh vas a poder pasar horas jugando sin interrupciones",
    "category": "smartphones",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/70011161.webp",
    "rating": 5,
    "rate": 3.9,
    "stock": 120
    },
    {
    "id": 2,
    "title": "Moto G14 128GB",
    "price": 169.999,
    "description": "El Moto G14 trae una pantalla Full HD+ de 6,5 pulgadas que te ofrece una visualización clara y detallada. Con una relación de aspecto de 20:9, disfrutá de más contenido con menos desplazamiento. Además, su diseño Hole-in-Display maximiza el espacio de visualización, mientras que la función de pantalla atenuante cuida tus ojos durante la lectura nocturna.",
    "category": "smartphones",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/70011700.webp",
    "rating": 4,
    "rate": 3.9,
    "stock": 130
    },
    {
    "id": 3,
    "title": "Samsung Galaxy S22 5G 128GB",
    "price": 599.999,
    "description": "La triple cámara con Space Zoom del Samsung S22 te permitirá obtener detalles increíbles en alta calidad. A su vez, si te movés o alguien entra y sale del fotograma, su encuadre automático hará que la cámara permanezca centrada y enfocada.",
    "category": "smartphones",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/70009812.webp",
    "rating": 4,
    "rate": 4.7,
    "stock": 200
    },
    {
    "id": 4,
    "title": "Motorola Edge 40 Pro 5G 256GB",
    "price": 629.999,
    "description": "En una era donde la velocidad y la eficiencia son esenciales, el nuevo Motorola Edge 40 Pro no solo las brinda, sino que redefine lo que estos conceptos significan en un dispositivo móvil.",
    "category": "smartphones",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/70011411.webp",
    "rating": 3,
    "rate": 2.1,
    "stock": 430
    },
    {
    "id": 5,
    "title": "Samsung Galaxy Tab A7 Lite 8.7'' WiFi 32GB",
    "price": 139.999,
    "description": "Disfrutá de tus películas y juegos favoritos en una amplia pantalla de 8,7 pulgadas. Los biseles reducidos ofrecen una mayor relación pantalla-cuerpo sin aumentar el tamaño de la tablet.",
    "category": "tablets",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/7003931.webp",
    "rating": 5,
    "rate": 4.6,
    "stock": 50
    },
    {
    "id": 9,
    "title": "JBL Quantum 400 Auriculares con Cable",
    "price": 99.999,
    "description": "Disfrute de una experiencia totalmente inmersiva con el sonido envolvente personalizado que aporta el software JBL QuantumENGINE para PC. El sistema JBL QuantumSURROUND™ le permite situarse en el centro de la experiencia de juego más atractiva, facilitándole pasar a un nivel superior y derrotar a sus contrincantes. Incorporan también DTS headphone:X v2.0",
    "category": "accesorios",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/7004207.jpg",
    "rating": 5,
    "rate": 3.3,
    "stock": 203
    },
    {
    "id": 10,
    "title": "SanDisk Ultra Memoria MicroSD 64GB",
    "price": 7.199,
    "description": "Cuando tu dispositivo móvil comienza a funcionar más lento o incluso el sistema operativo te indica que te estás quedando sin espacio para sacar fotos o descargar nuevas aplicaciones significa que la memoria de tu celular está llegando a su límite de capacidad",
    "category": "accesorios",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/7001646.jpg",
    "rating": 3,
    "rate": 2.9,
    "stock": 470
    },
    {
    "id": 14,
    "title": "Samsung 49-Inch Curved Gaming Monitor QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "notebooks",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/categorias/widget_gaming.webp",
    "rating": 5,
    "rate": 2.2,
    "stock": 140
    },
    {
    "id": 15,
    "title": "Samsung Cargador de Pared Tipo C 25W",
    "price": 22.999,
    "description": "¿Estás cansado de esperar una eternidad para que tu celular alcance el 100% de batería? Con el cargador de pared Samsung T-C 25W con cable, esas esperas largas quedan en el pasado.",
    "category": "accesorios",
    "img": "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/7005451.webp",
    "rating": 4,
    "rate": 2.6,
    "stock": 235
    }
    ]
    

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 250)
    })
}


export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id == productId))
        }, 250)
    })
}

export const getProductsByCategory = (productCategory)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category == productCategory))
        }, 250)
    })
}