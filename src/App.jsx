import "./App.css";
import News from "./Components/News";
import Navigation from "./Components/Navigation";
import Advertisement from "./Components/Advertisement";
import Offers from "./Components/Offers";
import Searcher from "./Components/Searcher";

function App() {
  const items = [
    { text: "первая новость" },
    { text: "вторая новость" },
    { text: "третья новость" },
    { text: "четвертая новость" },
  ];
  return (
    <div className="mainConteiner">
      <News items={items} />
      <Navigation>
        <div className="shortBlock">Видео</div>
        <div className="shortBlock">Картинки</div>
        <div className="shortBlock">Новости</div>
        <div className="shortBlock">Карты</div>
        <div className="shortBlock">Маркет</div>
        <div className="shortBlock">Переводчик</div>
        <div className="shortBlock">Эфир</div>
      </Navigation>
      <Searcher />
      <Advertisement />{" "}
      <div className="wrapContainer">
        <Offers title={"Погода"}>
          <div className="shortBlock">☼</div>
          <div className="shortBlock">+17</div>
          <div className="shortBlock">утром +10</div>
        </Offers>
        <Offers title={"Посещаемое"}>
          <div className="shortBlock">Недвижимость</div>
          <div className="shortBlock">Маркет</div>
        </Offers>
      </div>
    </div>
  );
}

export default App;
