// подключить: <script data-wcc type="module" src="wcc/WccMySkills/WccMySkills.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccMySkills.html
//
export class WccMySkills extends BaseComponent {
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

BaseComponent.registerWcc(WccMySkills, import.meta.url, myTemplate);