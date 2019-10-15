import { LitElement, html, css } from 'lit-element';
import Pikaday from  'pikaday';

const i18n = {
  previousMonth: 'Mês anterior',
  nextMonth: 'Próximo mês',
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
};

class Component extends LitElement {
  static get properties() {
    return {
      _modal: { type: Boolean }
    };
  }

  render() {
    return html`
    <style>
    .pika-single{z-index:9999;display:block;position:relative;color:#333;background:#fff;border:1px solid #ccc;border-bottom-color:#bbb;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.pika-single:after,.pika-single:before{content:" ";display:table}.pika-single:after{clear:both}.pika-single.is-hidden{display:none}.pika-single.is-bound{position:absolute;box-shadow:0 5px 15px -5px rgba(0,0,0,.5)}.pika-lendar{float:left;width:240px;margin:8px}.pika-title{position:relative;text-align:center}.pika-label{display:inline-block;position:relative;z-index:9999;overflow:hidden;margin:0;padding:5px 3px;font-size:14px;line-height:20px;font-weight:700;background-color:#fff}.pika-title select{cursor:pointer;position:absolute;z-index:9998;margin:0;left:0;top:5px;opacity:0}.pika-next,.pika-prev{display:block;cursor:pointer;position:relative;outline:0;border:0;padding:0;width:20px;height:30px;text-indent:20px;white-space:nowrap;overflow:hidden;background-color:transparent;background-position:center center;background-repeat:no-repeat;background-size:75% 75%;opacity:.5}.pika-next:hover,.pika-prev:hover{opacity:1}.is-rtl .pika-next,.pika-prev{float:left;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==)}.is-rtl .pika-prev,.pika-next{float:right;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=)}.pika-next.is-disabled,.pika-prev.is-disabled{cursor:default;opacity:.2}.pika-select{display:inline-block}.pika-table{width:100%;border-collapse:collapse;border-spacing:0;border:0}.pika-table td,.pika-table th{width:14.285714285714286%;padding:0}.pika-table th{color:#999;font-size:12px;line-height:25px;font-weight:700;text-align:center}.pika-button{cursor:pointer;display:block;box-sizing:border-box;-moz-box-sizing:border-box;outline:0;border:0;margin:0;width:100%;padding:5px;color:#666;font-size:12px;line-height:15px;text-align:right;background:#f5f5f5}.pika-week{font-size:11px;color:#999}.is-today .pika-button{color:#3af;font-weight:700}.has-event .pika-button,.is-selected .pika-button{color:#fff;font-weight:700;background:#3af;box-shadow:inset 0 1px 3px #178fe5;border-radius:3px}.has-event .pika-button{background:#005da9;box-shadow:inset 0 1px 3px #0076c9}.is-disabled .pika-button,.is-inrange .pika-button{background:#d5e9f7}.is-startrange .pika-button{color:#fff;background:#6cb31d;box-shadow:none;border-radius:3px}.is-endrange .pika-button{color:#fff;background:#3af;box-shadow:none;border-radius:3px}.is-disabled .pika-button{pointer-events:none;cursor:default;color:#999;opacity:.3}.is-outside-current-month .pika-button{color:#999;opacity:.3}.is-selection-disabled{pointer-events:none;cursor:default}.pika-button:hover,.pika-row.pick-whole-week:hover .pika-button{color:#fff;background:#ff8000;box-shadow:none;border-radius:3px}.pika-table abbr{border-bottom:none;cursor:help}
    .container {
      width: 260px;
    }
    </style>
    <input id="datepicker" type="hidden">
    <div id="container" class="container"></div>`;
  }

  firstUpdated() {
    var picker = new Pikaday({
      field: this.shadowRoot.getElementById('datepicker'),
      bound: false,
      format: "DD/MM/YYYY",
      i18n: i18n,
      container: this.shadowRoot.getElementById('container')
    });
  }
}

customElements.define('my-component', Component);
