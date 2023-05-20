/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
    Autoplay,
    Pagination,
    Navigation
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation,
Scrollbar, FreeMode, Grid
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.navigate__slider', { // Указываем скласс нужного слайдера
            observer: true,
            observeParents: true,
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            allowTouchMove: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                425: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                '@1.50': {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });

        new Swiper('.best__slider', { // Указываем скласс нужного слайдера
            modules: [Pagination],
            slidesPerView: 1,
            autoHeight: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                740: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            },
        });
        new Swiper('.recommendations__slider', { // Указываем скласс нужного слайдера
            modules: [Pagination],
            slidesPerView: 1,
            autoHeight: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                740: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
        });
        new Swiper('.doctors__slider', { // Указываем скласс нужного слайдера
            modules: [Pagination],
            slidesPerView: 1,
            autoHeight: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                740: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            },
        });
        new Swiper('.news__slider', { // Указываем скласс нужного слайдера
            modules: [Pagination],
            slidesPerView: 'auto',
            autoHeight: false,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                740: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                }
            },
        });
        new Swiper('.congratulations__slider', { // Указываем скласс нужного слайдера
            modules: [Pagination],
            slidesPerView: 2.5,
            autoHeight: false,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                740: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                }
            },
        });
    }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}

window.addEventListener("load", function(e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});