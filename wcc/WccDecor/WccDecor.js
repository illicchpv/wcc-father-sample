// подключить: <script data-wcc type="module" src="wcc/WccDecor/WccDecor.js"></script>
const myTemplate = `<style>
  .wccDecor {
    display: block;
    position: relative;
    overflow: hidden;
  }

  .wccDecor__img {
    width: 680px;
    position: absolute;
    top: 30px;
    left: calc(100vw/2 + (var(--container-feedback)/2) - 15px);
  }
</style>
<div class="wccDecor">
  <img class="wccDecor__img" src="img/hand.png" alt="decor">

  <slot name=""></slot>
</div>

<body></body>`; // для прод, вставить сюда содержимое файла WccDecor.html
//
export class WccDecor extends BaseComponent {

}

BaseComponent.registerWcc(WccDecor, import.meta.url, myTemplate);