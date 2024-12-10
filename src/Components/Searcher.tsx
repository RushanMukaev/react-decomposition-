/**Main search field with <div> instead <img> as a label */

export default function Searcher() {
  return (
    <div className="rowContainer search">
      <div className="shortBlock yandexClass">Яндекс</div>
      <form>
        <input type="text" />
        <button>Найти</button>
      </form>
    </div>
  );
}
