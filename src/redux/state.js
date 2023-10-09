let state = {
    user: {
        id: 1,
        name: 'Yaroslav',
        surname: 'Vavilkin',
        phone: '+79934466516',
        email: 'vavilkinyaroslav@gmail.com'
    },

    address: [
        {
            id: 1,
            name: 'Yaroslav',
            surname: 'Vavilkin',
            number: '+79934466516',
            address: '1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road'
        },
        {
            id: 2,
            name: 'Leonid',
            surname: 'Azatskii',
            number: '+79996935191',
            address: 'jain derasar , near Jain derasar, Vijaynagar road'
        },
        {
            id: 3,
            name: 'Max',
            surname: 'Opopo',
            number: '+79912911133',
            address: '1/4 Pragatinagar Flats, opp.'
        }
    ],

    cart: [],

    men: [
        {
            id: 1,
            name: 'Shirts',
            img: '*'
        },
        {
            id: 2,
            name: 'Printed T-Shirts',
            img: '*'
        },
        {
            id: 3,
            name: 'Plain T-Shirt',
            img: '*'
        },
        {
            id: 4,
            name: 'Polo T-Shirt',
            img: '*'
        }
    ],

    women: [
        {
            id: 1,
            name: 'Hoodies & Sweetshirt',
            img: '*'
        },
        {
            id: 2,
            name: 'Coats & Parkas',
            img: '*'
        },
        {
            id: 3,
            name: 'Tees & T-Shirt',
            img: '*'
        },
        {
            id: 4,
            name: 'Boxers',
            img: '*'
        }
    ]
}

export default state;