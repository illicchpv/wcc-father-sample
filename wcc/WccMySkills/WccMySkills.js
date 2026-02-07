// подключить: <script data-wcc type="module" src="wcc/WccMySkills/WccMySkills.js"></script>
const myTemplate = ``; // для прод, вставить сюда содержимое файла WccMySkills.html
//
export class WccMySkills extends BaseComponent {

}

BaseComponent.registerWcc(WccMySkills, import.meta.url, myTemplate);