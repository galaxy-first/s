/* ============================================================
   ДАННЫЕ: НАУЧНЫЕ РОЛИ
   ============================================================ */
const roles = [
  {
    id: 'engineer',
    icon: '⚙️',
    name: 'Инженер',
    accent: '#00E5FF',
    tagline: 'Создаёт технологии будущего',
    desc: 'Проектирует, конструирует и собирает прикладные решения — от роботов до космических аппаратов.',
    pros: ['Реальный результат в руках', 'Востребованность на рынке', 'Работа с высокими технологиями'],
    cons: ['Долгие циклы разработки', 'Много рутинных расчётов', 'Ответственность за безопасность'],
    fit: 'Технический склад ума, усидчивость, пространственное мышление, интерес к «железу».',
    nofit: 'Тем, кто не любит точные науки и предпочитает гуманитарные сферы.',
    quizTags: ['tech', 'build']
  },
  {
    id: 'analyst',
    icon: '📊',
    name: 'Аналитик',
    accent: '#A8FF3E',
    tagline: 'Находит закономерности в данных',
    desc: 'Обрабатывает большие данные, строит модели и делает выводы, которые помогают принимать решения.',
    pros: ['Высокий доход', 'Работа с IT и AI', 'Гибкий график'],
    cons: ['Монотонность', 'Много времени за компьютером', 'Нужна математическая база'],
    fit: 'Логика, математика, внимание к деталям, умение работать с абстракциями.',
    nofit: 'Тем, кто хочет постоянно общаться с людьми и работать руками.',
    quizTags: ['data', 'logic']
  },
  {
    id: 'experimenter',
    icon: '🧪',
    name: 'Экспериментатор',
    accent: '#EC4899',
    tagline: 'Проверяет гипотезы на практике',
    desc: 'Ставит опыты, собирает данные и делает выводы, основанные на фактах. Работает в лабораториях.',
    pros: ['Драйв открытий', 'Разнообразие задач', 'Реальный вклад в науку'],
    cons: ['Эксперименты могут провалиться', 'Требуется точность', 'Опасные реагенты'],
    fit: 'Любознательность, терпение, аккуратность, готовность к неудачам.',
    nofit: 'Тем, кто боится ошибок и не любит повторяющиеся операции.',
    quizTags: ['lab', 'explore']
  },
  {
    id: 'observer',
    icon: '🔭',
    name: 'Наблюдатель',
    accent: '#8B5CF6',
    tagline: 'Фиксирует изменения в природе',
    desc: 'Регистрирует изменения, ведёт дневники наблюдений и классифицирует данные — от астрономии до экологии.',
    pros: ['Романтика поля и неба', 'Уникальные данные', 'Свободный график'],
    cons: ['Зависимость от погоды', 'Долгое ожидание результатов', 'Требуется усидчивость'],
    fit: 'Терпение, внимательность, любовь к природе, умение замечать детали.',
    nofit: 'Тем, кто хочет быстрых результатов и активного общения.',
    quizTags: ['nature', 'explore']
  },
  {
    id: 'volunteer',
    icon: '🤝',
    name: 'Научный волонтёр',
    accent: '#34D399',
    tagline: 'Помогает учёным собирать данные',
    desc: 'Участвует в исследованиях партнёров проекта, помогает в сборе научных данных по всей стране.',
    pros: ['Вклад в реальную науку', 'Гибкий график', 'Новые знакомства'],
    cons: ['Не всегда виден конечный результат', 'Работа по инструкции', 'Нужна мотивация'],
    fit: 'Ответственность, командный дух, желание помогать, организованность.',
    nofit: 'Тем, кто хочет быть лидером и вести собственный проект.',
    quizTags: ['team', 'nature']
  },
  {
    id: 'first',
    icon: '🚀',
    name: 'Первый',
    accent: '#FF6B6B',
    tagline: 'Изучает историю и мечтает о будущем',
    desc: 'Знакомится с достижениями отечественных учёных, изучает научную фантастику и историю науки.',
    pros: ['Вдохновение', 'Широкий кругозор', 'Связь поколений'],
    cons: ['Меньше практики', 'Нужна самостоятельность', 'Не для всех профилей'],
    fit: 'Интерес к истории, литературе, науке, умение анализировать и мечтать.',
    nofit: 'Тем, кто хочет только практические навыки без теории.',
    quizTags: ['history', 'logic']
  },
  {
    id: 'tester',
    icon: '🔬',
    name: 'Испытатель',
    accent: '#F59E0B',
    tagline: 'Тестирует и проверяет решения',
    desc: 'Выполняет задания, разработанные наставниками проекта: проверяет гипотезы, тестирует прототипы.',
    pros: ['Практические навыки', 'Работа с наставниками', 'Понятные критерии'],
    cons: ['Строгие рамки задачи', 'Ответственность за точность', 'Не всегда творчество'],
    fit: 'Внимательность, дисциплина, техническая грамотность, умение следовать протоколу.',
    nofit: 'Тем, кто хочет полной свободы творчества без ограничений.',
    quizTags: ['tech', 'lab']
  }
];

