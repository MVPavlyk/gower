const storage = [
    {
        id: 1,
        name: 'Кафе-Бар “У Марти”',
        short_name: 'У Марти',
        address: 'Вул. Степана Бандери 2',
        time: '09:00 - 21:00',
        rating: 5,
        mini_img: 'https://gower.s3.eu-north-1.amazonaws.com/u_marty.png',
        bg_img: 'https://gower.s3.eu-north-1.amazonaws.com/u_martu_bg.png',
        description: [
            {
                desc_p: 'Про ресторан «У марти» у Львові можна сказати словами Оскара Уайльда: «Смак мовчазний». Це твердження справедливе для елітного ресторану , що ідеально вписався в атмосферу вузенької львівської вулички.',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_1.png'
            },
            {
                desc_p: 'Сучасний дизайн, затишна атмосфера, розслабляюча музика  без слів запрошують або навіть спокушають увійти всередину.',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_2.png'
            },
            {
                desc_p: 'Професійність наших кухарів дарує незабутнє враження, бо  після дегустації їхніх страв хочеться повторити цей досвід',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_3.png'
            },
            {
                desc_p: 'Бар нашого ресторану славиться великим асортиментом коктелів, шотів, вин і міцних напоїв. Також, на жаль, знайдуться і безалкогольні',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_4.png'
            }
        ],
        photos: {
            photo_p_1_img: 'https://gower.s3.eu-north-1.amazonaws.com/carousel_photo.png'
        },
        menu: [
            'https://gower.s3.eu-north-1.amazonaws.com/menu1.png',
            'https://gower.s3.eu-north-1.amazonaws.com/menu2.png'
        ],
        halls: [
            {
                number: 1,
                map_bg: 'https://gower.s3.eu-north-1.amazonaws.com/bg_new.svg',
                tables: [
                    {
                        number: 1,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            top: '6.25vw',
                            right: '1.4vw',
                            transform: 'rotate(90deg)'
                        }
                    },
                    {
                        number: 2,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            top: '24.3vw',
                            right: '1.4vw',
                            transform: 'rotate(90deg)'
                        }
                    },

                    {
                        number: 3,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            top: '60vw',
                            right: '1.4vw',
                            transform: 'rotate(90deg)'
                        }
                    },
                    {
                        number: 4,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            right: '17.4vw',
                            top: '3.2vw'
                        }
                    },
                    {
                        number: 5,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            right: '17.4vw',
                            top: '3.2vw'
                        }
                    },
                    {
                        number: 6,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '27vw',
                            top: '5vw',
                            transform: 'rotate(-17deg)'
                        }
                    },

                    {
                        number: 7,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '7vw',
                            top: '12vw',
                            transform: 'rotate(-17deg)'
                        }
                    },

                    {
                        number: 8,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '1.4',
                            top: '32vw',
                            transform: 'rotate(90deg)'
                        }
                    },

                    {
                        number: 9,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '1.4',
                            top: '58vw',
                            transform: 'rotate(90deg)'
                        }
                    }
                ]
            }
        ],
        coordinates: {
            lat: 49.834638,
            lng: 24.019595
        },
        exterior: [
            'https://gower.s3.eu-north-1.amazonaws.com/ext_1.png'
        ]
    },

    {
        id: 2,
        name: 'Ресторан  “Панорама”',
        short_name: 'Панорама',
        address: 'Проспект Свободи 45',
        time: '09:00 - 21:00',
        rating: 3.2,
        mini_img: 'https://gower.s3.eu-north-1.amazonaws.com/panorama_new.png',
        bg_img: 'https://gower.s3.eu-north-1.amazonaws.com/panorama_bg_new.png',
        description: [
            {
                desc_p: 'Про ресторан «Панорама» у Львові можна сказати словами Оскара Уайльда: «Смак мовчазний». Це твердження справедливе для елітного ресторану , що ідеально вписався в атмосферу вузенької львівської вулички.',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_1.png'
            },
            {
                desc_p: 'Сучасний дизайн, затишна атмосфера, розслабляюча музика  без слів запрошують або навіть спокушають увійти всередину.',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_2.png'
            },
            {
                desc_p: 'Професійність наших кухарів дарує незабутнє враження, бо  після дегустації їхніх страв хочеться повторити цей досвід',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_3.png'
            },
            {
                desc_p: 'Бар нашого ресторану славиться великим асортиментом коктелів, шотів, вин і міцних напоїв. Також, на жаль, знайдуться і безалкогольні',
                desc_img: 'https://gower.s3.eu-north-1.amazonaws.com/desc_4.png'
            }
        ],
        photos: {
            photo_p_1_img: 'https://gower.s3.eu-north-1.amazonaws.com/carousel_photo.png'
        },
        menu: [
            'https://gower.s3.eu-north-1.amazonaws.com/menu1.png',
            'https://gower.s3.eu-north-1.amazonaws.com/menu2.png'
        ],
        halls: [
            {
                number: 1,
                map_bg: 'https://gower.s3.eu-north-1.amazonaws.com/bg_new.svg',
                tables: [
                    {
                        number: 1,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            top: '6.25vw',
                            right: '1.4vw',
                            transform: 'rotate(90deg)'
                        }
                    },
                    {
                        number: 2,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            top: '24.3vw',
                            right: '1.4vw',
                            transform: 'rotate(90deg)'
                        }
                    },

                    {
                        number: 3,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            bottom: '12vw',
                            right: '1.4vw',
                            transform: 'rotate(90deg)'
                        }
                    },
                    {
                        number: 4,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            right: '17.4vw',
                            top: '3.2vw'
                        }
                    },
                    {
                        number: 5,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            right: '17.4vw',
                            top: '3.2vw'
                        }
                    },
                    {
                        number: 6,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '27vw',
                            top: '5vw',
                            transform: 'rotate(-17deg)'
                        }
                    },

                    {
                        number: 7,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '7vw',
                            top: '12vw',
                            transform: 'rotate(-17deg)'
                        }
                    },

                    {
                        number: 8,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '1.4',
                            top: '32vw',
                            transform: 'rotate(90deg)'
                        }
                    },

                    {
                        number: 9,
                        type: 'table_6',
                        size: 6,
                        coordinates: {
                            left: '1.4',
                            top: '58vw',
                            transform: 'rotate(90deg)'
                        }
                    }
                ]
            }
        ],
        coordinates: {
            lat: 49.843754,
            lng: 24.025675
        },
        exterior: [
            'https://gower.s3.eu-north-1.amazonaws.com/ext_1.png'
        ]
    }
];

export default storage;