const A = "assets/";
const source = (n) => A + n + ".jpeg";
const img = (n, alt, cls = "") =>
  `<img class="${cls}" src="${source(n)}" alt="${alt}">`;
const nav = `<a href="#home">Главная</a><a href="#about">О студии</a><a href="#projects/services">Услуги</a><a href="#projects">Проекты</a><a href="#contacts">Контакты</a>`;
const founder = `<section class="founder wrap"><h2>Познакомьтесь с<br>основателем студии</h2><div class="founder-grid">${img("about-7", "Шумафова Сульета Энверовна")}<div><h3>Шумафова Сульета<br>Энверовна</h3><p>Выпускник Архитекторы.рф 2022, бывший главный архитектор города Майкопа, архитектор со стажем более 15 лет.</p><p>В нашей команде вы найдете: талантливых архитекторов, ландшафтных архитекторов, лучших конструкторов и инженеров.</p></div></div></section>`;
const services = [
  "Архитектурное проектирование домов и коттеджей: изучаем участок, рельеф и инсоляцию, разрабатываем индивидуальную концепцию и проектные решения.",
  "Полный комплект проектной документации для строительства: архитектурные, конструктивные и инженерные разделы — по задаче и составу проекта.",
  "Дизайн интерьеров квартир и частных домов: планировка, 3D-визуализация, подбор отделочных материалов, мебели и освещения.",
  "Планировочные решения и перепланировки квартир и коммерческих помещений: продумываем пространство и готовим документацию для согласования.",
  "Авторский надзор и сопровождение строительства: помогаем сверять ход работ с проектом и своевременно решать возникающие вопросы.",
  "Проектирование общественных зданий и многоквартирных жилых комплексов.",
  "Проекты планировки и межевания территорий, комплексное развитие участков.",
  "Благоустройство: проекты парков, скверов, набережных и общественных пространств.",
  "Геодезические работы, инженерные изыскания и подготовка технических заключений.",
  "Подготовка разрешительной документации для объектов капитального строительства.",
  "Ландшафтный дизайн и проекты организации территории вокруг дома.",
  "Проекты перевода помещений из жилого фонда в нежилой и обратно.",
];
function consult() {
  return `<section class="consult" id="consult"><div class="wrap"><h2>Обсудим ваш<br>проект</h2><form><h2>Получите расчёт<br>стоимости проекта</h2><label for="name">Ваше имя</label><input id="name" name="name" autocomplete="name" required placeholder="Имя"><label for="phone">Телефон</label><input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="32" aria-describedby="phone-hint phone-error" placeholder="+7 (999) 123-45-67"><p id="phone-hint" class="input-hint">Номер РФ: можно ввести 10 цифр или вставить номер с +7 / 8.</p><p id="phone-error" class="input-error" aria-live="polite"></p><p class="form-note">Оставьте заявку — обсудим задачу, состав работ и сроки. Кнопка откроет почтовую программу с текстом заявки. <a href="./politika_obrabotki_Suliet_Shumafova.pdf" target="_blank" rel="noopener">Политика конфиденциальности</a></p>
  <button class="button" type="submit">Получить расчёт стоимости</button>
  <p role="status" class="form-status"></p>
  </form></div><a class="new-project" href="mailto:suli@inbox.ru">Обсудить проект</a></section>`;
}
function footer() {
  return `<footer class="wrap"><a class="brand" href="#home">Suliet Shumafova</a><nav aria-label="Навигация в подвале">${nav}</nav><div class="footer-bottom"><span>Сайт разработан uilianna</span><div class="social"><a href="https://www.instagram.com/archisuliko/" aria-label="Instagram">${img("contacts-1", "")}</a><a href="https://wa.me/79182272079" aria-label="WhatsApp">${img("contacts-0", "")}</a></div><a href="tel:+79182272079">+7-918-227-20-79</a></div><p class="footer-legal"><a href="./politika_obrabotki_Suliet_Shumafova.pdf" target="_blank" rel="noopener">Политика конфиденциальности</a></p></footer>`;
}
function lightboxMarkup() {
  return `<dialog class="lightbox" aria-label="Фотографии проекта"><button class="lightbox-close" aria-label="Закрыть просмотр">Закрыть ×</button><img id="lightbox-image" alt=""><div class="lightbox-bottom"><button class="lightbox-prev" aria-label="Предыдущий ракурс">Назад</button><p id="lightbox-caption"></p><button class="lightbox-next" aria-label="Следующий ракурс">Далее</button></div></dialog>`;
}
function featuredCard(i) {
  const [n, t, c] = portfolioItems[i];
  return `<article class="featured-card"><button class="featured-image" data-image="${i}" aria-label="Посмотреть фотографии: ${t}">${img(n, t)}</button><div class="featured-caption"><h3>${t}</h3><span>${c}</span></div></article>`;
}
const home =
  () => `<section class="hero hero-v2">${img("home-16", "Архитектурный проект студии — здание среди деревьев")}<div class="hero-content"><p class="eyebrow">Архитектурное бюро в Майкопе · Работаем по Югу России</p><h1>Проектирование домов и дизайн интерьеров в Майкопе</h1><div class="hero-bottom"><a class="button" href="#home/consult">Рассчитать стоимость проекта</a><p>Полный цикл: от архитектурной концепции до документации и сопровождения строительства.</p></div></div><a class="hero-scroll" href="#home/introduction">Подробнее о студии ↓</a></section>
<section class="manifesto paper" id="introduction"><div class="wrap"><p class="eyebrow">01 / Почему выбирают нас</p><div class="manifesto-grid"><h2>Проект дома<br>в Майкопе —<br><em>под ключ.</em></h2><div><p class="lead">Создаём пространства, где функциональность встречается с эстетикой. Работаем по всему Югу России, офис студии находится в Майкопе.</p><p>Полный цикл — от идеи до проектной документации. Помогаем координировать подрядчиков и сопровождать стройку, заранее согласуем этапы и сроки, готовим понятные отчёты. Учитываем климат и особенности застройки Юга России.</p><a href="#home/consult" class="text-link">Получить расчёт стоимости</a></div></div><div class="manifesto-foot"><span>Полный цикл · Координация подрядчиков · Прозрачные этапы</span><span>Офис в Майкопе</span></div></div></section>
<section class="selected wrap"><div class="section-head"><div><p class="eyebrow">02 / Портфолио</p><h2>Реализованные идеи<br>и архитектурные <em>проекты.</em></h2></div><p>Частные дома, общественные здания<br>и благоустройство территорий.</p></div><div class="featured-grid">${[12, 4, 6, 1, 5, 2].map(featuredCard).join("")}</div><div class="collection-footer"><p>Примеры архитектурных решений.<br>Нажмите на фотографию, чтобы увидеть больше.</p><a href="#projects" class="text-link light">Посмотреть портфолио</a></div></section>
<section class="image-statement">${img("about-4", "Терраса дома с аркой и видом на природу")}<div><p class="eyebrow">Наш подход</p><h2>Между домом<br>и природой —<br><em>никаких границ.</em></h2></div></section>
<section class="directions paper"><div class="wrap"><div class="section-head"><div><p class="eyebrow">03 / Услуги архитектурного бюро</p><h2>От проекта дома<br>до готового <em>пространства.</em></h2></div><a class="text-link" href="#projects/services">Все услуги студии</a></div><div class="direction-list">${[
    [
      "01",
      "Проектирование домов и коттеджей",
      "Индивидуальный архитектурный проект дома с учётом участка и ваших задач.",
      "f-49",
    ],
    [
      "02",
      "Дизайн интерьеров",
      "Планировочные решения, 3D-визуализация и подбор материалов для квартир и домов.",
      "f-11",
    ],
    [
      "03",
      "Сопровождение строительства",
      "Авторский надзор, помощь в координации подрядчиков и решения по ходу работ.",
      "about-5",
    ],
  ]
    .map(
      ([n, t, d, photo]) =>
        `<a href="#projects/services"><span class="direction-index">${n}</span><div><h3>${t}</h3><p>${d}</p></div>${img(photo, t)}</a>`,
    )
    .join("")}</div></div></section>
<section class="founder-editorial wrap"><div class="founder-copy"><p class="eyebrow">04 / О студии</p><h2>Архитектурное бюро<br>в <em>Майкопе.</em></h2><p class="founder-name">Сульета Шумафова</p><p>Архитектор со стажем более 15 лет, выпускник Архитекторы.рф 2022, бывший главный архитектор города Майкопа.</p><p>Команда архитекторов и инженеров работает над проектами домов, общественных зданий и территорий. Работаем по Майкопу и всему Югу России.</p><a class="text-link light" href="#about">Команда и опыт студии</a></div>${img("about-7", "Сульета Шумафова, основатель архитектурной студии")}</section>
<section class="experience-strip"><div class="wrap"><p class="eyebrow">Опыт, который становится архитектурой</p><div>${[
    ["354", "проекта торгово-офисных зданий"],
    ["200", "проектов индивидуальных домов"],
    ["15", "проектов жилых комплексов"],
    ["18", "проектов общественных пространств"],
  ]
    .map(([n, t]) => `<article><strong>${n}</strong><p>${t}</p></article>`)
    .join("")}</div></div></section>${consult()}${lightboxMarkup()}`;
