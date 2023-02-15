import { useState } from "react";
import "./Form.css";

export default function Form() {
  const formBilgi = {
    isim: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    özel: "",
  };

  const [formData, setFormData] = useState(formBilgi);

  const handleReset = () => {
    setFormData(formBilgi);
  };

  function handleChange(event) {
    const { value, type, checked, name } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  const butonDisabledMi = formData.isim.length < 2;

  return (
    <div className="Siparis">
      <br></br>
      <br></br>
      <br></br>
      <img
        className="headPizza"
        src="https://i.pinimg.com/originals/0d/15/26/0d1526b6c16ca8457500ea5dba74a68f.gif"
        alt=""
        width="500"
        height="300"
      />
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div className="isimSoyad">
          <h3>İsim Soyad</h3>
          <input
            placeholder="İsim Soyad"
            onChange={handleChange}
            type="text"
            value={formData.isim}
            id="name-imput"
            name="isim"
          />
        </div>
        {butonDisabledMi && (
          <p style={{ color: "black" }}>İsim en az 2 karakter olmalıdır</p>
        )}
        <div className="pBoyut">
          <h2>Pizzanızın Boyutu Nasıl Olsun</h2>
          <select
            onChange={handleChange}
            name="boyut"
            id="size-dropdown"
            value={formData.boyut}
          >
            <option value="boş">Seçim Yapınız</option>
            <option value="büyük">Büyük</option>
            <option value="orta">Orta</option>
            <option value="küçük">Küçük</option>
          </select>
        </div>
        <h2>MALZEME SEÇİMİ</h2>
        <div className="pMalzemeler">
          <div className="pBiber">
            <img
              className="headPizza"
              src="https://media.baamboozle.com/uploads/images/222429/1618318748_10377_gif-url.gif"
              alt=""
              width="50"
              height="50"
            />
            <label>
              <input
                onChange={handleChange}
                type="checkbox"
                name="malzeme1"
                value="biber"
                checked={formData.malzeme1}
              />
              Biber
            </label>
          </div>
          <div className="pSosis">
            <img
              className="headPizza"
              src="https://media3.giphy.com/media/Pk4MzgkIY3Dc9GsGOX/giphy.gif?cid=6c09b9526pl2697673hwxicufo3pkozuf7u7h5awxksqi26g&rid=giphy.gif&ct=s"
              alt=""
              width="50"
              height="50"
            />
            <label>
              <input
                onChange={handleChange}
                type="checkbox"
                name="malzeme2"
                value="sosis"
                checked={formData.malzeme2}
              />
              Sosis
            </label>
          </div>
          <div className="pMısır">
            <img
              className="headPizza"
              src="https://media.baamboozle.com/uploads/images/293387/1614526445_23453_gif-url.gif"
              alt=""
              width="50"
              height="50"
            />
            <label>
              <input
                onChange={handleChange}
                type="checkbox"
                name="malzeme3"
                value="mısır"
                checked={formData.malzeme3}
              />
              Mısır
            </label>
          </div>
          <div className="pZeytin">
            <img
              className="headPizza"
              src="https://media3.giphy.com/media/cPSiiDdGuPOeK6dI2X/giphy.gif?cid=6c09b952grjcsv49ojdinuq0o3ubeyxzf8pdje7wjpsbsmzf&rid=giphy.gif&ct=s"
              alt=""
              width="50"
              height="50"
            />
            <label>
              <input
                onChange={handleChange}
                type="checkbox"
                name="malzeme4"
                value="zeytin"
                checked={formData.malzeme4}
              />
              Zeytin
            </label>
          </div>
        </div>
        <div className="pÖzel">
          <h1>Özel Seçim</h1>
          <input
            placeholder="Özel İsteğiniz Varsa Belirtin"
            onChange={handleChange}
            type="text"
            value={formData.özel}
            id="special-text"
            name="özel"
          />
        </div>
        <div className="pizzaButton">
          <button className="pButon" type="reset" onClick={handleReset}>
            Seçimi Temizle😜
          </button>
          <button
            className="pButonn"
            type="submit"
            id="order-button"
            disabled={butonDisabledMi}
          >
            Gönder💥
          </button>
        </div>
      </form>
    </div>
  );
}
