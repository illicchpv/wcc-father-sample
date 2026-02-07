// подключить: <script data-wcc type="module" src="wcc/WccCard/WccCard.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccCard.html
//
export class WccCard extends BaseComponent {

}

BaseComponent.registerWcc(WccCard, import.meta.url, myTemplate);