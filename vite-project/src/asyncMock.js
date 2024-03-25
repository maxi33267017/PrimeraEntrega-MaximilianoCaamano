const products=[
    {
        id:1,
        title: 'Retroexcavadora',
        price: '80000',
        category: 'Maquinarias',
        image: "https://www.deere.com.ar/assets/images/common/products/backhoes/320-p-tier/320p_r4x001825_rrd_large_8e5777641ead248db1c2862c183225ca1c37c4cf.jpg",
    },

    {
        id:2,
        title: 'Excavadora',
        price: '95000',
        category: 'Maquinarias',
        image: "https://www.deere.com.ar/assets/images/common/products/excavators/160g/160glc_excavator_r4x000132_rrd_1366x768_large_803a299d7b1aa056a58a92dc14c65b85b61ce1f7.jpg"
    },
    {
        id:3,
        title: 'Filtro de aire',
        price: '150',
        category: 'Repuestos',
        image: "https://static2.aastatic.com.ar/files/variants/500/8b7a0f87ca9d4900abe468584ad580a7.jpg" 
    },
    {
        id:4,
        title: 'Filtro de aceite',
        price: '105',
        category: 'Repuestos',
        image: "https://m.media-amazon.com/images/I/51e2J3Dq+mL._AC_UF1000,1000_QL80_.jpg" 
    },
]

export const getProducts = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(products);
    }, 2000);
})