const about = () =>
  `${founder}<section class="philosophy wrap"><div class="philosophy-top"><div><h2>Проектируем<br><em>под вашу задачу.</em></h2><p>Студия полного цикла в Майкопе: архитектурное проектирование домов, дизайн интерьеров и благоустройство.</p><p>Подключаем специалистов по этапам проекта — от идеи и планировочного решения до проектной документации и сопровождения строительства.</p><p>Работаем в Майкопе и по всему Югу России. Состав работ, сроки и стоимость обсуждаем до начала проекта.</p></div>${img("about-1", "Архитектурный проект жилого комплекса")}</div>${img("about-4", "Терраса с аркой", "terrace")}<h2 class="architecture">Архитектура должна объединять<br><em>красоту<br><span>и функциональность</span></em></h2><div class="architecture-pair">${img("about-2", "Фасад с арочными окнами")}${img("about-3", "Благоустройство территории")}</div></section><section class="values wrap"><h2>Почему выбирают нас</h2><div>${[
    [
      "Полный цикл",
      "Объединяем архитектурное проектирование, интерьерные решения и сопровождение стройки. Подготовим состав работ под ваш объект.",
    ],
    [
      "Опыт в регионе",
      "Работаем в Майкопе и по Югу России, учитываем особенности участка, климата и местной застройки при разработке решений.",
    ],
    [
      "Понятная работа",
      "Согласуем этапы и состав документации, держим связь по ходу проекта и помогаем координировать подрядчиков при реализации.",
    ],
  ]
    .map(([t, p]) => `<article><h3>${t}</h3><p>${p}</p></article>`)
    .join(
      "",
    )}</div></section><section class="team wrap">${img("about-5", "Проект парка с прогулочными дорожками", "wide")}<h2><em>Наша команда</em> <small>— это семья талантливых, влюбленных в свое дело специалистов, которые умеют слушать и слышать ваши запросы.</small></h2>${img("about-0", "Проект террасы кафе", "team-image")}<p>Мы стремимся показать красоту и уникальность<br>архитектуры в нашей жизни</p><h2 class="closing">Пусть наш с вами новый<br>проект будет проводником к<br>новым достижениям</h2></section>${consult()}`;
