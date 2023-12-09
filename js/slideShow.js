//animation list: card, fade, box3D, glide, flip, slice, pixel

$(document).ready(function () {
    $('.slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        type: 'flip',
        row: 9,
        file: [{
            src: {
                main: "img/hero-01.jpg",
                cover: "img/hero-01.jpg"
            },
            title: 'Multimax',
            desc: 'We help the companies to build products',
            button: {
                text: 'Get started',
                class: 'btn button btn-hover',

            }
        },
        {
            src: {
                main: "img/hero-02.jpg",
                cover: "img/hero-02.jpg"
            },
            title: 'Multimax',
            desc: 'We help the companies to build products',
            button: {
                text: 'Get started',
                class: 'btn button btn-hover',

            }
        },
        {
            src: {
                main: "img/hero-03.jpg",
                cover: "img/hero-03.jpg"
            },
            title: 'Multimax',
            desc: 'We help the companies to build products',
            button: {
                text: 'Get started',
                class: 'btn button btn-hover',

            }
        },
        {
            src: {
                main: "img/hero-04.jpg",
                cover: "img/hero-04.jpg"
            },
            title: 'Multimax',
            desc: 'We help the companies to build products',
            button: {
                text: 'Get started',
                class: 'btn button btn-hover',
            }
        }
        ]

    });
});
