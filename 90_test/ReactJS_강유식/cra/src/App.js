import Card from "./Card.jsx";
import pic01 from "./assets/pic01.jpg";
import pic02 from "./assets/pic02.jpg";
import pic03 from "./assets/pic03.jpg";

function App() {
  return (

    <div className="wrapper">
      <Card
        title="BORA BORA"
        img="https://ninkotek.github.io/web0422/assets/borabora/pic01.jpg"
        description="Lose yourself in a private island paradise, where the waters teem with exotic fish and colorful coral."
        button="VIEW PROPERTY" />
      <Card
        title="ANGUILLA"
        img="https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-312,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/AIL/AIL_273_original.jpg"
        description="Fill your days with water sports, pool time or exotic dining in the Caribbean's culinary capital."
        button="VIEW PROPERTY" />
      <Card
        title="THE OCEAN CLUB A FOUR SEASONS RESORT, BAHAMAS"
        img="https://ninkotek.github.io/web0422/assets/borabora/pic02.jpg"
        description="Connect with true Bahamian beauty and enjoy remarkable seclusion at this legendary Caribbean hideaway."
        button="VIEW PROPERTY" />

      <Card
        title="O'AHU AT KO OLINA"
        img="https://ninkotek.github.io/web0422/assets/borabora/pic03.jpg"
        description="Join us in Ko Olina and find laid-back luxury at our beachfront Resort on Oahu's sunny western."
        button="VIEW PROPERTY" />
    </div>

  );
}

export default App;
