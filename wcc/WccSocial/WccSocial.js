// подключить: <script data-wcc type="module" src="wcc/WccSocial/WccSocial.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccSocial.html
//
export class WccSocial extends BaseComponent {

}

BaseComponent.registerWcc(WccSocial, import.meta.url, myTemplate);