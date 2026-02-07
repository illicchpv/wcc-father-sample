// подключить: <script data-wcc type="module" src="wcc/WccFooter/WccFooter.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccFooter.html
//
export class WccFooter extends BaseComponent {

}

BaseComponent.registerWcc(WccFooter, import.meta.url, myTemplate);