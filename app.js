const classes = [7, 8, 9, 10, 11, 12];

const curriculum = {
  7: {
    حساب: {
      lessons: [
        {
          title: "اعداد و عملیات پایه",
          definition: "اعداد، جمع، تفریق، ضرب و تقسیم اساس کار ریاضیات هستند. با یادگیری درست این عملیات، حل مسائل به آسانی انجام می‌شود.",
          explanation: "در صنف هفتم، شاگرد باید بتواند اعداد صحیح، طبیعی، اعشاری و کسرها را درست تشخیص داده و با آنان عملیات انجام دهد. این مهارت پایه برای همهٔ شاخه‌های ریاضی است.",
          examples: [
            "جمع: 24 + 17 = 41",
            "تفریق: 58 - 19 = 39",
            "ضرب: 12 × 8 = 96",
            "تقسیم: 72 ÷ 9 = 8"
          ],
          workbook: 30,
          quiz: [
            "مجموعه اعداد طبیعی چیست؟",
            "کدام عدد از 7 بزرگ‌تر است؟",
            "۲۵ + ۱۵ = ؟",
            "۴ × ۸ = ؟",
            "۷۲ ÷ ۸ = ؟"
          ]
        },
        {
          title: "کسرها و اعشار",
          definition: "کسر نشان‌دهندهٔ بخشی از یک واحد است و اعشار شکل دیگری از کسر است که با نقطه نشان داده می‌شود.",
          explanation: "برای فهم کسرها، باید بتواند صورت و مخرج را تشخیص دهد و در جمع و تفریق کسرها، مخرج‌ها را یکسان کند.",
          examples: [
            "۳/۴ + ۱/۴ = ۱",
            "۲/۵ = 0.4",
            "0.75 = 3/4",
            "1/2 + 1/4 = 3/4"
          ],
          workbook: 30,
          quiz: [
            "۱/۲ + ۱/۲ = ؟",
            "۰.۵ به کسر چه می‌شود؟",
            "۲/۳ + ۱/۳ = ؟",
            "۰.2 + 0.3 = ؟",
            "۱/۴ از ۲۰ چه مقدار است؟"
          ]
        }
      ]
    },
    الجبر: {
      lessons: [
        {
          title: "مقدمه‌ای بر متغیرها",
          definition: "در الج��ر، به جای عددهای نامعلوم از حروف استفاده می‌شود و این حروف متغیر نام دارند.",
          explanation: "برای مثال، x + 5 = 9 به معنی عددی که به 5 جمع شده و حاصل 9 می‌شود. با ساده‌سازی، x = 4 می‌شود.",
          examples: [
            "x + 4 = 10 → x = 6",
            "y - 3 = 5 → y = 8",
            "2a = 14 → a = 7",
            "b/3 = 5 → b = 15"
          ],
          workbook: 30,
          quiz: [
            "x + 5 = 9 → x = ؟",
            "y - 2 = 6 → y = ؟",
            "۳a = 12 → a = ؟",
            "m/5 = 4 → m = ؟",
            "۲x + 1 = 9 → x = ؟"
          ]
        }
      ]
    },
    هندسه: {
      lessons: [
        {
          title: "اشکال هندسی و زاویه‌ها",
          definition: "اشکال هندسی مانند مثلث، مربع، مستطیل و دایره اجزای اصلی هندسه‌اند و زاویه‌ها در آن‌ها نقش مهمی دارند.",
          explanation: "زاویه‌ها به درجه اندازه‌گیری می‌شوند و انواع مختلف دارند مانند حاد، قائمه و منفرجه.",
          examples: [
            "مثلث سه ضلع دارد",
            "مربع چهار زاویهٔ قائمه دارد",
            "دایره مرکز و شعاع دارد",
            "زاویهٔ قائمه 90 درجه است"
          ],
          workbook: 30,
          quiz: [
            "مثلث چند ضلع دارد؟",
            "مربع چند زاویه دارد؟",
            "زاویهٔ قائمه چند درجه است؟",
            "دایره چه شکلی است؟",
            "مستطیل چند ضلع دارد؟"
          ]
        }
      ]
    },
    مثلثات: {
      lessons: [
        {
          title: "مقدمهٔ مثلثات",
          definition: "مثلثات به بررسی ارتباط بین زاویه‌ها و اضلاع مثلث می‌پردازد و در علوم مختلف کاربرد دارد.",
          explanation: "در مثلث قائم‌الزاویه، نسبت‌های سینوس، کسینوس و تانژانت به ما کمک می‌کنند تا ضلع‌ها را پیدا کنیم.",
          examples: [
            "sin 30° = 1/2",
            "cos 60° = 1/2",
            "tan 45° = 1",
            "در مثلث قائم‌الزاویه، ضلع مقابل به زاویه، سینوس را می‌سازد"
          ],
          workbook: 30,
          quiz: [
            "sin 30° = ؟",
            "cos 60° = ؟",
            "tan 45° = ؟",
            "مثلث قائم‌الزاویه چند زاویه قائمه دارد؟",
            "مثلثات به چه چیز می‌پردازد؟"
          ]
        }
      ]
    },
    "ریاضیات عالی": {
      lessons: [
        {
          title: "مقدمه بر حد و پیوستگی",
          definition: "حد به معنی بررسی رفتار یک تابع در نزدیکی یک نقطه است و پیوستگی نشان می‌دهد که تابع در آن نقطه بدون جهش و شکاف تعریف شده باشد.",
          explanation: "در ریاضیات عالی، مفهوم حد پایهٔ مشتق و انتگرال است و به‌طور گسترده در علوم فنی به‌کار می‌رود.",
          examples: [
            "حد x به 2 در تابع x + 3 برابر 5 است",
            "اگر تابع در یک نقطه شکاف نداشته باشد، پیوسته است",
            "حد از دو طرف یک تابع باید برابر باشد",
            "مفهوم حد در فیزیک نیز کاربرد دارد"
          ],
          workbook: 30,
          quiz: [
            "حد یعنی چه؟",
            "پیوستگی یعنی چه؟",
            "تابع در یک نقطه وقتی پیوسته است؟",
            "حد در ریاضیات عالی از چه جهت اهمیت دارد؟",
            "حد در محاسبهٔ مشتق چه نقشی دارد؟"
          ]
        }
      ]
    }
  },
  8: {
    حساب: {
      lessons: [
        {
          title: "اعداد صحیح و کسرها",
          definition: "اعداد صحیح شامل عددهای مثبت، منفی و صفر هستند و کسرها بخشی از واحد را نشان می‌دهند.",
          explanation: "عملیات روی عددهای صحیح و کسرها در حل مسائل مختلف روزمره و علمی به‌کار می‌رود.",
          examples: [
            "-5 + 8 = 3",
            "7 - (-2) = 9",
            "3/4 + 1/4 = 1",
            "-6 ÷ 2 = -3"
          ],
          workbook: 30,
          quiz: [
            "-4 + 7 = ؟",
            "5 - (-3) = ؟",
            "1/3 + 2/3 = ؟",
            "-12 ÷ 3 = ؟",
            "3/5 از 10 = ؟"
          ]
        }
      ]
    },
    الجبر: {
      lessons: [
        {
          title: "جملات جبری",
          definition: "جمله‌های جبری از عددها و متغیرها ساخته می‌شوند و با جمع، تفریق، ضرب و تقسیم به هم وصل می‌شوند.",
          explanation: "ساده‌سازی جمله‌های جبری یکی از مهارت‌های مهم در الجبر است، چون مسائل را کوتاه‌تر و قابل فهم‌تر می‌کند.",
          examples: [
            "3x + 5x = 8x",
            "4a - a = 3a",
            "2(x + 3) = 2x + 6",
            "5m + 2m - m = 6m"
          ],
          workbook: 30,
          quiz: [
            "3x + 5x = ؟",
            "7y - 2y = ؟",
            "2(x + 4) = ؟",
            "a + a + a = ؟",
            "5m - 2m = ؟"
          ]
        }
      ]
    },
    هندسه: {
      lessons: [
        {
          title: "محیط و مساحت",
          definition: "محیط، مجموع طول همهٔ ضلع‌های شکل است و مساحت، مقدار سطح داخل شکل را نشان می‌دهد.",
          explanation: "محیط برای حصارکشی و مساحت برای رنگ‌آمیزی سطح استفاده می‌شود. هر شکل فرمول مخصوص خود را دارد.",
          examples: [
            "محیط مربع = 4 × ضلع",
            "مساحت مستطیل = طول × عرض",
            "مساحت مثلث = (قاعده × ارتفاع) / 2",
            "محیط دایره = 2πr"
          ],
          workbook: 30,
          quiz: [
            "مساحت مستطیل 5×4 = ؟",
            "محیط مربع با ضلع 6 = ؟",
            "مساحت مثلث با قاعده 8 و ارتفاع 5 = ؟",
            "π تقریباً چه عددی است؟",
            "محیط یعنی چه؟"
          ]
        }
      ]
    },
    like: "" 
  }
};

