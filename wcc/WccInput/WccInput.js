// подключить: <script data-wcc type="module" src="wcc/WccInput/WccInput.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccInput.html
//
export class WccInput extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      type: {type: String, attribute: 'type', default: 'text'},
      name: {type: String, attribute: 'name', default: 'noName'},
      label: {type: String, attribute: 'label', default: 'label'},
      value: {type: String, attribute: 'value', default: ''},
      required: {type: Boolean, attribute: 'required'},
    };
  }

  render() {
    super.render();
    this._initView();       // <--- Раскомментировать для Шага 2
    this._initListeners();  // <--- Раскомментировать для Шага 3
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
      wccInputEl: this.querySelector('.wccInput'),
      labelEl: this.querySelector('.wccInput__label'),
    };
  }

  updateView() {
    const {wccInputEl, labelEl} = this._refs;
    if (wccInputEl) {
      if (this.type !== 'textarea') {
        wccInputEl.type = this.type;
        wccInputEl.innerText = this.value;
      }
      wccInputEl.name = this.name;
      wccInputEl.required = this.required;
      wccInputEl.value = this.value;
    }
    if (labelEl) labelEl.textContent = this.label;
  }

  propertyChangedCallback(name, oldValue, newValue) {
    if (this.html) {
      this.updateView();
    }
  }

  // ============================================================
  // Шаг 3: Обработчики событий
  // ============================================================

  _initListeners() {
    this.onRef('wccInputEl', 'change', (e) => {
      this.emit('wcc-input-changed', {...this.values, component: this, event: e, });
    });
  }
}

BaseComponent.registerWcc(WccInput, import.meta.url, myTemplate);