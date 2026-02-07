// подключить: <script data-wcc type="module" src="wcc/WccFooter/WccFooter.js"></script>
const myTemplate = `<style>
  .wccFooter {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: var(--neutral-500);
  }
</style>
<footer class="wccFooter container">
  Сделано с ❤️ в Казани
</footer>

<body></body>`; // для прод, вставить сюда содержимое файла WccFooter.html
//
export class WccFooter extends BaseComponent {

}

BaseComponent.registerWcc(WccFooter, import.meta.url, myTemplate);