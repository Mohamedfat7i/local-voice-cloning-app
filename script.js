document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let modal = document.getElementById('modal');
    let albumContainer = document.getElementById('album-container');
    let closeModal = document.querySelector('.close');

        // Wait for all assets to be loaded
        window.addEventListener('load', function() {
            // Hide the loading screen after everything is loaded
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 10000); // Match the transition duration in CSS
        });

        // Initialize Swiper
        let swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    // Next button functionality
    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    // Previous button functionality
    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });

    const seeMoreBtns = document.querySelectorAll('.see-more');
    seeMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let albumImages = JSON.parse(e.target.getAttribute('data-images'));  // جلب الصور من data attribute
            albumContainer.innerHTML = '';  // تفريغ الحاوية
            albumImages.forEach(imgSrc => {
                let img = document.createElement('img');
                img.src = imgSrc;
                albumContainer.appendChild(img);
            });
            modal.style.display = 'block';  // إظهار النافذة المنبثقة
        });
    });
    
    // إغلاق النافذة
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // إغلاق النافذة عند النقر خارج الصور
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