const classLabels = {
  7: "صنف هفتم",
  8: "صنف هشتم",
  9: "صنف نهم",
  10: "صنف دهم",
  11: "صنف یازدهم",
  12: "صنف دوازدهم"
};

const subjectMeta = {
  حساب: { short: "حساب" },
  الجبر: { short: "الجبر" },
  هندسه: { short: "هندسه" },
  مثلثات: { short: "مثلثات" },
  "ریاضیات عالی": { short: "ریاضیات عالی" }
};

const fallbackSubjects = ["حساب", "الجبر", "هندسه", "مثلثات", "ریاضیات عالی"];

const state = {
  selectedClass: 7,
  selectedSubject: "حساب"
};

function getSubjectsForClass(classKey) {
  const gradeSubjects = Object.keys(curriculum[classKey] || {});
  return gradeSubjects.length ? gradeSubjects : fallbackSubjects;
}

function renderClassTabs() {
  const tabWrap = document.getElementById("classTabs");
  tabWrap.innerHTML = classes
    .map(
      (grade) => `
        <button class="class-tab ${state.selectedClass === grade ? "active" : ""}" data-class="${grade}">
          ${classLabels[grade]}
        </button>
      `
    )
    .join("");

  tabWrap.querySelectorAll(".class-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedClass = Number(button.dataset.class);
      const subs = getSubjectsForClass(state.selectedClass);
      state.selectedSubject = subs.includes(state.selectedSubject) ? state.selectedSubject : subs[0];
      render();
    });
  });
}

