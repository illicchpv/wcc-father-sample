// подключить: <script data-wcc type="module" src="wcc/WccFeedback/WccFeedback.js"></script>
const myTemplate = `<style>
  .wccFeedback {
    display: block;
  }

  .wccFeedback__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-900);
    margin-bottom: 16px;
  }

  .wccFeedback__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: right;
  }
</style>
<div class="wccFeedback container-feedback">

  <h2 class="wccFeedback__title">Готов обсудить проект...</h2>

  <form class="wccFeedback__form">

    <wcc-input type="text" label="Ваше имя" name="client_name" required value=""></wcc-input>
    <wcc-input id="email" type="email" label="Email" name="client_email" required value=""></wcc-input>
    <wcc-input type="textarea" label="Сообщение" name="client_message"></wcc-input>

    <wcc-button btn-type="btn">
      <svg slot="img" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z" fill="currentColor" />
      </svg>

      <span slot="text">Отправить</span>
    </wcc-button>
  </form>
</div>

<body></body>`; // для прод, вставить сюда содержимое файла WccFeedback.html
//
export class WccFeedback extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }

  render() {
    super.render();
    this._initListeners();  // <--- Раскомментировать для Шага 3
  }

  _initListeners() {
    const form = this.querySelector('.wccFeedback__form');
    this.onRef(form, 'submit', (e) => { // можно так: this.onRef('btnInc', 'click',...
      this.emit('submit-feedback', {form: form, component: this, event: e, });
    });
  }
}

BaseComponent.registerWcc(WccFeedback, import.meta.url, myTemplate);