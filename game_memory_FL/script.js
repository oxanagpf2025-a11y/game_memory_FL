/**
 * Memory FABERLIC — данные и логика.
 * Раунд 1 из CONTENT.md; раунды 2–3 по TASK.md (темы и карточки).
 */

(function () {
  "use strict";

  const STORAGE_KEY = "faberlic_memory_progress_v1";

  const SCORE_PAIR = 10;
  const SCORE_CORRECT = 5;
  const SCORE_ROUND_BONUS = 10;
  const PAIRS_PER_ROUND = 8;

  const rounds = [
    {
      id: 1,
      title: "Продуктовый мир FABERLIC",
      description: "Проверь знания о продукции и сериях FABERLIC",
      cards: [
        {
          id: "oxygen_cosmetics",
          title: "Кислородная косметика",
          image: "assets/round1/oxygen_cosmetics.png",
          question:
            "С каким направлением у FABERLIC в первую очередь ассоциируется бренд компании?",
          answers: [
            "С кислородной косметикой",
            "Только с парфюмерией",
            "Только с бытовой химией",
            "Только с декоративной косметикой",
          ],
          correctAnswer: 0,
        },
        {
          id: "wellness",
          title: "Wellness",
          image: "assets/round1/wellness.png",
          question: "Что относится к направлению Wellness в FABERLIC?",
          answers: [
            "Продукты для здоровья и баланса",
            "Только лаки для ногтей",
            "Только средства для уборки",
            "Только мужская парфюмерия",
          ],
          correctAnswer: 0,
        },
        {
          id: "iseul",
          title: "iSeul",
          image: "assets/round1/iseul.png",
          question: "С каким направлением связана линейка iSeul?",
          answers: [
            "Очищение и уход за кожей",
            "Автомобильные товары",
            "Украшения",
            "Товары для кухни",
          ],
          correctAnswer: 0,
        },
        {
          id: "glam_team",
          title: "Glam Team",
          image: "assets/round1/glam_team.png",
          question: "Какое направление ближе всего связано с серией Glam Team?",
          answers: [
            "Декоративная косметика и макияж",
            "Средства для стирки",
            "БАДы",
            "Товары для путешествий",
          ],
          correctAnswer: 0,
        },
        {
          id: "oxiology",
          title: "Oxiology",
          image: "assets/round1/oxiology.png",
          question: "С каким назначением чаще всего связывают линейку Oxiology?",
          answers: [
            "Уход за кожей лица",
            "Автоаксессуары",
            "Средства для посуды",
            "Канцтовары",
          ],
          correctAnswer: 0,
        },
        {
          id: "home_care",
          title: "Уход за домом",
          image: "assets/round1/home_care.png",
          question: "Какие товары относятся к категории ухода за домом?",
          answers: [
            "Средства для уборки и чистоты",
            "Только бижутерия",
            "Только женская одежда",
            "Только ароматы",
          ],
          correctAnswer: 0,
        },
        {
          id: "perfume",
          title: "Парфюмерия",
          image: "assets/round1/perfume.png",
          question: "Что включает направление парфюмерии FABERLIC?",
          answers: [
            "Женские, мужские и семейные ароматы",
            "Только шампуни",
            "Только витамины",
            "Только кремы для рук",
          ],
          correctAnswer: 0,
        },
        {
          id: "skincare_series",
          title: "Серии ухода",
          image: "assets/round1/skincare_series.png",
          question: "Что обычно объединяет серии ухода FABERLIC?",
          answers: [
            "Системный подход к ежедневному уходу",
            "Только товары для кухни",
            "Только товары для автомобиля",
            "Только аксессуары",
          ],
          correctAnswer: 0,
        },
      ],
    },
    {
      id: 2,
      title: "История и ценности FABERLIC",
      description: "Факты о компании, ценностях и развитии бренда",
      cards: [
        {
          id: "y1997",
          title: "1997",
          image: "assets/round2/y1997.png",
          question: "Что символизирует для FABERLIC число 1997?",
          answers: [
            "Год основания компании",
            "Год выхода первого каталога на 1000 страниц",
            "Количество стран в присутствии бренда",
            "Внутренний код отдела логистики",
          ],
          correctAnswer: 0,
        },
        {
          id: "nechaev",
          title: "Алексей Нечаев",
          image: "assets/round2/nechaev.png",
          question: "Какую роль в истории FABERLIC чаще всего связывают с Алексеем Нечаевым?",
          answers: [
            "Предприниматель и основатель компании",
            "Главный технолог завода парфюмерии",
            "Автор дизайна первого логотипа каталога",
            "Руководитель службы доставки",
          ],
          correctAnswer: 0,
        },
        {
          id: "brand_name",
          title: "FABERLIC",
          image: "assets/round2/brand.png",
          question: "Как в игре чаще всего описывают FABERLIC как компанию?",
          answers: [
            "Международная компания с собственной продукцией и сообществом консультантов",
            "Только сеть розничных магазинов без каталога",
            "Исключительно онлайн-маркетплейс без производства",
            "Региональный бренд одной страны",
          ],
          correctAnswer: 0,
        },
        {
          id: "production",
          title: "Производство",
          image: "assets/round2/production.png",
          question: "Что важно подчеркнуть про продукцию FABERLIC в контексте «своё производство»?",
          answers: [
            "Собственное производство и контроль качества — часть позиционирования бренда",
            "Вся продукция только закупается у сторонних брендов",
            "Производство не связано с ассортиментом каталога",
            "Продукция выпускается только за рубежом без контроля",
          ],
          correctAnswer: 0,
        },
        {
          id: "slogan_mld",
          title: "Мечтай! Живи! Действуй!",
          image: "assets/round2/slogan.png",
          question: "Какой смысл обычно вкладывают в слоган «Мечтай! Живи! Действуй!»?",
          answers: [
            "Вдохновение на развитие и активную жизнь",
            "Призыв только к спортивным тренировкам",
            "Слоган только для детской линейки",
            "Техническое сообщение для партнёров склада",
          ],
          correctAnswer: 0,
        },
        {
          id: "company",
          title: "Компания",
          image: "assets/round2/company.png",
          question: "Что отражает формулировка «FABERLIC как компания» в обучающих материалах?",
          answers: [
            "Устойчивый бизнес, продукты и развитие партнёрской сети",
            "Только производство упаковки",
            "Только благотворительность без коммерции",
            "Только интернет-сервис без каталога",
          ],
          correctAnswer: 0,
        },
        {
          id: "development",
          title: "Развитие",
          image: "assets/round2/development.png",
          question: "Что обычно относят к «развитию» в FABERLIC?",
          answers: [
            "Рост ассортимента, рынков и возможностей для партнёров",
            "Только уменьшение числа категорий товаров",
            "Отказ от обучения консультантов",
            "Только сокращение производства",
          ],
          correctAnswer: 0,
        },
        {
          id: "values",
          title: "Ценности",
          image: "assets/round2/values.png",
          question: "Зачем в обучении FABERLIC отдельно выделяют блок «ценности»?",
          answers: [
            "Чтобы согласовать поведение бренда и партнёров с миссией компании",
            "Чтобы запомнить только цены из каталога",
            "Чтобы изучить только историю упаковки",
            "Чтобы заменить продуктовое обучение",
          ],
          correctAnswer: 0,
        },
      ],
    },
    {
      id: 3,
      title: "Бизнес с FABERLIC",
      description: "Программы, статусы и инструменты партнёра",
      cards: [
        {
          id: "start_program",
          title: "Стартовая программа",
          image: "assets/round3/start_program.png",
          question: "Для чего предназначена стартовая программа нового партнёра FABERLIC?",
          answers: [
            "Помочь быстро разобраться в первых шагах и инструментах бизнеса",
            "Заменить каталог полностью",
            "Дать только скидку на бытовую химию без обучения",
            "Отключить доступ к личному кабинету",
          ],
          correctAnswer: 0,
        },
        {
          id: "school",
          title: "Школа FABERLIC",
          image: "assets/round3/school.png",
          question: "Что даёт Школа FABERLIC партнёру?",
          answers: [
            "Системное обучение навыкам продаж, продукту и развитию структуры",
            "Только разовый подарок без программы",
            "Только доступ к складу",
            "Только оформление медицинской страховки",
          ],
          correctAnswer: 0,
        },
        {
          id: "nk",
          title: "НК",
          image: "assets/round3/nk.png",
          question: "Что обычно означает аббревиатура «НК» в контексте бизнеса FABERLIC?",
          answers: [
            "Начинающий консультант / стартовый статус в структуре",
            "Налоговый кодекс компании",
            "Номер кредитной карты",
            "Нейтральный каталог без товаров",
          ],
          correctAnswer: 0,
        },
        {
          id: "vip",
          title: "VIP",
          image: "assets/round3/vip.png",
          question: "Какой смысл чаще всего вкладывают в статус VIP в программе FABERLIC?",
          answers: [
            "Повышенные возможности и мотивация для активных партнёров",
            "Статус только для сотрудников офиса без продаж",
            "Отказ от участия в акциях",
            "Работа только офлайн без каталога",
          ],
          correctAnswer: 0,
        },
        {
          id: "millionaires_club",
          title: "Клуб Миллионеров",
          image: "assets/round3/millionaires_club.png",
          question: "Что символизирует «Клуб Миллионеров» в мотивационной линейке FABERLIC?",
          answers: [
            "Сообщество лидеров с высокими результатами и целями",
            "Закрытый клуб только покупателей без регистрации",
            "Программа только для сотрудников завода",
            "Раздел каталога с техникой",
          ],
          correctAnswer: 0,
        },
        {
          id: "faberlic_drive",
          title: "FABERLIC DRIVE",
          image: "assets/round3/faberlic_drive.png",
          question: "С чем чаще всего связывают программу FABERLIC DRIVE?",
          answers: [
            "Мотивационная программа с призами за выполнение условий",
            "Только доставка грузовиками",
            "Только тест-драйв автомобилей завода",
            "Внутренний чат без призов",
          ],
          correctAnswer: 0,
        },
        {
          id: "catalog",
          title: "Каталог",
          image: "assets/round3/catalog.png",
          question: "Какую роль играет каталог FABERLIC в бизнесе консультанта?",
          answers: [
            "Основной инструмент презентации ассортимента и заказов",
            "Только декоративный буклет без цен",
            "Документ только для бухгалтерии",
            "Список только украшений без других категорий",
          ],
          correctAnswer: 0,
        },
        {
          id: "one_million",
          title: "1М",
          image: "assets/round3/one_million.png",
          question: "Что обычно обозначает «1М» в контексте целей и мотивации FABERLIC?",
          answers: [
            "Ориентир по объёму личных продаж или масштабу бизнеса (миллион)",
            "Один менеджер на весь регион",
            "Первый месяц без заказов",
            "Только один миллилитр продукции в подарок",
          ],
          correctAnswer: 0,
        },
      ],
    },
  ];

  /** @returns {ProgressState} */
  function defaultProgress() {
    return {
      version: 1,
      rounds: {
        1: { status: "not_started", score: 0, correctAnswers: 0 },
        2: { status: "not_started", score: 0, correctAnswers: 0 },
        3: { status: "not_started", score: 0, correctAnswers: 0 },
      },
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultProgress();
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.rounds) return defaultProgress();
      const base = defaultProgress();
      for (const k of ["1", "2", "3"]) {
        const rid = Number(k);
        const pr = parsed.rounds[k] || parsed.rounds[rid];
        if (pr && typeof pr === "object") {
          base.rounds[rid] = {
            status: pr.status || "not_started",
            score: typeof pr.score === "number" ? pr.score : 0,
            correctAnswers: typeof pr.correctAnswers === "number" ? pr.correctAnswers : 0,
          };
        }
      }
      return base;
    } catch {
      return defaultProgress();
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* ignore */
    }
  }

  function getRoundDef(id) {
    return rounds.find((r) => r.id === id);
  }

  function hashHue(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h % 360;
  }

  function gradientForCard(cardId) {
    const h1 = hashHue(cardId);
    const h2 = (h1 + 40) % 360;
    return `linear-gradient(145deg, hsl(${h1}, 55%, 38%), hsl(${h2}, 60%, 24%))`;
  }

  /** @type {ProgressState} */
  let progress = loadProgress();

  /** @type {number | null} */
  let activeRoundId = null;

  /** @type {GameSession | null} */
  let session = null;

  /** @type {{ cardDef: CardDef, pairScore: number } | null} */
  let pendingQuestion = null;

  let playAllSequence = false;

  /** @type {number | null} */
  let lastFinishedRoundId = null;

  const els = {
    screens: {
      start: document.getElementById("screen-start"),
      rules: document.getElementById("screen-rules"),
      rounds: document.getElementById("screen-rounds"),
      game: document.getElementById("screen-game"),
      roundResult: document.getElementById("screen-round-result"),
      final: document.getElementById("screen-final"),
    },
    roundCards: document.getElementById("round-cards"),
    board: document.getElementById("board"),
    gameRoundTitle: document.getElementById("game-round-title"),
    gameScore: document.getElementById("game-score"),
    gamePairs: document.getElementById("game-pairs"),
    gameProgressText: document.getElementById("game-progress-text"),
    modal: document.getElementById("modal-question"),
    questionTitle: document.getElementById("question-title"),
    questionText: document.getElementById("question-text"),
    questionAnswers: document.getElementById("question-answers"),
    btnConfirmAnswer: document.getElementById("btn-confirm-answer"),
    questionFeedback: document.getElementById("question-feedback"),
    feedbackStatus: document.getElementById("feedback-status"),
    feedbackCorrect: document.getElementById("feedback-correct"),
    feedbackPoints: document.getElementById("feedback-points"),
    btnQuestionContinue: document.getElementById("btn-question-continue"),
    roundResultName: document.getElementById("round-result-name"),
    roundResultPairs: document.getElementById("round-result-pairs"),
    roundResultCorrect: document.getElementById("round-result-correct"),
    roundResultScore: document.getElementById("round-result-score"),
    roundResultGrade: document.getElementById("round-result-grade"),
    finalPlayerStatus: document.getElementById("final-player-status"),
    finalPairs: document.getElementById("final-pairs"),
    finalCorrect: document.getElementById("final-correct"),
    finalScore: document.getElementById("final-score"),
  };

  function showScreen(name) {
    Object.entries(els.screens).forEach(([key, el]) => {
      if (!el) return;
      const isActive = key === name;
      el.hidden = !isActive;
      el.classList.toggle("screen--active", isActive);
    });
  }

  function statusLabel(status) {
    if (status === "completed") return "пройден";
    if (status === "in_progress") return "в процессе";
    return "не начат";
  }

  function renderRoundSelection() {
    progress = loadProgress();
    els.roundCards.innerHTML = "";
    rounds.forEach((r) => {
      const st = progress.rounds[r.id].status;
      const card = document.createElement("article");
      card.className = "round-card";
      card.innerHTML = `
        <h3 class="round-card__title"></h3>
        <p class="round-card__desc"></p>
        <p class="round-card__status" data-status=""></p>
        <button type="button" class="btn btn--primary js-play-round" data-round-id="${r.id}">Играть</button>
      `;
      card.querySelector(".round-card__title").textContent = r.title;
      card.querySelector(".round-card__desc").textContent = r.description;
      const stEl = card.querySelector(".round-card__status");
      stEl.dataset.status = st;
      stEl.textContent = statusLabel(st);
      els.roundCards.appendChild(card);
    });

    els.roundCards.querySelectorAll(".js-play-round").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-round-id"));
        startRound(id, false);
      });
    });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** @param {number} roundId */
  function buildDeck(roundId) {
    const def = getRoundDef(roundId);
    if (!def || def.cards.length !== PAIRS_PER_ROUND) return [];
    const items = [];
    def.cards.forEach((c, idx) => {
      items.push({ uid: `${c.id}-a`, cardId: c.id, slot: idx });
      items.push({ uid: `${c.id}-b`, cardId: c.id, slot: idx });
    });
    return shuffle(items);
  }

  /** @param {number} roundId */
  function startRound(roundId, fromPlayAll) {
    playAllSequence = fromPlayAll;
    activeRoundId = roundId;
    const def = getRoundDef(roundId);
    if (!def) return;

    progress.rounds[roundId].status = "in_progress";
    saveProgress(progress);

    session = {
      roundId,
      deck: buildDeck(roundId),
      flipped: [],
      matchedCardIds: new Set(),
      score: 0,
      pairsFound: 0,
      correctAnswers: 0,
      usedQuestionIds: new Set(),
      processing: false,
      awaitingQuestion: false,
    };

    els.gameRoundTitle.textContent = def.title;
    updateHud();

    els.board.innerHTML = "";
    session.deck.forEach((item, index) => {
      const cardDef = def.cards.find((c) => c.id === item.cardId);
      const wrap = document.createElement("div");
      wrap.className = "card";
      wrap.setAttribute("role", "gridcell");
      wrap.dataset.index = String(index);
      wrap.innerHTML = `
        <div class="card__inner">
          <div class="card__face card__face--back" aria-hidden="true"></div>
          <div class="card__face card__face--front">
            <img class="card__thumb" alt="" src="${cardDef.image}" />
            <div class="card__label"></div>
          </div>
        </div>
      `;
      const img = wrap.querySelector(".card__thumb");
      const front = wrap.querySelector(".card__face--front");
      front.style.background = gradientForCard(item.cardId);
      img.addEventListener("error", () => {
        img.style.display = "none";
      });
      wrap.querySelector(".card__label").textContent = cardDef.title;
      wrap.addEventListener("click", () => onCardClick(index));
      els.board.appendChild(wrap);
    });

    showScreen("game");
  }

  function updateHud() {
    if (!session) return;
    els.gameScore.textContent = String(session.score);
    els.gamePairs.textContent = `${session.pairsFound} / ${PAIRS_PER_ROUND}`;
    els.gameProgressText.textContent = `${session.pairsFound} / ${PAIRS_PER_ROUND} пар`;
  }

  function setCardFlipped(index, flipped) {
    const row = els.board.querySelector(`[data-index="${index}"]`);
    if (!row) return;
    row.classList.toggle("is-flipped", flipped);
  }

  function setCardMatched(index) {
    const row = els.board.querySelector(`[data-index="${index}"]`);
    if (!row) return;
    row.classList.add("is-matched");
    row.classList.add("card--disabled");
  }

  function onCardClick(index) {
    if (!session || session.processing || session.awaitingQuestion) return;
    const item = session.deck[index];
    if (!item) return;
    if (session.matchedCardIds.has(item.cardId)) return;
    if (session.flipped.includes(index)) return;
    if (session.flipped.length >= 2) return;

    setCardFlipped(index, true);
    session.flipped.push(index);

    if (session.flipped.length < 2) return;

    session.processing = true;
    const [i0, i1] = session.flipped;
    const c0 = session.deck[i0].cardId;
    const c1 = session.deck[i1].cardId;

    if (c0 === c1) {
      session.matchedCardIds.add(c0);
      session.pairsFound += 1;
      session.score += SCORE_PAIR;
      updateHud();

      const def = getRoundDef(session.roundId);
      const cardDef = def.cards.find((c) => c.id === c0);
      pendingQuestion = { cardDef, pairScore: SCORE_PAIR };

      session.flipped = [];
      setCardMatched(i0);
      setCardMatched(i1);

      session.awaitingQuestion = true;
      openQuestionModal(cardDef);
      session.processing = false;
    } else {
      window.setTimeout(() => {
        setCardFlipped(i0, false);
        setCardFlipped(i1, false);
        session.flipped = [];
        session.processing = false;
      }, 750);
    }
  }

  function openQuestionModal(cardDef) {
    els.modal.hidden = false;
    document.body.style.overflow = "hidden";

    els.questionTitle.textContent = "Вопрос после пары";
    els.questionText.textContent = cardDef.question;
    els.questionFeedback.hidden = true;
    els.btnConfirmAnswer.hidden = false;
    els.btnConfirmAnswer.disabled = true;

    els.questionAnswers.innerHTML = "";
    let selected = -1;

    cardDef.answers.forEach((text, i) => {
      const lab = document.createElement("label");
      lab.className = "answer";
      lab.innerHTML = `<input type="radio" name="q" value="${i}" /><span></span>`;
      lab.querySelector("span").textContent = text;
      lab.querySelector("input").addEventListener("change", () => {
        selected = i;
        els.btnConfirmAnswer.disabled = false;
        els.questionAnswers.querySelectorAll(".answer").forEach((a) => a.classList.remove("is-selected"));
        lab.classList.add("is-selected");
      });
      els.questionAnswers.appendChild(lab);
    });

    els.btnConfirmAnswer.onclick = () => {
      if (selected < 0) return;
      const ok = selected === cardDef.correctAnswer;
      if (ok) {
        session.score += SCORE_CORRECT;
        session.correctAnswers += 1;
      }
      session.usedQuestionIds.add(cardDef.id);
      updateHud();

      els.btnConfirmAnswer.hidden = true;
      els.questionFeedback.hidden = false;
      els.feedbackStatus.textContent = ok ? "Правильно!" : "Неправильно";
      els.feedbackStatus.style.color = ok ? "var(--color-success)" : "var(--color-error)";
      els.feedbackCorrect.textContent = `Верный ответ: ${cardDef.answers[cardDef.correctAnswer]}`;
      const pts = ok ? SCORE_CORRECT : 0;
      els.feedbackPoints.textContent = ok
        ? `Начислено +${pts} очков за ответ (всего за шаг: +${SCORE_PAIR + pts})`
        : `За ответ +0 очков. За пару уже начислено +${SCORE_PAIR}.`;

      els.btnQuestionContinue.onclick = () => {
        closeQuestionModal();
        afterQuestionClosed();
      };
    };
  }

  function closeQuestionModal() {
    els.modal.hidden = true;
    document.body.style.overflow = "";
    pendingQuestion = null;
    if (session) {
      session.awaitingQuestion = false;
    }
  }

  function afterQuestionClosed() {
    if (!session) return;
    if (session.pairsFound >= PAIRS_PER_ROUND) {
      session.score += SCORE_ROUND_BONUS;
      updateHud();
      finishRound();
    }
  }

  function roundGrade(correctCount) {
    if (correctCount >= 7) return "Отлично";
    if (correctCount >= 4) return "Хорошо";
    return "Есть что повторить";
  }

  function finishRound() {
    const rid = session.roundId;
    const total = session.score;
    const correct = session.correctAnswers;

    progress.rounds[rid].status = "completed";
    progress.rounds[rid].score = total;
    progress.rounds[rid].correctAnswers = correct;
    saveProgress(progress);

    const def = getRoundDef(rid);
    els.roundResultName.textContent = def.title;
    els.roundResultPairs.textContent = `${PAIRS_PER_ROUND} из ${PAIRS_PER_ROUND}`;
    els.roundResultCorrect.textContent = `${correct} из ${PAIRS_PER_ROUND}`;
    els.roundResultScore.textContent = String(total);
    els.roundResultGrade.textContent = roundGrade(correct);

    session = null;
    activeRoundId = null;
    lastFinishedRoundId = rid;

    const btnNext = document.getElementById("btn-next-round");
    if (rid < 3) {
      btnNext.textContent = "Следующий раунд";
    } else {
      btnNext.textContent = "Итог игры";
    }
    btnNext.hidden = false;

    showScreen("roundResult");
  }

  function showFinalScreen() {
    progress = loadProgress();
    let totalScore = 0;
    let totalCorrect = 0;
    [1, 2, 3].forEach((id) => {
      totalScore += progress.rounds[id].score || 0;
      totalCorrect += progress.rounds[id].correctAnswers || 0;
    });
    const totalPairs = [1, 2, 3].filter((id) => progress.rounds[id].status === "completed").length * PAIRS_PER_ROUND;

    els.finalScore.textContent = String(totalScore);
    els.finalCorrect.textContent = String(totalCorrect);
    els.finalPairs.textContent = `${totalPairs} (макс. ${3 * PAIRS_PER_ROUND})`;

    let statusTitle = "Новичок FABERLIC";
    if (totalScore >= 330) statusTitle = "Знаток FABERLIC";
    else if (totalScore >= 200) statusTitle = "Уверенный консультант";
    els.finalPlayerStatus.textContent = statusTitle;

    showScreen("final");
  }

  function wireUi() {
    document.getElementById("btn-start-game").addEventListener("click", () => {
      renderRoundSelection();
      showScreen("rounds");
    });
    document.getElementById("btn-how-to-play").addEventListener("click", () => showScreen("rules"));
    document.getElementById("btn-select-round-from-start").addEventListener("click", () => {
      renderRoundSelection();
      showScreen("rounds");
    });
    document.getElementById("btn-rules-play").addEventListener("click", () => {
      renderRoundSelection();
      showScreen("rounds");
    });
    document.getElementById("btn-rules-back").addEventListener("click", () => showScreen("start"));
    document.getElementById("btn-rounds-back").addEventListener("click", () => showScreen("start"));
    document.getElementById("btn-play-all-order").addEventListener("click", () => {
      const first = [1, 2, 3].find((id) => progress.rounds[id].status !== "completed") || 1;
      startRound(first, true);
    });

    document.getElementById("btn-game-menu").addEventListener("click", () => {
      session = null;
      activeRoundId = null;
      showScreen("start");
    });
    document.getElementById("btn-game-reset").addEventListener("click", () => {
      if (activeRoundId != null) startRound(activeRoundId, playAllSequence);
    });

    document.getElementById("btn-next-round").addEventListener("click", () => {
      if (lastFinishedRoundId == null) return;
      if (lastFinishedRoundId < 3) {
        startRound(lastFinishedRoundId + 1, playAllSequence);
        return;
      }
      showFinalScreen();
    });

    document.getElementById("btn-replay-round").addEventListener("click", () => {
      if (lastFinishedRoundId != null) startRound(lastFinishedRoundId, playAllSequence);
    });

    document.getElementById("btn-round-result-menu").addEventListener("click", () => showScreen("start"));

    document.getElementById("btn-final-restart").addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      progress = defaultProgress();
      saveProgress(progress);
      renderRoundSelection();
      showScreen("rounds");
    });
    document.getElementById("btn-final-select-round").addEventListener("click", () => {
      renderRoundSelection();
      showScreen("rounds");
    });
    document.getElementById("btn-final-reset-progress").addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      progress = defaultProgress();
      saveProgress(progress);
      showScreen("start");
    });
  }

  wireUi();
  showScreen("start");
})();

/**
 * @typedef {Object} CardDef
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {string} question
 * @property {string[]} answers
 * @property {number} correctAnswer
 */

/**
 * @typedef {Object} RoundDef
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {CardDef[]} cards
 */

/**
 * @typedef {Object} RoundProgress
 * @property {'not_started'|'in_progress'|'completed'} status
 * @property {number} score
 * @property {number} correctAnswers
 */

/**
 * @typedef {Object} ProgressState
 * @property {number} version
 * @property {Record<number, RoundProgress>} rounds
 */

/**
 * @typedef {Object} GameSession
 * @property {number} roundId
 * @property {Array<{ uid: string, cardId: string, slot: number }>} deck
 * @property {number[]} flipped
 * @property {Set<string>} matchedCardIds
 * @property {number} score
 * @property {number} pairsFound
 * @property {number} correctAnswers
 * @property {Set<string>} usedQuestionIds
 * @property {boolean} processing
 * @property {boolean} awaitingQuestion
 */
