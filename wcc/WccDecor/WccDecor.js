// подключить: <script data-wcc type="module" src="wcc/WccDecor/WccDecor.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccDecor.html
//
export class WccDecor extends BaseComponent {
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

BaseComponent.registerWcc(WccDecor, import.meta.url, myTemplate);