function renderSubjectGrid() {
  const subjectGrid = document.getElementById("subjectGrid");
  const subjects = getSubjectsForClass(state.selectedClass);
  subjectGrid.innerHTML = subjects
    .map(
      (subject) => `
        <button class="subject-btn ${state.selectedSubject === subject ? "active" : ""}" data-subject="${subject}">
          <span class="title">${subject}</span>
          <span class="subtitle">${subjectMeta[subject]?.short || "درس"}</span>
        </button>
      `
    )
    .join("");

  subjectGrid.querySelectorAll(".subject-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSubject = button.dataset.subject;
      render();
    });
  });
}

function generateWorkbookQuestions(lesson, count = 30) {
  const qList = [];
  const base = [
    "حاصل عبارت زیر را پیدا کن:",
    "در صورت امکان ساده‌سازی کن:",
    "یکی از راه‌های حل زیر را توضیح بده:",
    "مقدار مجهول را حساب کن:",
    "با استفاده از مثال، جواب را بیان کن:",
    "چه تفاوتی بین این دو مفهوم وجود دارد؟",
    "یک مثال واقعی از این مفهوم بنویس:",
    "در یک جمله، تعریف این موضوع را بنویس:",
    "حاصل کار را نشان بده:",
    "مسئله را به زبان ساده حل کن:"
  ];

  for (let i = 1; i <= count; i++) {
    const starter = base[(i - 1) % base.length];
    const questionText = `${starter} ${lesson.title} — سوال ${i}.`;
    qList.push({
      number: i,
      text: questionText,
      answer: "پاسخ مناسب با استفاده از تعریف و مثال درس به‌دست می‌آید."
    });
  }

  return qList;
}

