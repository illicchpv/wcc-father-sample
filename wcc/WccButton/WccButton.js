// подключить: <script data-wcc type="module" src="wcc/WccButton/WccButton.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccButton.html
//
export class WccButton extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      btnType: {type: String, attribute: 'btn-type', default: 'link'},
      href: {type: String, attribute: 'href', default: '#!'},
      attr: {type: String, attribute: 'attr', default: ''},
    };
  }

  render() {
    super.render();
    this._initView();       // <--- Раскомментировать для Шага 2
    // this._initListeners();  // <--- Раскомментировать для Шага 3
  }

  // ============================================================
  // Шаг 2: Кэширование и обновление отображения
  // ============================================================

  _initView() {
    this._cacheElements();
    this.updateView();
  }

  _cacheElements() {
    this._refs = {
      btnEl: this.querySelector('.wccButton'),
    };
  }

  updateView() {
    const {btnEl} = this._refs;
    if (btnEl) {
      if (this.btnType === 'link') {
        btnEl.setAttribute('href', this.href);
        if (this.attr)
          btnEl.setAttribute(this.attr, '');
        else
          btnEl.removeAttribute(this.attr);
      }
    }
  }

  // ============================================================
  // Шаг 3: Обработчики событий
  // ============================================================

  // _initListeners() {
  //   this.onRef('btnInc', 'click', (e) => {
  //     this.counterValue++;
  //     this.emit('event-name', {...this.values, component: this, event: e, });
  //   });
  // }
}

BaseComponent.registerWcc(WccButton, import.meta.url, myTemplate);