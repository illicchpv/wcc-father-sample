// подключить: <script data-wcc type="module" src="wcc/WccNavBar/WccNavBar.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccNavBar.html
//
export class WccNavBar extends BaseComponent {
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

BaseComponent.registerWcc(WccNavBar, import.meta.url, myTemplate);