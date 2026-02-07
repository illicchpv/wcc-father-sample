// подключить: <script data-wcc type="module" src="wcc/WccFeedback/WccFeedback.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccFeedback.html
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