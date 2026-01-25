// подключить: <script data-wcc type="module" src="wcc/WccMain/WccMain.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccMain.html
//
export class WccMain extends BaseComponent {
  constructor() {
    super(); this._refs = {};
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  static get properties() {
    return {
    };
  }

  render() {
    super.render();
  }
}

BaseComponent.registerWcc(WccMain, import.meta.url, myTemplate);