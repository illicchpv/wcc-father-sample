// подключить: <script data-wcc type="module" src="wcc/WccSocial/WccSocial.js"></script>
const myTemplate = `<style>
  .wccSocial {
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 4px;
  }
</style>
<ul class="wccSocial">
  <li><img src="img/social/linkedin.svg" alt="linkedin"></li>
  <li><img src="img/social/twitter.svg" alt="twitter"></li>
  <li><img src="img/social/github.svg" alt="github"></li>
  <li><img src="img/social/stackoverflow.svg" alt="stackoverflow"></li>
  <li><img src="img/social/youtube.svg" alt="youtube"></li>
</ul>`; // для прод, вставить сюда содержимое файла WccSocial.html
//
export class WccSocial extends BaseComponent {

}

BaseComponent.registerWcc(WccSocial, import.meta.url, myTemplate);