// подключить: <script data-wcc type="module" src="wcc/WccNavBar/WccNavBar.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccNavBar.html
//
export class WccNavBar extends BaseComponent {

}

BaseComponent.registerWcc(WccNavBar, import.meta.url, myTemplate);