/* ============================================================
   ДАННЫЕ: ОЛИМПИАДЫ
   ============================================================ */
const olympiads = [
  {
    name: 'Олимпиада «Курчатов»',
    subject: 'Математика',
    subjects: ['Математика'],
    dates: 'Отборочный: 2–16 февраля 2026 · Финал: 14 марта 2026',
    classes: '6–11 класс',
    classTags: ['6-7', '8-9', '10-11'],
    level: '2',
    url: 'https://olimpiadakurchatov.ru',
    icon: '📐'
  },
  {
    name: 'Олимпиада «Курчатов»',
    subject: 'Физика',
    subjects: ['Физика'],
    dates: 'Отборочный: 2–16 февраля 2026 · Финал: 15 марта 2026',
    classes: '7–11 класс',
    classTags: ['8-9', '10-11'],
    level: '2',
    url: 'https://olimpiadakurchatov.ru',
    icon: '⚡'
  },
  {
    name: 'Олимпиада «Физтех»',
    subject: 'Математика / Физика',
    subjects: ['Математика', 'Физика'],
    dates: 'Регистрация: декабрь 2025 — февраль 2026',
    classes: '8–11 класс',
    classTags: ['8-9', '10-11'],
    level: '1',
    url: 'https://olymp.mipt.ru',
    icon: '🧲'
  },
  {
    name: 'Турнир Ломоносова',
    subject: 'Математика, физика, химия, биология',
    subjects: ['Математика', 'Физика', 'Химия', 'Биология'],
    dates: '14 марта 2026',
    classes: '6–11 класс',
    classTags: ['6-7', '8-9', '10-11'],
    level: '2',
    url: 'https://turlom.olimpiada.ru',
    icon: '🏛️'
  },
  {
    name: 'Олимпиада «Бельчонок»',
    subject: 'Математика, физика, биология, химия',
    subjects: ['Математика', 'Физика', 'Химия', 'Биология'],
    dates: 'Февраль 2026 (по предметам)',
    classes: '5–11 класс',
    classTags: ['6-7', '8-9', '10-11'],
    level: '2',
    url: 'https://olimpiada.ru/activity/belchonok',
    icon: '🐿️'
  },
  {
    name: 'Всероссийская олимпиада школьников (ВсОШ)',
    subject: 'Все предметы',
    subjects: ['Физика', 'Химия', 'Биология', 'Математика'],
    dates: 'Школьный этап: сентябрь–октябрь 2026',
    classes: '4–11 класс',
    classTags: ['6-7', '8-9', '10-11'],
    level: '1',
    url: 'https://vos.olimpiada.ru',
    icon: '🏆'
  },
  {
    name: 'Отраслевая олимпиада «Росатом»',
    subject: 'Физика, математика, информатика',
    subjects: ['Физика', 'Математика'],
    dates: 'Отборочный: ноябрь 2025 — январь 2026',
    classes: '7–11 класс',
    classTags: ['8-9', '10-11'],
    level: '1',
    url: 'https://olymp.mephi.ru',
    icon: '⚛️'
  },
  {
    name: 'Олимпиада «Робофест»',
    subject: 'Физика, информатика',
    subjects: ['Физика'],
    dates: 'Региональный: декабрь 2025 — февраль 2026',
    classes: '5–11 класс',
    classTags: ['6-7', '8-9', '10-11'],
    level: '2',
    url: 'https://robo-fest.ru',
    icon: '🤖'
  }
];

/* ============================================================
   ДАННЫЕ: ТЕСТ
   ============================================================ */
