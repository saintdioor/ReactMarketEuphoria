import categories_women_1 from './../img/categories_women/image1.png';
import categories_women_2 from './../img/categories_women/image2.png';
import categories_women_3 from './../img/categories_women/image3.png';
import categories_women_4 from './../img/categories_women/image4.png';
import categories_men_1 from './../img/categories_men/image1.png';
import categories_men_2 from './../img/categories_men/image2.png';
import categories_men_3 from './../img/categories_men/image3.png';
import categories_men_4 from './../img/categories_men/image4.png';
import brands_1 from './../img/brands/brand1.svg';
import brands_2 from './../img/brands/brand2.svg';
import brands_3 from './../img/brands/brand3.svg';
import brands_4 from './../img/brands/brand4.svg';
import brands_5 from './../img/brands/brand5.svg';
import sale_1_1 from './../img/saving_zone/img1_1.png';
import sale_1_2 from './../img/saving_zone/img1_2.png';
import sale_1_3 from './../img/saving_zone/img1_3.png';
import sale_2_1 from './../img/saving_zone/img2_1.png';
import sale_2_2 from './../img/saving_zone/img2_2.png';
import deals_1 from './../img/deals/deals1.png';
import deals_2 from './../img/deals/deals2.png';
import new_arrival_1 from './../img/new_arrival/image1.png';
import new_arrival_2 from './../img/new_arrival/image2.png';
import new_arrival_3 from './../img/new_arrival/image3.png';
import new_arrival_4 from './../img/new_arrival/image4.png';
import cart_image_1 from './../img/cart/image1.png';
import cart_image_2 from './../img/cart/image2.png';
import cart_image_3 from './../img/cart/image3.png';

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
            address: '1/4 Moscow Flats, opp. jain street , near Jain check, road road'
        },
        {
            id: 2,
            name: 'Leonid',
            surname: 'Leonid',
            number: '+79996935191',
            address: 'jain Flats , near Jain street, Moscow road'
        },
        {
            id: 3,
            name: 'Max',
            surname: 'Yaroslav',
            number: '+79912911133',
            address: '1/4 Yaroslav Flats, opp.'
        }
    ],

    cart: [
        {   
            id: 1,
            image: cart_image_1,
            title: 'Blue Flower Print Crop Top',
            color: 'Yellow',
            size: 'M',
            price: 29.00,
            quantity: 1,
            shipping: 'FREE'
        },
        {   
            id: 2,
            image: cart_image_2,
            title: 'Levender Hoodie',
            color: 'Levender',
            size: 'XXL',
            price: 119.00,
            quantity: 1,
            shipping: 'FREE'
        },
        {   
            id: 3,
            image: cart_image_3,
            title: 'Black Sweatshirt',
            color: 'Black',
            size: 'XXL',
            price: 61.00,
            quantity: 2,
            shipping: 5.00
        }
    ],

    men: [
        {
            id: 1,
            name: 'Shirts',
            img: categories_men_1
        },
        {
            id: 2,
            name: 'Printed T-Shirts',
            img: categories_men_2
        },
        {
            id: 3,
            name: 'Plain T-Shirt',
            img: categories_men_3
        },
        {
            id: 4,
            name: 'Polo T-Shirt',
            img: categories_men_4
        }
    ],

    women: [
        {
            id: 1,
            name: 'Hoodies & Sweatshirt',
            img: categories_women_1
        },
        {
            id: 2,
            name: 'Coats & Parkas',
            img: categories_women_2
        },
        {
            id: 3,
            name: 'Tees & T-Shirt',
            img: categories_women_3
        },
        {
            id: 4,
            name: 'Boxers',
            img: categories_women_4
        }
    ],

    brands: [
        {
            id: 1,
            img: brands_1
        },
        {
            id: 2,
            img: brands_2
        },
        {
            id: 3,
            img: brands_3
        },
        {
            id: 4,
            img: brands_4
        },
        {
            id: 5,
            img: brands_5
        },
    ],

    salesLine1: [
        {
            id: 1,
            img: sale_1_1
        },
        {
            id: 2,
            img: sale_1_2
        },
        {
            id: 3,
            img: sale_1_3
        }
    ],

    salesLine2: [
        {
            id: 4,
            img: sale_2_1
        },
        {
            id: 5,
            img: sale_2_2
        },
    ],

    deals: [
        {
            id: 1,
            img: deals_1,
            title: 'Low Price',
            collection: 'High Coziness',
            sale: 'UPTO 50% OFF'
        },
        {
            id: 2,
            img: deals_2,
            title: 'Beyoung Presents',
            collection: 'Breezy Summer Style',
            sale: 'UPTO 50% OFF'
        }
    ],

    newArrival: [
        {
            id: 1,
            img: new_arrival_1,
            title: 'Knitted Joggers'
        },
        {
            id: 2,
            img: new_arrival_2,
            title: 'Full Sleeve'
        },
        {
            id: 3,
            img: new_arrival_3,
            title: 'Active T-Shirts'
        },
        {
            id: 4,
            img: new_arrival_4,
            title: 'Urban Shirts'
        },
        {
            id: 5,
            img: new_arrival_1,
            title: 'Urban Shirts'
        }
    ]
}

export default state;