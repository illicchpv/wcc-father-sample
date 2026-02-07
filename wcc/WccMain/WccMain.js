// подключить: <script data-wcc type="module" src="wcc/WccMain/WccMain.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccMain.html
//
export class WccMain extends BaseComponent {

}

BaseComponent.registerWcc(WccMain, import.meta.url, myTemplate);