const portfolioItems = [
  [
    "projects-0",
    "Частная резиденция",
    "Жилые дома",
    "Архитектура частного дома",
  ],
  [
    "home-13",
    "Торгово-офисное здание",
    "Общественные здания",
    "Выразительный фасад и свет",
  ],
  ["about-1", "Жилой комплекс", "Жилые дома", "Архитектура повседневной жизни"],
  [
    "about-4",
    "Терраса с аркой",
    "Жилые дома",
    "Продолжение дома на открытом воздухе",
  ],
  [
    "f-0",
    "Дом в вечернем свете",
    "Жилые дома",
    "Камерная атмосфера и природные материалы",
  ],
  [
    "home-6",
    "Городская площадь",
    "Благоустройство",
    "Место встречи города и человека",
  ],
  [
    "f-11",
    "Общественный комплекс",
    "Общественные здания",
    "Архитектура и благоустройство как единое целое",
  ],
  [
    "home-9",
    "Культовый объект",
    "Общественные здания",
    "Архитектура света и тишины",
  ],
  [
    "about-5",
    "Парк и прогулочные маршруты",
    "Благоустройство",
    "Природа в ритме города",
  ],
  [
    "about-0",
    "Терраса кафе",
    "Благоустройство",
    "Открытое пространство для общения",
  ],
  [
    "home-5",
    "Въездная группа",
    "Общественные здания",
    "Первое впечатление о месте",
  ],
  [
    "about-2",
    "Здание с арочными окнами",
    "Общественные здания",
    "Классические пропорции в современном прочтении",
  ],
  [
    "f-52",
    "Дом на открытой природе",
    "Жилые дома",
    "Панорамное остекление и просторная терраса",
  ],
];
const projectAlbums = {
  4: ["f-0", "f-22", "f-2", "f-1", "f-49", "f-46"],
  6: [
    "f-11",
    "f-16",
    "f-17",
    "f-29",
    "f-31",
    "f-32",
    "f-36",
    "f-38",
    "f-42",
    "f-10",
    "about-3",
  ],
};
const projects = () =>
  `<section class="projects"><div class="wrap"><div class="projects-heading"><p class="eyebrow">Портфолио архитектурного бюро / ${portfolioItems.length} проектов</p><h1><span class="heading-line">Проекты домов</span><span class="heading-line">и <em>архитектуры.</em></span></h1><p>Портфолио архитектурных проектов:<br>частные дома, общественные здания<br>и благоустройство территорий.</p></div><div class="filter-bar" role="group" aria-label="Категории проектов">${["Все проекты", "Жилые дома", "Общественные здания", "Благоустройство"].map((t, i) => `<button class="filter" data-filter="${t}" aria-pressed="${i === 0}">${t}</button>`).join("")}</div><p class="gallery-count" role="status">Показано проектов: ${portfolioItems.length}</p><div class="gallery">${portfolioItems.map(([n, t, c, d], i) => `<article class="project-card" data-category="${c}"><button class="project-image" data-image="${i}" aria-label="Увеличить: ${t}">${img(n, t)}</button><div class="project-caption"><div><p class="eyebrow">${c}</p><h2>${t}</h2><p>${d}</p></div><span class="project-number">${projectAlbums[i]?.length > 1 ? projectAlbums[i].length + " ракурсов" : String(i + 1).padStart(2, "0")}</span></div></article>`).join("")}</div><section class="services" id="services"><div class="service-heading"><p class="eyebrow">Услуги архитектурного бюро</p><h2>От проекта<br>до сдачи <em>объекта.</em></h2><p>Архитектурное проектирование, дизайн интерьеров и сопровождение строительства в Майкопе и по Югу России.</p></div><ol>${services.map((s) => `<li>${s}</li>`).join("")}</ol></section></div>${consult()}</section>${lightboxMarkup()}`;
