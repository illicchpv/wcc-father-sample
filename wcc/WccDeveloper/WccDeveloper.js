// подключить: <script data-wcc type="module" src="wcc/WccDeveloper/WccDeveloper.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccDeveloper.html
//
export class WccDeveloper extends BaseComponent {
  constructor() {
    super();
  }
  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }
  render() {
    super.render();
  }
}

BaseComponent.registerWcc(WccDeveloper, import.meta.url, myTemplate);