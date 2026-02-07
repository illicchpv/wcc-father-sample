// подключить: <script data-wcc type="module" src="wcc/WccButton/WccButton.js"></script>
const myTemplate = `<style>
  .wccButton {
    display: inline-block;
    padding: 7px 8px 5px;
    border: none;
    border-bottom: 2px solid var(--brand-900);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: var(--neutral-900);
    background-color: transparent;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    white-space: nowrap;
  }

  .wccButton:hover {
    background-color: var(--brand-900);
    color: #fff;
  }

  .wccButton__content {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>

<!-- if(this.btnType==='link') -->
<a class="wccButton" href="#!">
  <div class="wccButton__content">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </div>
</a>
<!-- endif -->

<!-- if(this.btnType!=='link') -->
<button class="wccButton" type="submit">
  <div class="wccButton__content">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </div>
</button>
<!-- endif -->`; // для прод, вставить сюда содержимое файла WccButton.html
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