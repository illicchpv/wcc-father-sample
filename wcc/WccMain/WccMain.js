// подключить: <script data-wcc type="module" src="wcc/WccMain/WccMain.js"></script>
const myTemplate = `<style>
  .wccMain {
    display: flex;
    align-items: center;
    gap: 27px;
  }

  .wccMain__text {
    max-width: 510px;
  }

  .wccMain__hi {
    font-weight: 700;
    font-size: 48px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-900);
  }

  .wccMain__info {
    margin-top: 8px;
    margin-bottom: 24px;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.35;
    letter-spacing: -0.02em;
    color: var(--neutral-900);
  }

  .wccMain__primary {
    color: var(--brand-900);
  }

  .wccMain__controls {
    display: flex;
    align-items: center;
    column-gap: 70px;
    row-gap: 20px;
    flex-wrap: wrap;
  }
</style>

<main class="wccMain container">
  <img src="img/avatar-src.png" alt="avatar">

  <div class="wccMain__text">
    <h1 class="wccMain__hi">Привет 👋</h1>

    <p class="wccMain__info">
      <span class="wccMain__primary">Я фронтенд-разработчик и веб-дизайнер</span>
      Меня зовут Артем Исламов и я делаю сайты для людей и компаний
    </p>

    <div class="wccMain__controls">
      <wcc-social></wcc-social>

      <wcc-button btn-type="link" href="cv.pdf" attr="download">
        <svg slot="img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_311_8)">
            <path
              d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
              fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_311_8">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span slot="text">Скачать резюме</span>
      </wcc-button>
    </div>
  </div>
</main>

<body></body>
`; // для прод, вставить сюда содержимое файла WccMain.html
//
export class WccMain extends BaseComponent {

}

BaseComponent.registerWcc(WccMain, import.meta.url, myTemplate);