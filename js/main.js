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

const QUESTIONS = [
    {
        question: "start",
        serialNum: 0
    },
    {
        question: "מה הגיל שלך?",
        serialNum: 1,
        num: "1",
        options: [
            "18-30",
            "30-40",
            "40-50",
            "50+"
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "מהו סכום הכסף אותו אתה מתכנן להשקיע בהשקעה ראשונית?",
        serialNum: 2,
        num: "2",
        options: false,
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "מלבד סכום ההשקעה הראשוני, האם בכוונתך להשקיע כל חודש בחודשו סכום כסף חדש?",
        serialNum: 3,
        num: "3",
        options: [
            "כן",
            "לא",
        ],
        hint: false,
        ifAnswered: "כן",
        skip: 2,
    },
    {
        question: "מהו סכום הכסף שאתה צפוי להשקיע באופן חודשי?",
        serialNum: 4,
        num: "3 ב'",
        options: false,
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "האם יש ברשותך קרן ביטחון?",
        serialNum: 5,
        num: "4",
        options: [
            "כן",
            "לא"
        ],
        hint: "קרן ביטחון או קרן חירום זהו כינוי לכסף שאנו שמים בצד לימים קשים. בקרן הביטחון יהיה שימוש רק במצבי חירום ולא ננצל את הכספים בה למטרות פנאי. הכסף של קרן הביטחון יהיה נזיל. גודל קרן הביטחון משתנה בין אדם לאדם ותלוי במספר גורמים שונים.",
        ifAnswered: "כן",
        skip: 3,
    },
    {
        question: "מה הוא סכום הכסף שיש לך בקרן הביטחון?",
        serialNum: 6,
        num: "4 ב'",
        options: [
            "פחות מ5,000 שקלים",
            "5,000 - 10,000 שקלים",
            "10,000-50,000 שקלים",
            "מעל 50,000 שקלים"
        ],
        hint: "קרן ביטחון או קרן חירום זהו כינוי לכסף שאנו שמים בצד לימים קשים. בקרן הביטחון יהיה שימוש רק במצבי חירום ולא ננצל את הכספים בה למטרות פנאי. הכסף של קרן הביטחון יהיה נזיל. גודל קרן הביטחון משתנה בין אדם לאדם ותלוי במספר גורמים שונים.",
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "איפה הכסף נמצא?",
        serialNum: 7,
        num: "4 ג'",
        options: [
            "בעובר ושב בבנק",
            "בפיקדון בבנק",
            "קרן כספית",
            "מניות / מדדי מניות",
            "אחר"
        ],
        hint: "קרן ביטחון או קרן חירום זהו כינוי לכסף שאנו שמים בצד לימים קשים. בקרן הביטחון יהיה שימוש רק במצבי חירום ולא ננצל את הכספים בה למטרות פנאי. הכסף של קרן הביטחון יהיה נזיל. גודל קרן הביטחון משתנה בין אדם לאדם ותלוי במספר גורמים שונים.",
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "מהי מידת הניסיון שלך בהשקעה בשוק ההון ובהכרות איתו?",
        serialNum: 8,
        num: "5",
        options: [
            "כלל אין לי ניסיון",
            "במידה מועטה (עד שנה)",
            "במידה בינונית (1-3 שנים)",
            "במידה גבוהה (מעל 3 שנים)",
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "כשמדובר בהשקעות, הסיכוי לרווח תמיד מלווה בסיכון להפסד, באיזה אופן היית רוצה להשקיע את הכסף שלך?",
        serialNum: 9,
        num: "6",
        options: [
            "סיכון גבוה - פוטנציאל לרווח גבוה",
            "סיכון משמעותי (בינוני) - פוטנציאל לרווח משמעותי",
            "סיכון נמוך - פוטנציאל לרווח נמוך",
        ],
        hint: false,
        ifAnswered: "סיכון גבוה - פוטנציאל לרווח גבוה",
        skip: 2,
    },
    {
        question: "איך אתה מרגיש לגבי השימוש במינוף להשקעה?",
        serialNum: 10,
        num: "6 ב'",
        options: [
            "לא מעוניין בכלל",
            "מעוניין אך לא יותר מידי",
            "מעוניין במידה רבה"
        ],
        hint: "מינוף זהו כלי המאפשר למשקיע להגדיל את החשיפה שלו בשוק מעבר ליכולת ההשקעה הממשית שלו. באמצעות מינוף אנו למעשה יכולים להיות רק עם 2,000$ הון עצמי, אך להשקיע בסכומים גבוהים בצורה משמעותית, לדוגמה ב8,000$. כמובן שהמינוף יכול לבוא לטובתכם במידה ואתם מרוויחים, אך הוא גם יכול לבוא לרעתכם במידה וקורה ההפך. מינוף בדרך כלל מתאים למי שמחפש תשואות גבוהות בצורה בלתי רגילה (כמובן שגם גודל הסיכון יהיה לא רגיל)",
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "תוך כמה זמן אתה צפוי למשוך את כספי ההשקעה שלך או לפחות חלק ניכר מהם?",
        serialNum: 11,
        num: "7",
        options: [
            "פחות מ3 שנים (טווח קצר)",
            "3-10 שנים (טווח בינוני)",
            "מעל 10 שנים (טווח ארוך)",
            "מעל 25 שנים (טווח ארוך מאוד)",
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "באיזו תדירות אתה בודק את תיק ההשקעות שלך או את הקופות שלך (קרן השתלמות,גמל,פנסיה וכו')?",
        serialNum: 12,
        num: "8",
        options: [
            "פעם ביום",
            "פעם בשבוע",
            "פעם בחודש",
            "פעם בכמה חודשים טובים",
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "כשאתה מקבל החלטות פיננסיות, האם אתה מסתמך יותר על ניתוח נתונים, עובדות והיסטוריה או על תחושת הבטן שלך?",
        serialNum: 13,
        num: "9",
        options: [
            "אני מסתמך על ניתוח נתונים, עובדות והיסטוריה",
            "אני סומך על התחושות בטן שלי",
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "מה היית עושה במקרה שסכום ההשקעות שלך היה יורד בשיעור של 20% או יותר תוך תקופה קצרה (חודש בערך)?",
        serialNum: 14,
        num: "10",
        options: [
            "מוכר את כל ההשקעות שלי - זה הזמן לברוח מהשוק",
            "לא עושה שום שינוי בתיק. אני מבין שהתיק בנוי לטווח הארוך גם אם זמנית יש ירידה בשערים, אני מבין שאין לזה משמעות מבחינתי כרגע.",
            "מגדיל/ה את תיק ההשקעות שלי. ירידות הן הזדמנות להשקעה במחירים נמוכים"
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "מה תעשה במקרה שסכום ההשקעות שלך היה מצליח כמצופה או אפילו מעבר למצופה?",
        serialNum: 15,
        num: "11",
        options: [
            "דובק באסטרטגית ההשקעה שלי ולא מבצע שום שינוי",
            "מוכר חלק לא משמעותי מסך ההשקעות שלי",
            "מוכר חלק משמעותי מסך ההשקעות שלי",
            "מוכר את כל ההשקעות שלי באופן מיידי ונהנה מהכסף",
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "לכמה תשואה שנתית אתה מצפה (כאמור, תשואה פוטנציאלית יותר טובה-סיכון יותר גדול)",
        serialNum: 16,
        num: "12",
        options: [
            "0.25%-4%",
            "4%-7%",
            "7%-10%",
            "10%-20%",
            "20%+",

        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "האם יש לך העדפה לשווקים ספציפיים בהשקעות שלך?",
        serialNum: 17,
        num: "13",
        options: [
            "לא. אין לי העדפה",
            "כן, רק שווקים אמריקאים",
            "כן, רק שווקים ישראלים",
            "כן, רק שווקים אמריקאים וישראלים",

        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "האם חשוב לך שהכסף המושקע יהיה נזיל (ברור לי שככל שהכסף נזיל יותר, ככה פוטנציאל הרווח קטן):",
        serialNum: 18,
        num: "14",
        options: [
            "כן",
            "לא כל כך, אולי חלק קטן",
            "לא. אני מבין שבאסטרטגית השקעה ארוכת טווח טובה, הכסף לא יהיה נזיל ויהיה מושפע משינויים קצרי טווח שאין לי שליטה עליהם. אני לא אגע בכסף המושקע אלא בסוף תקופת ההשקעה.",
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "האם אתה עצמאי (יש לך עוסק פטור/מורשה)?",
        serialNum: 19,
        num: "15",
        options: [
            "כן",
            "לא"
        ],
        hint: false,
        ifAnswered: "כן",
        skip: 2,
    },
    {
        question: "האם יש ברשותך קרן השתלמות של עצמאי?",
        serialNum: 20,
        num: "15 ב'",
        options: [
            "כן",
            "לא"
        ],
        hint: false,
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "האם יש לך חשבון מסחר עצמאי באחת מהפלטפורמות המציעות זאת?",
        serialNum: 21,
        num: "16",
        options: [
            "כן, יש לי",
            "לא, אין לי",
        ],
        hint: "חשבון מסחר עצמאי זה למעשה חשבון שבו ניתן לקנות ולמכור ניירות ערך שונים. החברות שמציעות כיום חשבון מסחר עצמאי הם אקסלנס, מיטב דש טרייד עצמאי, אינטרקאטיב ברוקרס ו- IBI.",
        ifAnswered: false,
        skip: 1,
    },
    {
        question: "end",
        serialNum: 22
    }

]

class User {
    constructor() {
        this.name = 'Or Malka';
        this.isMeruba = true;
        this.isHatich = false;
        this.isMadlik = false;
        this.answers = Array(23).fill("unanswered");
        this.answers[0] = "start";
        this.answers[this.answers.length - 1] = "end";
    }
}

class Answer {
    constructor() {
        this.questionSerialNum = ""
        this.questionNum = ""
        this.question = ""
        this.answer = ""
    }
}

let currentUser = new User();
let currentQuestion = 1;
let thisQuestion = {};
let currentResult = '';


function showLoader() {
    document.getElementById('loader').style.display = 'flex';
    console.log(currentQuestion);
    if (currentQuestion === 22) {
        document.querySelector('.final-loader-title').style.display = 'block'
        document.querySelector('.start-loader-title').style.display = 'none'
    }
    else {
        document.querySelector('.final-loader-title').style.display = 'none'
        document.querySelector('.start-loader-title').style.display = 'block'
    }
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function start() {
    const introScreen = document.getElementById('intro')
    const questionnaireScreen = document.getElementById('questionnaire')
    const termsCheckbox = document.getElementById("terms-checkbox");
    const disclaimerCheckbox = document.getElementById("disclaimer-checkbox");
    const loader = document.getElementById('loader');
    // const CONSENT = document.getElementById('consent').checked;
    // const EMAIL = document.getElementById('email').value;




    if (termsCheckbox.checked && disclaimerCheckbox.checked) {
        // if (!CONSENT || !validateEmail(EMAIL)) {
        //     alert('השימוש באפליקציה מותנה בהשארת כתובת דואר אלקטרוני תקינה והסכמה לקבלת תוכן פרסומי ')
        //     return
        // }
        // else {
        //     collectEmail()
        // }
        gtag('event', 'start_questionnaire', {
            'event_category': 'Questionnaire',
            'event_label': 'Started'
        });
        introScreen.style.display = 'none';
        showLoader();

        setTimeout(function () {
            hideLoader();
            questionnaireScreen.style.display = 'block';
        }, Math.random() * (5000 - 4000) + 4000);
    } else {
        alert('בבקשה קרא/י את גילוי הנאות והסכמ/י לתנאי השימוש')
    }
}

function renderQuestion() {
    console.log(currentUser.answers);
    thisQuestion = QUESTIONS[currentQuestion];
    if (currentQuestion < QUESTIONS.length - 1) {
        let htmlContent = `<div id="questions"><div id="question-title"><button id="back-btn" class="back-btn" title="חזר/י אחורה" onclick="prevQuestion()"><img class="back-btn-img" src="images/icons/icons8-arrow-50.png" alt=""></button><h3 dir="rtl">שאלה ${thisQuestion.num}</h3></div><h2 dir="rtl" class="question-title-h2">${thisQuestion.question}</h2>`;
        if (thisQuestion.options) {
            htmlContent += '<div dir="rtl" class="options">';
            for (let i = 0; i < thisQuestion.options.length; i++) {
                htmlContent += `<button class='question-btn' onclick="answerQuestion('${thisQuestion.options[i]}')">${thisQuestion.options[i]}</button>`;
            }
            htmlContent += '</div>';
        } else {
            htmlContent += '<div class="value">';
            htmlContent += '<input dir="rtl" type="number" id="valueInput" placeholder="הכנס ערך במספרים">';
            htmlContent += `<button class="send-btn" onclick="answerQuestion(Number(document.getElementById('valueInput').value))">המשך</button>`;
            htmlContent += '</div>';

        }

        htmlContent += '</div>';

        if (thisQuestion.hint) {
            htmlContent += '<br>';
            htmlContent += '<button class="hint-btn" title="הסבר" onclick="toggleHint()"><img class="hint-btn-img" src="images/icons/icons8-question-50.png" alt=""></button>';
            htmlContent += `<p dir="rtl" class="hint hidden">${thisQuestion.hint}</p>`;
        }

        document.getElementById('questionnaire').innerHTML = htmlContent;

    } else {
        renderResult();
    }
}

function answerQuestion(answer) {

    let currentAnswer = new Answer();
    currentAnswer.questionSerialNum = thisQuestion.questionSerialNum
    currentAnswer.questionNum = thisQuestion.num
    currentAnswer.question = thisQuestion.question
    currentAnswer.answer = answer
    currentUser.answers[currentQuestion] = currentAnswer

    console.log('thisQuestion.ifAnswered :', thisQuestion.ifAnswered)
    console.log('answer', answer)

    if (thisQuestion.ifAnswered === answer) currentQuestion++
    else currentQuestion += thisQuestion.skip


    renderQuestion();
}

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

function renderResult() {
    document.getElementById('questionnaire').style.display = 'none';
    gtag('event', 'finish_questionnaire', {
        'event_category': 'Questionnaire',
        'event_label': 'Finished'
    });
    showLoader();
    setTimeout(function () {
        const noMisharAtzmaiPhotos = document.querySelectorAll('.mishar-atzmai-img');
        const misharAtzmaiPhotos = document.querySelectorAll('.no-mishar-atzmai-img');
        const firstInvestTitles = document.querySelectorAll('.first-invest');
        const monthInvestTitles = document.querySelectorAll('.month-invest');
        console.log(noMisharAtzmaiPhotos);
        console.log(misharAtzmaiPhotos);
        console.log('currentUser.answers', currentUser.answers)
        console.log('QUESTIONS', QUESTIONS)

        if (
            (currentUser.answers[1].answer === QUESTIONS[1].options[0] || currentUser.answers[1].answer === QUESTIONS[1].options[1])
            && currentUser.answers[9].answer === QUESTIONS[9].options[0]
            && currentUser.answers[10].answer === QUESTIONS[10].options[0]
            && (currentUser.answers[11].answer === QUESTIONS[11].options[2] || currentUser.answers[11].answer === QUESTIONS[11].options[3])
            && (currentUser.answers[16].answer === QUESTIONS[16].options[2])
            && (currentUser.answers[17].answer === QUESTIONS[17].options[0] || currentUser.answers[17].answer === QUESTIONS[17].options[1])
            && currentUser.answers[18].answer === QUESTIONS[18].options[2]
            && !((currentUser.answers[12].answer === QUESTIONS[12].options[0]
                || currentUser.answers[12].answer === QUESTIONS[12].options[1]
                || currentUser.answers[12].answer === QUESTIONS[12].options[2])
                && currentUser.answers[13].answer === QUESTIONS[13].options[1]
                && currentUser.answers[14].answer === QUESTIONS[14].options[0]
                && (currentUser.answers[15].answer === QUESTIONS[15].options[2]
                    || currentUser.answers[15].answer === QUESTIONS[15].options[3]))
        ) {
            document.getElementById('snp500-screen').style.display = 'block';
            gtag('event', 'Result:S&P500', {
                'event_category': 'Results',
                'event_label': 'S&P500'
            });
        }

        else if (
            (currentUser.answers[1].answer === QUESTIONS[1].options[0]
                || currentUser.answers[1].answer === QUESTIONS[1].options[1])

            && (currentUser.answers[9].answer === QUESTIONS[9].options[0]
                || currentUser.answers[9].answer === QUESTIONS[9].options[1])

            && (currentUser.answers[10].answer === QUESTIONS[10].options[0]
                || typeof currentUser.answers[10].answer === 'undefined')

            && (currentUser.answers[11].answer === QUESTIONS[11].options[1]
                || currentUser.answers[11].answer === QUESTIONS[11].options[2]
                || currentUser.answers[11].answer === QUESTIONS[11].options[3])

            && (currentUser.answers[16].answer === QUESTIONS[16].options[1]
                || currentUser.answers[16].answer === QUESTIONS[16].options[2])

            && currentUser.answers[17].answer === QUESTIONS[17].options[0]

            && (currentUser.answers[18].answer === QUESTIONS[18].options[1]
                || currentUser.answers[18].answer === QUESTIONS[18].options[2])

            && !((currentUser.answers[12].answer === QUESTIONS[12].options[0]
                || currentUser.answers[12].answer === QUESTIONS[12].options[1])

                && currentUser.answers[13].answer === QUESTIONS[13].options[1]

                && currentUser.answers[14].answer === QUESTIONS[14].options[0]

                && (currentUser.answers[15].answer === QUESTIONS[15].options[2]
                    || currentUser.answers[15].answer === QUESTIONS[15].options[3]))

        ) {
            document.getElementById('acwi-screen').style.display = 'block';
            gtag('event', 'Result:ACWI', {
                'event_category': 'Results',
                'event_label': 'ACWI'
            });
        }

        else if (
            currentUser.answers[1].answer === QUESTIONS[1].options[0]
            && currentUser.answers[8].answer !== QUESTIONS[8].options[0]
            && currentUser.answers[9].answer === QUESTIONS[9].options[0]
            && (currentUser.answers[10].answer === QUESTIONS[10].options[1] || currentUser.answers[10].answer === QUESTIONS[10].options[2])
            && (currentUser.answers[11].answer === QUESTIONS[11].options[2] || currentUser.answers[11].answer === QUESTIONS[11].options[3])
            && currentUser.answers[16].answer === QUESTIONS[16].options[4]
            && (currentUser.answers[17].answer === QUESTIONS[17].options[0] || currentUser.answers[17].answer === QUESTIONS[17].options[1])
            && currentUser.answers[18].answer === QUESTIONS[18].options[2]
            && !((currentUser.answers[12].answer === QUESTIONS[12].options[0]
                || currentUser.answers[12].answer === QUESTIONS[12].options[1]
                || currentUser.answers[12].answer === QUESTIONS[12].options[2])
                && currentUser.answers[13].answer === QUESTIONS[13].options[1]
                && currentUser.answers[14].answer === QUESTIONS[14].options[0]
                && (currentUser.answers[15].answer === QUESTIONS[15].options[2]
                    || currentUser.answers[15].answer === QUESTIONS[15].options[3]))
        ) {
            document.getElementById('snp-memunaf2-screen').style.display = 'block';
            gtag('event', 'Result:S&P500X2', {
                'event_category': 'Results',
                'event_label': 'S&P500X2'
            });
        }

        else if (
            (currentUser.answers[1].answer === QUESTIONS[1].options[0] || currentUser.answers[1].answer === QUESTIONS[1].options[1])
            && currentUser.answers[8].answer !== QUESTIONS[8].options[0]
            && currentUser.answers[9].answer === QUESTIONS[9].options[0]
            && currentUser.answers[10].answer === QUESTIONS[10].options[0]
            && (currentUser.answers[11].answer === QUESTIONS[11].options[2] || currentUser.answers[11].answer === QUESTIONS[11].options[3])
            && currentUser.answers[16].answer === QUESTIONS[16].options[3]
            && (currentUser.answers[17].answer === QUESTIONS[17].options[0] || currentUser.answers[17].answer === QUESTIONS[17].options[1])
            && currentUser.answers[18].answer === QUESTIONS[18].options[2]
            && !((currentUser.answers[12].answer === QUESTIONS[12].options[0]
                || currentUser.answers[12].answer === QUESTIONS[12].options[1]
                || currentUser.answers[12].answer === QUESTIONS[12].options[2])
                && currentUser.answers[13].answer === QUESTIONS[13].options[1]
                && currentUser.answers[14].answer === QUESTIONS[14].options[0]
                && (currentUser.answers[15].answer === QUESTIONS[15].options[2]
                    || currentUser.answers[15].answer === QUESTIONS[15].options[3]))
        ) {
            document.getElementById('nasdaq100-screen').style.display = 'block';
            gtag('event', 'Result:NASDAQ100', {
                'event_category': 'Results',
                'event_label': 'NASDAQ100'
            });
        }

        else {
            document.getElementById('default-screen').style.display = 'block';
            gtag('event', 'Result:Keren-Kaspit', {
                'event_category': 'Results',
                'event_label': 'Keren-Kaspit'
            });
        }

        if (
            (currentUser.answers[5].answer === QUESTIONS[5].options[1])
            ||
            ((currentUser.answers[5].answer === QUESTIONS[5].options[0])
                && (currentUser.answers[6].answer === QUESTIONS[6].options[0]
                    || currentUser.answers[6].answer === QUESTIONS[6].options[1]))
        ) {
            document.getElementById('keren-caspit-screen').style.display = 'block';
        }
        if (
            ((currentUser.answers[5].answer === QUESTIONS[5].options[0])
                && (currentUser.answers[6].answer !== QUESTIONS[6].options[0]
                    || currentUser.answers[6].answer !== QUESTIONS[6].options[1])
                && currentUser.answers[7].answer === QUESTIONS[7].options[1]
                || currentUser.answers[7].answer === QUESTIONS[7].options[3]
                || currentUser.answers[7].answer === QUESTIONS[7].options[4])
        ) {
            document.getElementById('keren-caspit-screen').style.display = 'block';
            document.getElementById('keren-caspit-part-1').style.display = 'none';

        }
        if (
            (currentUser.answers[19].answer === QUESTIONS[19].options[0])
            && (currentUser.answers[20].answer === QUESTIONS[20].options[0])
        ) {
            document.getElementById('atzmai-hishtalmut-screen').style.display = 'block';
        }

        if (
            (currentUser.answers[19].answer === QUESTIONS[19].options[0])
            && (currentUser.answers[20].answer === QUESTIONS[20].options[1])
        ) {
            document.getElementById('atzmai-no-hishtalmut-screen').style.display = 'block';
        }

        if ((currentUser.answers[21].answer === QUESTIONS[21].options[1])) {
            noMisharAtzmaiPhotos.forEach(photo => {
                photo.style.display = 'none';
            });
        } else {
            misharAtzmaiPhotos.forEach(photo => {
                photo.style.display = 'none';
            });
        }
        firstInvestTitles.forEach(title => {
            let investment = currentUser.answers[2].answer;
            if (investment === undefined || isNaN(investment)) {
                investment = 0;
            }
            title.innerText += ` ₪${investment} `;
        });

        monthInvestTitles.forEach(title => {
            let monthlyInvestment = currentUser.answers[4].answer;
            if (monthlyInvestment === undefined || isNaN(monthlyInvestment)) {
                monthlyInvestment = 0;
            }
            title.innerText += ` ₪${monthlyInvestment} `;
        });

        hideLoader();
    }, Math.random() * (7000 - 4000) + 4000);
}


function prevQuestion() {
    const introScreen = document.getElementById('intro')
    const questionnaireScreen = document.getElementById('questionnaire')
    if (currentQuestion <= 1) {
        // alert('This is the first question...');
        introScreen.style.display = 'block';
        questionnaireScreen.style.display = 'none';


    } else {
        let prevIdx = currentQuestion - 1;

        currentUser.answers[currentQuestion] = "unanswered";

        while (prevIdx >= 1 && currentUser.answers[prevIdx] === "unanswered") {
            prevIdx -= 1;
        }

        if (prevIdx <= 0) {
            alert('This is the first question...');
        } else {
            currentQuestion = prevIdx;
            renderQuestion();
        }
    }
}


function calculateEmergencyFund() {
    var income = parseFloat(document.getElementById("income").value);
    var loans = parseFloat(document.getElementById("loans").value);
    if (isNaN(income) || isNaN(loans)) {
        document.getElementById("result").innerText = "אנא הכנס מספרים חוקיים.";
        return;
    }
    var threeMonthsIncome = income * 3;
    var threeMonthsLoans = loans * 3;
    var emergencyFund = threeMonthsIncome + threeMonthsLoans;
    document.getElementById("result").innerText = "סכום קרן הביטחון המומלץ הוא: ₪" + emergencyFund.toLocaleString()
}

function toggleHint() {
    let hint = document.querySelector('.hint')
    if (hint.classList.contains('hidden')) {
        hint.classList.remove('hidden');
    } else {
        hint.classList.add('hidden');
    }
}

document.getElementById('logo-img').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.getElementById('logo-img').addEventListener('mousedown', function (e) {
    e.preventDefault();
});
document.getElementById('logo-img').addEventListener('dragstart', function (e) {
    e.preventDefault();
});
document.getElementById('intro-img').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.getElementById('intro-img').addEventListener('mousedown', function (e) {
    e.preventDefault();
});
document.getElementById('intro-img').addEventListener('dragstart', function (e) {
    e.preventDefault();
});

// disableImageEvents()

// function disableImageEvents() {
//     const images = document.querySelectorAll('img');

//     images.forEach((img) => {
//         // Disable right-click context menu
//         img.addEventListener('dragstart', function (e) {
//             e.preventDefault();
//         });

//         img.addEventListener('mousedown', function (e) {
//             e.preventDefault();
//         });
//         img.addEventListener('contextmenu', function (e) {
//             e.preventDefault();
//         });

//         img.style.pointerEvents = 'none';
//     });
// }

function disableImageEvents() {
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        // Disable dragging
        img.setAttribute('draggable', false);
        img.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });

        // Disable selecting
        img.addEventListener('selectstart', function (e) {
            e.preventDefault();
        });

        // Disable mousedown to prevent default actions
        img.addEventListener('mousedown', function (e) {
            e.preventDefault();
        });

        // Disable right-click context menu
        img.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable all pointer events to make it unclickable
        img.style.pointerEvents = 'none';
    });

    // Prevent dragging the entire page
    document.body.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
}

// Call the function to disable image events
disableImageEvents();



function openPopup(event, popupId) {
    event.preventDefault();
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById(popupId).style.display = 'none';
}


function collectEmail() {
    const EMAIL = document.getElementById('email').value;
    const apiKey = '';
    const listId = '';
    const dc = ''; // e.g., us19, us1
    console.log(EMAIL);
    fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/`, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('anystring:' + apiKey),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email_address: EMAIL,
            status: 'subscribed'
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'subscribed') {
                alert('You have been subscribed!');
            } else {
                alert('There was an error. Please try again.');
            }
        })
        .catch(error => console.error('THIS IS BAD Error:', error));
}

function validateEmail(email) {
    if (email.length > 8 && email.includes('@')) {
        return true;
    }
    else return false;
}



// Initial render
renderQuestion();