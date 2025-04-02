/* © 2024 InvestingHelper by Or Malka. All rights reserved. | © 2024 InvestingHelper by Or Malka. כל הזכויות שמורות. */
/*!
 * Copyright (c) 2024 InvestingHelper by Or Malka. All rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
/*!
 * זכויות יוצרים (c) 2024 InvestingHelper מאת אור מלכה. כל הזכויות שמורות.
 * העתקה בלתי מורשית של קובץ זה, בכל אמצעי, אסורה בהחלט.
 * קנייני וסודי.
 */

function setResponsiveImages() {
    const IMAGES = document.querySelectorAll('.responsive-img')
    IMAGES.forEach((img) => {
        if (window.innerWidth >= 768) {
            img.src = img.getAttribute('data-desktop')
        } else {
            img.src = img.getAttribute('data-mobile')

        }
    })
}

setResponsiveImages()
window.addEventListener('resize', setResponsiveImages)


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.scroll-img');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 6 * 4;
        const triggerTop = window.innerHeight / 3;

        images.forEach(img => {
            const imageTop = img.getBoundingClientRect().top;
            const imageBottom = img.getBoundingClientRect().bottom;

            if (imageTop < triggerBottom && imageBottom > triggerTop) {
                img.classList.add('visible');
                // } else {
                //     img.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});