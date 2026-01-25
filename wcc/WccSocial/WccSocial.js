// подключить: <script data-wcc type="module" src="wcc/WccSocial/WccSocial.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccSocial.html
//
export class WccSocial extends BaseComponent {
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

BaseComponent.registerWcc(WccSocial, import.meta.url, myTemplate);