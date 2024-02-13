//animation list: card, fade, box3D, glide, flip, slice, pixel

$(document).ready(function () {
    $('.slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        type: 'flip',
        row: 9,
        file: [{
            src: {
                main: "img/max-4.jpg",
                cover: "img/max-4.jpg"
            },
            title: 'Cirix',
            desc: 'Makes your dreams with us ',
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
            title: 'Pioneering Digital Innovation',
            desc: ' Transforming Ideas into Engaging Web Solutions ',
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
            title: 'Responsive Web Design',
            desc: 'Ensuring optimal user experiences across devices',
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
            title: 'Custom Website Development',
            desc: 'Tailored websites that reflect your brand and goals',
            button: {
                text: 'Get started',
                class: 'btn button btn-hover',
            }
        }
        ]

    });
});
