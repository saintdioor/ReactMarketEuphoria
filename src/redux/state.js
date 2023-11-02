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
import new_arrival_1 from './../img/new_arrival/image1.png';
import new_arrival_2 from './../img/new_arrival/image2.png';
import new_arrival_3 from './../img/new_arrival/image3.png';
import new_arrival_4 from './../img/new_arrival/image4.png';
import login from './../img/authorization/login.png';
import signup from './../img/authorization/signup.png';
import twitter_logo from './../img/authorization/twitter.png';
import google_logo from './../img/authorization/google.png';
import deal1 from './../img/deals/image1.png';
import deal2 from './../img/deals/image2.png';
import img1 from './../img/saving_zone/img1.png';
import img2 from './../img/saving_zone/img2.png';
import img3 from './../img/saving_zone/img3.png';
import img4 from './../img/saving_zone/img4.png';
import img5 from './../img/saving_zone/img5.png';
import imgCart1 from './../img/cart/img1.png';
import imgCart2 from './../img/cart/img2.png';
import imgCart3 from './../img/cart/img3.png';
import order1 from './../img/orders/img1.png';
import order2 from './../img/orders/img2.png';
import order3 from './../img/orders/img3.png';

let state = {
    order: [
        {
            image: order1
        },
        {
            image: order2
        },
        {
            image: order3
        },
    ],

    cart: [
        {
            image: imgCart1
        },
        {
            image: imgCart2
        },
        {
            image: imgCart3
        }
    ],

    authorization: {
        login: login,
        signup: signup,
        twitter_logo: twitter_logo,
        google_logo: google_logo
    },

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
    ],

    deals: [
        {
            id: 1,
            image: deal1
        },
        {
            id: 2,
            image: deal2
        }
    ],

    saving: [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        }
    ]
}

export default state;