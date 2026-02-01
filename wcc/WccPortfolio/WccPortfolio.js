// подключить: <script data-wcc type="module" src="wcc/WccPortfolio/WccPortfolio.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccPortfolio.html
//
export class WccPortfolio extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
      // counterValue: {type: Number, attribute: 'counter-value', default: 0},
    };
  }

  render() {
    super.render();
    // this._initView();       // <--- Раскомментировать для Шага 2
    // this._initListeners();  // <--- Раскомментировать для Шага 3
  }

  _processInnerTemplates(name, content) {
    if (name === 'innerTemplateName') {
      this._innerTemplate = content;
      this._renderInnerTemplate();
    }
  }

  async _loadProjects() {
    try {
      const response = await fetch("projects.json");
      if (!response.ok) throw new Error('impossible');
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error('not Array');
      this._projects = data;
    } catch (e) {
      console.warn(e.message);
    }
  }

  _renderInnerTemplate() {
    const loadProjects = async () => {
      try {
        fetch("projects.json")
          .then(response => {
            if (!response.ok) throw new Error('impossible');
            return response.json();
          })
          .then(data => {
            if (!Array.isArray(data)) throw new Error('not Array');
            const items = data;
            console.log('items: ', items);
            if (!items || !this._innerTemplate) return;
            const container = this.querySelector('.wccPortfolio__cards');
            console.log('container: ', container);
            if (!container) return;
            this.renderInnerTemplateList(items, this._innerTemplate, container);
          });
      } catch (e) {
        console.warn(e.message);
      }
    };
    loadProjects();
  }

  // ============================================================
  // Шаг 2: Кэширование и обновление отображения
  // ============================================================

  // _initView() {
  //   this._cacheElements();
  //   this.updateView();
  // }

  // _cacheElements() {
  //   this._refs = {
  //     value: this.querySelector('.counter-value'),
  //     btnInc: this.querySelector('.counter-inc'),
  //   };
  // }

  // updateView() {
  //   const {value} = this._refs;
  //   if (!value) return;
  //   value.textContent = this.counterValue;
  // }

  // propertyChangedCallback(name, oldValue, newValue) {
  //   if (this.html) {
  //     this.updateView();
  //   }
  // }

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

BaseComponent.registerWcc(WccPortfolio, import.meta.url, myTemplate);