function renderLessonPanel() {
  const panel = document.getElementById("lessonPanel");
  const lessons = curriculum[state.selectedClass]?.[state.selectedSubject]?.lessons || [];

  if (!lessons.length) {
    panel.innerHTML = `<div class="empty-state">برای این صنف و شاخه، درس‌های اولیه هنوز آماده نشده‌اند.</div>`;
    return;
  }

  panel.innerHTML = `<div class="lesson-list">${lessons
    .map(
      (lesson, index) => `
        <article class="lesson-card">
          <div class="lesson-header">
            <div>
              <p class="lesson-tag">عنوان درس ${index + 1}</p>
              <h3 class="lesson-title">${lesson.title}</h3>
            </div>
            <button class="small-btn primary" data-video="${lesson.title}">ویدیو</button>
          </div>

          <div class="course-spotlight">
            <div class="concept-box">
              <h4>تعریف</h4>
              <p>${lesson.definition}</p>
            </div>
            <div class="concept-box">
              <h4>توضیح</h4>
              <p>${lesson.explanation}</p>
            </div>
          </div>

          <div class="example-box">
            <h4>مثال</h4>
            <ul class="example-list">
              ${lesson.examples.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>

          <div class="media-actions">
            <button class="small-btn" data-workbook="${lesson.title}">کاربرگ ۳۰ سوالی</button>
            <button class="small-btn accent" data-quiz="${lesson.title}">بازی آموزشی</button>
            <button class="small-btn ghost" data-print="${lesson.title}">چاپ</button>
          </div>
        </article>
      `
    )
    .join("")}</div>`;

  panel.querySelectorAll("[data-video]").forEach((button) => {
    button.addEventListener("click", () => {
      openModalVideo(button.dataset.video);
    });
  });

  panel.querySelectorAll("[data-workbook]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonTitle = button.dataset.workbook;
      const selectedLesson = lessons.find((item) => item.title === lessonTitle);
      openWorkbook(selectedLesson);
    });
  });

  panel.querySelectorAll("[data-quiz]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonTitle = button.dataset.quiz;
      const selectedLesson = lessons.find((item) => item.title === lessonTitle);
      openQuiz(selectedLesson);
    });
  });

  panel.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonTitle = button.dataset.print;
      const selectedLesson = lessons.find((item) => item.title === lessonTitle);
      printLesson(selectedLesson);
    });
  });
}

function openModalVideo(title) {
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="video-box">
      <h2>ویدیو: ${title}</h2>
      <p>این بخش برای آموزش ویدیویی درس آماده شده است. در نسخهٔ کامل، این ویدیو به‌صورت آفلاین و دانلود‌شده در برنامه قرار می‌گیرد.</p>
      <div class="quiz-card">
        <h4>بخش ویدیو</h4>
        <ul>
          <li>نمایش درس با روش استاد</li>
          <li>توضیح نمونه‌ها و تمرین‌ها</li>
          <li>دسترس‌پذیری آفلاین برای شاگرد</li>
        </ul>
      </div>
    </div>
  `;
  toggleModal(true);
}

function openWorkbook(lesson) {
  const questions = generateWorkbookQuestions(lesson, lesson.workbook || 30);
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="workbook-box">
      <h2>کاربرگ ${lesson.title}</h2>
      <p>تعداد سوالات: ${questions.length} | قابل چاپ و پرنت</p>
      ${questions
        .map(
          (q) => `
            <div class="question-item">
              <strong>سوال ${q.number}:</strong>
              <p>${q.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  toggleModal(true);
}

function openQuiz(lesson) {
  const quizQuestions = (lesson.quiz || []).slice(0, 5).map((q, index) => ({
    number: index + 1,
    question: q,
    choices: [
      "جواب ۱",
      "جواب ۲",
      "جواب ۳",
      "جواب ۴"
    ],
    correct: "جواب ۲"
  }));

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="quiz-box">
      <h2>بازی آموزشی: ${lesson.title}</h2>
      <div class="quiz-score">امتیاز: 0 / ${quizQuestions.length}</div>
      ${quizQuestions
        .map(
          (item) => `
            <div class="quiz-card">
              <h4>سوال ${item.number}</h4>
              <p>${item.question}</p>
              <ul>
                ${item.choices.map((choice) => `<li>${choice}</li>`).join("")}
              </ul>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  toggleModal(true);
}

function printLesson(lesson) {
  const questions = generateWorkbookQuestions(lesson, lesson.workbook || 30);
  const printWindow = window.open("", "_blank", "width=900,height=700");
  printWindow.document.write(`
    <html>
      <head>
        <title>کاربرگ ${lesson.title}</title>
        <style>
          body { font-family: Vazirmatn, Arial, sans-serif; padding: 24px; line-height: 2; color: #111827; }
          h2 { margin-bottom: 12px; }
          .question { padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
          .meta { margin-bottom: 18px; opacity: 0.8; }
        </style>
      </head>
      <body>
        <h2>سیستم آموزشی ریاضیات جلال</h2>
        <div class="meta">درس: ${lesson.title} | تعداد سوالات: ${questions.length}</div>
        ${questions
          .map(
            (question) => `
              <div class="question">
                <strong>سوال ${question.number}:</strong> ${question.text}
              </div>
            `
          )
          .join("")}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 600);
}

function toggleModal(isOpen) {
  const modal = document.getElementById("modal");
  modal.classList.toggle("hidden", !isOpen);
  modal.setAttribute("aria-hidden", String(!isOpen));
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-close]");
  if (trigger) {
    toggleModal(false);
  }
});

function render() {
  renderClassTabs();
  renderSubjectGrid();
  renderLessonPanel();
}

render();
