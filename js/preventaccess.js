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

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C'))) {
        event.preventDefault();
    }
});