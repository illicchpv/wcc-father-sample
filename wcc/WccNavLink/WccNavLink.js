// подключить: <script data-wcc type="module" src="wcc/WccNavLink/WccNavLink.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccNavLink.html
//
export class WccNavLink extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      href: {type: String, attribute: 'href', default: '#'},
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
      hrefEl: this.querySelector('.wccNavLink'),
    };
  }

  updateView() {
    const {hrefEl} = this._refs;
    if (hrefEl) {
      hrefEl.setAttribute('href', this.href);
    }
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
    this.onRef('hrefEl', 'click', (e) => {
      document.querySelectorAll('wcc-nav-link').forEach(el => {
        el.classList.remove('active');
      });
      e.target.closest('wcc-nav-link').classList.add('active')
    });
  }
}

BaseComponent.registerWcc(WccNavLink, import.meta.url, myTemplate);