const quizQuestions = [
  {
    q: 'Что тебе интереснее делать в свободное время?',
    options: [
      { text: 'Разбирать гаджеты и собирать что-то своими руками', tags: ['tech', 'build'] },
      { text: 'Решать головоломки и анализировать данные', tags: ['data', 'logic'] },
      { text: 'Проводить опыты и наблюдать за природой', tags: ['lab', 'nature', 'explore'] },
      { text: 'Читать о науке и делиться знаниями с другими', tags: ['history', 'team'] }
    ]
  },
  {
    q: 'Какой школьный предмет тебе ближе?',
    options: [
      { text: 'Физика и технология', tags: ['tech', 'build'] },
      { text: 'Математика и информатика', tags: ['data', 'logic'] },
      { text: 'Химия и биология', tags: ['lab', 'nature'] },
      { text: 'История и литература', tags: ['history', 'team'] }
    ]
  },
  {
    q: 'Как ты предпочитаешь работать?',
    options: [
      { text: 'В команде, помогая другим', tags: ['team', 'nature'] },
      { text: 'Самостоятельно, по чёткому плану', tags: ['tech', 'lab'] },
      { text: 'Свободно, исследуя что хочу', tags: ['explore', 'nature'] },
      { text: 'Анализируя данные и строя модели', tags: ['data', 'logic'] }
    ]
  },
  {
    q: 'Что для тебя важнее в работе?',
    options: [
      { text: 'Видеть реальный результат своих усилий', tags: ['build', 'tech'] },
      { text: 'Постоянно учиться и открывать новое', tags: ['explore', 'lab'] },
      { text: 'Помогать людям и приносить пользу', tags: ['team', 'nature'] },
      { text: 'Иметь стабильность и ясные задачи', tags: ['logic', 'history'] }
    ]
  },
  {
    q: 'Как ты относишься к неудачам?',
    options: [
      { text: 'Пробую снова, пока не получится', tags: ['lab', 'build'] },
      { text: 'Анализирую ошибку и меняю подход', tags: ['data', 'logic'] },
      { text: 'Прошу совета у наставника', tags: ['team', 'history'] },
      { text: 'Переключаюсь на другую задачу', tags: ['explore', 'nature'] }
    ]
  }
];

/* ============================================================
   РЕНДЕР КАРТОЧЕК РОЛЕЙ
   ============================================================ */
