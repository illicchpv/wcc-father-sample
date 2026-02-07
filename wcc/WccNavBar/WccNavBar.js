// подключить: <script data-wcc type="module" src="wcc/WccNavBar/WccNavBar.js"></script>
const myTemplate = `<style>
  .wccNavBar {
    display: flex;
    align-items: center;
  }

  .wccNavBar__nav {
    margin-left: auto;
  }

  .wccNavBar__links {
    display: flex;
    gap: 24px;
  }
</style>
<div class="wccNavBar container">
  <a href="#">
    <img class="wccNavBar__img" width="25" height="17" src="img/logo.svg" alt="logo">
  </a>

  <nav class="wccNavBar__nav">
    <ul class="wccNavBar__links">
      <li>
        <wcc-nav-link class="active" href="#home">Главная</wcc-nav-link>
      </li>
      <li>
        <wcc-nav-link href="#project">Проекты</wcc-nav-link>
      </li>
      <li>
        <wcc-nav-link href="#about">Обо мне</wcc-nav-link>
      </li>
      <li>
        <wcc-nav-link href="#feedback">Связаться</wcc-nav-link>
      </li>
    </ul>
</div>
</div>`; // для прод, вставить сюда содержимое файла WccNavBar.html
//
export class WccNavBar extends BaseComponent {

}

BaseComponent.registerWcc(WccNavBar, import.meta.url, myTemplate);