const contacts = () =>
  `<section class="contacts textured"><div class="wrap"><h1>Контакты архитектурного бюро в Майкопе</h1><address><p>Наш адрес: г. Майкоп, ул.<br>Жуковского, 13.</p><div class="phones"><a href="tel:+79182272079">+7 918 227 20 79</a><a href="tel:+79880820666">+7 988 082 06 66</a></div><a class="email" href="mailto:suli@inbox.ru">suli@inbox.ru</a><a class="instagram" href="https://www.instagram.com/archisuliko/">instagram: archisuliko</a><p class="legal">Продукт компании Meta*, которая признана<br>экстремистской организацией в России.</p></address><p class="since">Работаем с 2010 года.</p></div><a class="new-project" href="mailto:suli@inbox.ru">Обсудить проект</a></section>`;
const views = { home, about, projects, contacts };
document.getElementById("header").innerHTML =
  `<a class="brand" href="#home">Suliet Shumafova</a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">Меню <span aria-hidden="true"></span></button><nav id="main-nav" aria-label="Основная навигация">${nav}</nav>`;
const menu = document.querySelector(".menu-toggle");
menu.onclick = () => {
  let open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", open);
  document.getElementById("main-nav").classList.toggle("open", open);
};
function render() {
  const [raw, target] = location.hash.slice(1).split("/");
  const route = views[raw] ? raw : "home";
  document.body.dataset.page = route;
  document.title =
    {
      home: "Проектирование домов и дизайн интерьеров в Майкопе",
      about: "О студии",
      projects: "Проекты",
      contacts: "Контакты",
    }[route] + " — Suliet Shumafova";
  document.querySelector("dialog[open]")?.close();
  document.body.classList.remove("modal-open");
  document.getElementById("main").innerHTML = views[route]() + footer();
  document.querySelectorAll("#header nav a").forEach((a) => {
    const active =
      a.hash === "#" + route + (target === "services" ? "/services" : "");
    a.toggleAttribute("aria-current", active);
    if (active) a.setAttribute("aria-current", "page");
  });
  menu.setAttribute("aria-expanded", "false");
  document.getElementById("main-nav").classList.remove("open");
  window.scrollTo(0, 0);
  if (target)
    requestAnimationFrame(() =>
      document.getElementById(target)?.scrollIntoView(),
    );
  bindPhone();
  bindGallery();
  document.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    location.href =
      "mailto:suli@inbox.ru?subject=" +
      encodeURIComponent("Расчёт стоимости проекта") +
      "&body=" +
      encodeURIComponent(
        `Здравствуйте! Хочу обсудить проект и получить расчёт стоимости.\nИмя: ${f.get("name")}\nТелефон: ${f.get("phone")}`,
      );
    e.target.querySelector("[role=status]").textContent =
      "Заявка подготовлена. Отправьте письмо в вашей почтовой программе. Если она не открылась, позвоните: +7 918 227 20 79.";
  });
}
window.addEventListener("hashchange", render);
render();