function renderRoles() {
  const grid = document.getElementById('rolesGrid');
  roles.forEach((role, i) => {
    const card = document.createElement('div');
    card.className = `role-card reveal reveal-delay-${(i % 3) + 1}`;
    card.style.setProperty('--card-accent', role.accent);
    card.dataset.roleId = role.id;

    card.innerHTML = `
      <div class="role-card-inner">
        <div class="role-card-front">
          <span class="role-icon">${role.icon}</span>
          <div class="role-name">${role.name}</div>
          <div class="role-tagline">${role.tagline}</div>
          <div class="role-hint">
            Узнать подробнее
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
        <div class="role-card-back">
          <div class="back-title">${role.icon} ${role.name}</div>
          <div class="back-desc">${role.desc}</div>
          <div class="back-label pros">Плюсы</div>
          <ul class="back-list pros">${role.pros.map(p => `<li>${p}</li>`).join('')}</ul>
          <div class="back-label cons">Минусы</div>
          <ul class="back-list cons">${role.cons.map(c => `<li>${c}</li>`).join('')}</ul>
          <div class="back-label fit">Кому подходит</div>
          <div class="back-fit">${role.fit}</div>
          <div class="back-label nofit">Кому не подходит</div>
          <div class="back-fit">${role.nofit}</div>
          <button class="btn-quiz" data-role-id="${role.id}">🧪 Подходит ли мне?</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Обработчики переворота
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-quiz')) return;
      card.classList.toggle('flipped');
    });
  });

  // Кнопки теста
  document.querySelectorAll('.btn-quiz').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const roleId = btn.dataset.roleId;
      openQuiz(roleId);
    });
  });
}

/* ============================================================
   РЕНДЕР ОЛИМПИАД
   ============================================================ */
function renderOlympiads(subjectFilter = 'all', classFilter = 'all') {
  const grid = document.getElementById('olympiadsGrid');
  grid.innerHTML = '';

  const filtered = olympiads.filter(o => {
    const matchSubject = subjectFilter === 'all' || o.subjects.includes(subjectFilter);
    const matchClass = classFilter === 'all' || o.classTags.includes(classFilter);
    return matchSubject && matchClass;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">😔 По выбранным фильтрам ничего не найдено. Попробуй изменить запрос.</div>';
    return;
  }

  filtered.forEach((o, i) => {
    const card = document.createElement('div');
    card.className = `olympiad-card reveal reveal-delay-${(i % 3) + 1}`;
    card.innerHTML = `
      <span class="olympiad-level level-${o.level}">${o.level} уровень</span>
      <div class="olympiad-subject">${o.icon} ${o.subject}</div>
      <div class="olympiad-name">${o.name}</div>
      <div class="olympiad-meta">
        <div class="olympiad-meta-item">
          <span class="icon">📅</span>
          <span>${o.dates}</span>
        </div>
        <div class="olympiad-meta-item">
          <span class="icon">🎓</span>
          <span>${o.classes}</span>
        </div>
      </div>
      <a href="${o.url}" target="_blank" rel="noopener" class="olympiad-link">
        Официальный сайт
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
      </a>
    `;
    grid.appendChild(card);
  });

  // Активируем анимацию появления для новых карточек
  requestAnimationFrame(() => {
    document.querySelectorAll('.olympiad-card.reveal:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });
  });
}

/* ============================================================
   ФИЛЬТРЫ
   ============================================================ */
let currentSubject = 'all';
let currentClass = 'all';

document.getElementById('subjectFilters').addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('#subjectFilters .filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  currentSubject = e.target.dataset.filter;
  renderOlympiads(currentSubject, currentClass);
});

document.getElementById('classFilters').addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('#classFilters .filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  currentClass = e.target.dataset.filter;
  renderOlympiads(currentSubject, currentClass);
});

/* ============================================================
   ТЕСТ
   ============================================================ */
let quizState = {
  currentQuestion: 0,
  answers: [],
  targetRole: null,
  userTags: []
};

function openQuiz(roleId) {
  const role = roles.find(r => r.id === roleId);
  if (!role) return;
  quizState = {
    currentQuestion: 0,
    answers: [],
    targetRole: role,
    userTags: []
  };
  document.getElementById('quizModal').classList.add('active');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const body = document.getElementById('quizBody');
  const qIndex = quizState.currentQuestion;
  const total = quizQuestions.length;
  const progress = (qIndex / total) * 100;

  if (qIndex >= total) {
    renderQuizResult();
    return;
  }

  const q = quizQuestions[qIndex];
  body.innerHTML = `
    <div class="modal-title">Подходит ли мне роль «${quizState.targetRole.name}»?</div>
    <div class="modal-subtitle">Вопрос ${qIndex + 1} из ${total}</div>
    <div class="quiz-progress">
      <div class="quiz-progress-bar" style="width: ${progress}%"></div>
    </div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.options.map((opt) => `
        <button class="quiz-option" data-tags='${JSON.stringify(opt.tags)}'>${opt.text}</button>
      `).join('')}
    </div>
  `;

  body.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const tags = JSON.parse(btn.dataset.tags);
      quizState.userTags.push(...tags);
      quizState.currentQuestion++;
      renderQuizQuestion();
    });
  });
}

function renderQuizResult() {
  const body = document.getElementById('quizBody');
  const role = quizState.targetRole;

  // Подсчёт совпадений
  const matchCount = quizState.userTags.filter(t => role.quizTags.includes(t)).length;
  const totalTags = quizState.userTags.length || 1;
  const matchPercent = Math.round((matchCount / Math.max(totalTags, role.quizTags.length)) * 100);

  let verdict, emoji, color, extra;
  if (matchPercent >= 50) {
    verdict = 'Отлично подходит!';
    emoji = '🎯';
    color = 'var(--neon-lime)';
    extra = 'Твои интересы и качества хорошо совпадают с этой ролью. Попробуй себя в ней!';
  } else if (matchPercent >= 25) {
    verdict = 'Есть совпадения';
    emoji = '🤔';
    color = 'var(--neon-cyan)';
    extra = 'Некоторые черты подходят, но есть и отличия. Возможно, стоит присмотреться к другим ролям.';
  } else {
    verdict = 'Скорее не твоё';
    emoji = '🧭';
    color = 'var(--neon-pink)';
    extra = 'Эта роль может оказаться не самой комфортной. Попробуй пройти тест для другой роли!';
  }

  body.innerHTML = `
    <div class="quiz-result">
      <span class="quiz-result-icon">${emoji}</span>
      <h4 style="color:${color}">${verdict}</h4>
      <p>${extra}</p>
      <p style="font-size:0.78rem; color: var(--text-muted);">
        Совпадение: <strong style="color:${color}">${matchPercent}%</strong>
      </p>
      <div style="display:flex; gap:10px; margin-top:24px; flex-wrap:wrap; justify-content:center;">
        <button class="btn btn-outline" onclick="resetQuiz()">Пройти заново</button>
        <button class="btn btn-primary" onclick="closeQuiz()">Понятно</button>
      </div>
    </div>
  `;
}

function resetQuiz() {
  quizState.currentQuestion = 0;
  quizState.userTags = [];
  renderQuizQuestion();
}

function closeQuiz() {
  document.getElementById('quizModal').classList.remove('active');
}

document.getElementById('quizClose').addEventListener('click', closeQuiz);
document.getElementById('quizModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeQuiz();
});

/* ============================================================
   ФОРМА
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.classList.add('success');
  this.reset();
  setTimeout(() => status.classList.remove('success'), 5000);
});

/* ============================================================
   АНИМАЦИИ ПРИ СКРОЛЛЕ
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderRoles();
  renderOlympiads();
  initReveal();
});