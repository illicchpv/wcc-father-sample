// подключить: <script data-wcc type="module" src="wcc/WccPortfolio/WccPortfolio.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccPortfolio.html
//
export class WccPortfolio extends BaseComponent {
  constructor() {
    super(); this._refs = {};
    this._loadProjects();
  }
  async _loadProjects() {
    try {
      const response = await fetch("projects.json");
      if (!response.ok) throw new Error('impossible');
      this._projects = response.json();
    } catch (e) {
      console.warn(e.message);
    }
  }

  connectedCallback() {
    this.loadTemplate(import.meta.url);
  }

  render() {
    super.render();
  }

  _processInnerTemplates(name, content) {
    if (name === 'innerTemplateName') {
      this._innerTemplate = content;
      this._renderInnerTemplate();
    }
  }
  async _renderInnerTemplate() {
    try {
      const items = await this._projects;
      const container = this.querySelector('.wccPortfolio__cards');
      this.renderInnerTemplateList(items, this._innerTemplate, container);
    } catch(e) {
      console.warn(e.message);
    }
  }
}

BaseComponent.registerWcc(WccPortfolio, import.meta.url, myTemplate);