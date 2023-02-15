import React, { useEffect } from "react";
import "./header.css";
const Header = (props) => {
  useEffect(() => {
    document.querySelectorAll(".Fly>i").forEach((v, k) => {
      v.style.animationDelay = k / 9 + "s";
    });
  });
  return (
    <header className="firstPage">
      <h3>HEY YAZILIMCI</h3>
      <div class="Fly">
        <i>C</i>
        <i>A</i>
        <i>N</i>
        <i>I</i>
        <i>N</i>
        <i>&nbsp;</i>
        <i>P</i>
        <i>İ</i>
        <i>Z</i>
        <i>Z</i>
        <i>A</i>
        <i>&nbsp;</i>
        <i>M</i>
        <i>I</i>
        <i>&nbsp;</i>
        <i>Ç</i>
        <i>E</i>
        <i>K</i>
        <i>T</i>
        <i>İ</i>
        <i>🍕</i>
      </div>
      <div>
        <h4>YENİ BİR LEZZET DÜNYASI KEŞFETMEYE HAZIR MISIN?</h4>
      </div>
      <div>
        <img
          className="firstPhoto"
          src="https://cdn.dribbble.com/users/2524166/screenshots/6130340/market_new_1.gif"
          alt=""
          width="500"
          height="300"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>

      <h2 className="h2Kimiz">Peki Biz Kimiz?Hadi Tanışalım</h2>
      <div className="tanitim2">
        <p className="kimiz">
          Sade ve samimi yemekler sunma fikrinden ilham alan benzersiz bir
          mekandır. 2000 yılında açıldığımızdan beri taze ve sürdürülebilir
          malzemeler kullanarak tüm misafirlerimiz için benzersiz bir yemek
          deneyimi geliştirdik ve sizi daha önce benzerini yaşamadığınız bir
          lezzet yolculuğuna çıkarıyoruz. Klasik tariflerden new age lezzetlere
          kadar her bir yemeğimiz, kaliteli lezzetleri basit ama tatmin edici
          bir biçimde sunma tutkumuzu yansıtır. Gelin ve lezzetlerimizin tadına
          varın. Sizi bekliyoruz.
        </p>
        <img
          className="kimizP"
          src="https://bestanimations.com/media/pizza/1013943786pizza-slice-animated-gif-31.gif"
          alt=""
        />
      </div>

      <br></br>
      <br></br>
      <h2 className="salvaP">Ustamız Salvatore Cannetiello </h2>
      <div className="tanitim">
        <p className="usta">
          Salvatore Cannetiello, 14 yaşından beri mutfakta… İtalya Napoli’de üç
          kuşaktır pizzacı olan bir aileden gelen Cannetiello; babası, dedesi,
          amcası ve kuzenleriyle birlikte pizza işinin inceliklerini çocuk
          yaşlarda öğrenmiş. Napoli’de ilk dükkânlarını ‘Da Gennaro’ markası
          altında açtıklarını söyleyen SalvatoreCannetiello, pizza zincirinin
          adının daha sonra Pizzeria Il Pellicano olarak değiştiğini söylüyor.
        </p>
        <img
          src="https://media2.giphy.com/media/SaSEbDrUSNkBZY66wC/giphy.gif"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
