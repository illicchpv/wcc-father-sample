// подключить: <script data-wcc type="module" src="wcc/WccInput/WccInput.js"></script>
const myTemplate = `<style>
  .wccInput__group {
    position: relative;
    padding-top: 10px;
  }

  .wccInput {
    display: inline-block;
    border: 3px solid var(--neutral-100);
    border-radius: 4px;
    height: 56px;
    width: 100%;
    padding: 10px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }

  .wccInput:hover {
    border-color: var(--neutral-500);
  }

  .wccInput:not(:placeholder-shown) {
    border-color: var(--neutral-900);
  }

  .wccInput:focus {
    border-color: var(--brand-900);
  }

  .wccInput.textarea {
    min-height: 150px;
    resize: none;
  }

  .wccInput__label {
    position: absolute;
    background-color: #fff;
    left: 10px;
    top: 0;
    padding: 0 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--neutral-900);
  }
</style>

<div class="wccInput__group">
  <label>
    <!-- if(this.type==='textarea') -->
      <textarea class="wccInput textarea" name="client_name" placeholder=" " autocomplete="off"></textarea>
    <!-- endif -->
    <!-- if(this.type!=='textarea') -->
      <input class="wccInput" type="text" name="client_name" placeholder=" " autocomplete="off">
    <!-- endif -->
    
    <span class="wccInput__label">Ваше имя</span>
  </label>
</div>

<body></body>`; // для прод, вставить сюда содержимое файла WccInput.html
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