function bindPhone() {
  const el = document.querySelector("#phone");
  if (!el) return;
  const error = document.querySelector("#phone-error");
  let touched = false;
  const digits = (v) => v.replace(/\D/g, "");
  const normalize = (v) => {
    let d = digits(v);
    if (d.length === 11 && (d[0] === "7" || d[0] === "8")) d = d.slice(1);
    else if (v.trim().startsWith("+7")) d = d.slice(1);
    return d.slice(0, 10);
  };
  const format = (n) => {
    if (!n) return "";
    let v = "+7 (" + n.slice(0, 3);
    if (n.length >= 3) v += ") ";
    if (n.length > 3) v += n.slice(3, 6);
    if (n.length > 6) v += "-" + n.slice(6, 8);
    if (n.length > 8) v += "-" + n.slice(8, 10);
    return v;
  };
  const validate = () => {
    const n = normalize(el.value),
      valid = n.length === 10;
    el.setCustomValidity(
      el.value && !valid ? "Введите номер полностью: 10 цифр после +7." : "",
    );
    if (touched) {
      el.setAttribute("aria-invalid", String(!valid));
      error.textContent = valid
        ? ""
        : n.length
          ? "Введите номер полностью: 10 цифр после +7."
          : "Введите номер телефона.";
    }
    return valid;
  };
  const position = (value, count) => {
    if (count <= 0) return Math.min(4, value.length);
    let seen = 0;
    for (let i = 4; i < value.length; i++) {
      if (/\d/.test(value[i])) seen++;
      if (seen === count) return i + 1;
    }
    return value.length;
  };
  el.addEventListener("input", () => {
    const raw = el.value,
      caret = el.selectionStart ?? raw.length;
    if (["7", "8", "+7"].includes(raw.trim())) {
      el.value = "+7 (";
      el.setSelectionRange(4, 4);
      validate();
      return;
    }
    let count = digits(raw.slice(0, caret)).length;
    const hasPrefix =
      raw.trim().startsWith("+7") ||
      (digits(raw).length === 11 && /^[78]/.test(digits(raw)));
    if (hasPrefix) count--;
    const n = normalize(raw);
    el.value = format(n);
    el.setSelectionRange(position(el.value, count), position(el.value, count));
    validate();
  });
  el.addEventListener("paste", (e) => {
    const text = e.clipboardData.getData("text");
    const d = digits(text);
    if (d.length >= 10) {
      e.preventDefault();
      el.value = format(normalize(text));
      el.setSelectionRange(el.value.length, el.value.length);
      validate();
    }
  });
  el.addEventListener("beforeinput", (e) => {
    if (!e.inputType.startsWith("delete")) return;
    e.preventDefault();
    let n = normalize(el.value);
    const start = el.selectionStart,
      end = el.selectionEnd;
    const count = (pos) => digits(el.value.slice(4, pos)).length;
    let a = count(start),
      b = count(end);
    if (start === end) {
      if (e.inputType.includes("Backward")) a = Math.max(0, a - 1);
      else b = Math.min(n.length, b + 1);
    }
    n = n.slice(0, a) + n.slice(b);
    el.value = format(n);
    const pos = position(el.value, a);
    el.setSelectionRange(pos, pos);
    validate();
  });
  el.addEventListener("blur", () => {
    touched = true;
    validate();
  });
  el.addEventListener("invalid", () => {
    touched = true;
    validate();
  });
  validate();
}
function bindGallery() {
  const cards = [...document.querySelectorAll(".project-card")],
    dialog = document.querySelector(".lightbox");
  if (!dialog) return;
  let project = 0,
    frame = 0;
  const photos = () => projectAlbums[project] || [portfolioItems[project][0]];
  const show = () => {
    const list = photos();
    const [, title] = portfolioItems[project];
    const image = dialog.querySelector("img");
    image.src = source(list[frame]);
    image.alt = title + " — ракурс " + (frame + 1);
    dialog.querySelector("#lightbox-caption").textContent =
      title + " · " + (frame + 1) + " / " + list.length;
    dialog.querySelector(".lightbox-prev").disabled = list.length < 2;
    dialog.querySelector(".lightbox-next").disabled = list.length < 2;
  };
  document.querySelectorAll("[data-filter]").forEach(
    (button) =>
      (button.onclick = () => {
        const category = button.dataset.filter;
        document
          .querySelectorAll("[data-filter]")
          .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
        cards.forEach(
          (c) =>
            (c.hidden =
              category !== "Все проекты" && c.dataset.category !== category),
        );
        document.querySelector(".gallery-count").textContent =
          "Показано проектов: " + cards.filter((c) => !c.hidden).length;
      }),
  );
  document.querySelectorAll("[data-image]").forEach(
    (button) =>
      (button.onclick = () => {
        project = Number(button.dataset.image);
        frame = 0;
        show();
        dialog.showModal();
        document.body.classList.add("modal-open");
      }),
  );
  const step = (d) => {
    const list = photos();
    frame = (frame + d + list.length) % list.length;
    show();
  };
  dialog.querySelector(".lightbox-close").onclick = () => dialog.close();
  dialog.querySelector(".lightbox-prev").onclick = () => step(-1);
  dialog.querySelector(".lightbox-next").onclick = () => step(1);
  dialog.addEventListener("close", () =>
    document.body.classList.remove("modal-open"),
  );
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  });
}
