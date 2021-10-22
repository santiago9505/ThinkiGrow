import React, { useState } from "react";
import app from "../firebase";

//styles
import "../assets/styles/CreateCommunity.css";

const CreateCommunity = () => {
  //upload image state
  const [imageUpload, setImageUpload] = useState("");
  const [uploadValue, setUploadValue] = useState(0);

  //upload image state
  const [form, setForm] = useState(0);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref(`/profile-images/${file.name}`);
    console.log(storageRef);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadValue(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        app
          .storage()
          .ref("profile-images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setImageUpload(url);
          });
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(form + 1);
  };

  const finalSubmit = (event) => {
    event.preventDefault();
  };

  console.log(imageUpload);

  return (
    <div className="create__community">
      <ul className="create__community--sections">
        <li className="data__items--community">
          <div
            onClick={() => setForm(0)}
            className={
              form === 0 ? "form__sections section__selected" : "form__sections"
            }
          ></div>
          <a href="/">Datos de perfil de comunidad</a>
        </li>
        <li className="data__items--community">
          <hr className="line__create" />
        </li>
        <li className="data__items--community">
          <div
            onClick={() => setForm(1)}
            className={
              form === 1 ? "form__sections section__selected" : "form__sections"
            }
          ></div>
          <a href="/">Datos generales de comunidad</a>
        </li>
        <li className="data__items--community">
          <hr className="line__create" />
        </li>
        <li className="data__items--community">
          <div
            onClick={() => setForm(2)}
            className={
              form === 2 ? "form__sections section__selected" : "form__sections"
            }
          ></div>
          <a href="/">Programación de actividades</a>
        </li>
      </ul>
      <form
        className={form === 0 ? "create__form" : "create__form basic__form"}
        onSubmit={handleSubmit}
        action=""
      >
        <article className="form__title">
          <h1>Datos de la comunidad</h1>
        </article>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/community-icon.svg?alt=media&token=7b8e9a76-ebdc-4d60-b15b-d9c07ae823c4"
              alt="nombre-comunidad"
            />
            Nombre de la Comunidad
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            placeholder="Thinkigrow"
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/tem%C3%A1tica-icon%201.svg?alt=media&token=a542191a-a27b-4ce2-b1da-855d006ca177"
              alt="temática"
            />
            Temática
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            placeholder="arte, tecnología, ciencia"
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/tematica-icon.svg?alt=media&token=b0884adc-1735-4d03-83e9-fe784af6cc76"
              alt=""
            />
            Descripción de la comunidad
          </span>
          <textarea
            className="create__input text--area"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Describe brevemente tu proyecto"
            required
          ></textarea>
        </label>
        <label className="form__question question__members" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20(2).svg?alt=media&token=6ca9861b-028e-416d-b1c5-d005ad993436"
              alt="numero-de-miembros"
            />
            Número de miembros del grupo
          </span>
          <select className="create__input" name="" id="" required>
            <option value="">Selecciona</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
          </select>
        </label>
        <label className="image__section" htmlFor="">
          <span>
            Sube una foto o imagen que represente tu comunidad en formato .png o
            .jpg
          </span>
          <div className="image__upload">
            <img src={imageUpload} alt="imagen-comunidad" />
            <input type="file" accept="image/*" onChange={handleChange} />
            <progress value={uploadValue} max="100"></progress>
          </div>
        </label>
        <label className="button__first--section" htmlFor="">
          <button type="submit">Continuar</button>
        </label>
      </form>
      <form
        onSubmit={handleSubmit}
        className={form === 1 ? "create__form" : "create__form specific__form"}
        action=""
      >
        <article className="form__title">
          <h1>Datos específicos</h1>
        </article>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/calendar-icon.svg?alt=media&token=f4f27dce-042c-4918-9bda-9223b251c16f"
              alt="nombre-comunidad"
            />
            Fecha de inicio
          </span>
          <input
            className="create__input small"
            type="date"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/location-icon.svg?alt=media&token=1099361c-5a90-4b48-9ad6-b5f8a7a024d9"
              alt="nombre-comunidad"
            />
            Lugar
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/user-tie-icon.svg?alt=media&token=81a23b56-5058-4543-bd4b-687aaab725fa"
              alt="nombre-comunidad"
            />
            Nombre del responsable de la comunidad
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="
              https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/telephone-icon.svg?alt=media&token=d6d1fd49-1d52-4094-91f7-6ab7cb9a266a"
              alt="nombre-comunidad"
            />
            Teléfono del responsable
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/canales-icon.svg?alt=media&token=763164cf-ebb6-4ee3-9047-317653cb4155"
              alt="nombre-comunidad"
            />
            Canales
          </span>
          <label className="form__question" htmlFor="">
            <span>Aplicación número 1</span>
            <select className="create__input small" name="" id="" required>
              <option value="">Whatsapp</option>
              <option value="">Discord</option>
              <option value="">Telegram</option>
              <option value="">Signal</option>
            </select>
            <span>Enlace aplicación no 1</span>
            <input className="create__input small" type="url" required />
          </label>
          <label className="form__question" htmlFor="">
            <span>Aplicación número 2</span>
            <select className="create__input small" name="" id="" required>
              <option value="">Whatsapp</option>
              <option value="">Discord</option>
              <option value="">Telegram</option>
              <option value="">Signal</option>
            </select>
            <span>Enlace aplicación no 2</span>
            <input className="create__input small" type="url" required />
          </label>
        </label>
        <label className="button__first--section" htmlFor="">
          <button>Continuar</button>
        </label>
      </form>
      <form
        onSubmit={finalSubmit}
        className={form === 2 ? "create__form" : "create__form schedule__form"}
        action=""
      >
        <article className="form__title">
          <h1>Programación de actividades</h1>
        </article>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20(2).svg?alt=media&token=6ca9861b-028e-416d-b1c5-d005ad993436"
              alt="nombre-comunidad"
            />
            Nombre de actividad
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/calendar-icon.svg?alt=media&token=f4f27dce-042c-4918-9bda-9223b251c16f"
              alt="nombre-comunidad"
            />
            Fecha
          </span>
          <input
            className="create__input small"
            type="date"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/location-icon.svg?alt=media&token=1099361c-5a90-4b48-9ad6-b5f8a7a024d9"
              alt="nombre-comunidad"
            />
            Lugar
          </span>
          <input
            className="create__input small"
            type="text"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/time-icon.svg?alt=media&token=ff1ea43b-f0cc-4746-9ee8-a2f3186b2243"
              alt="nombre-comunidad"
            />
            Hora de inicio
          </span>
          <input
            className="create__input small"
            type="time"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/time-icon.svg?alt=media&token=ff1ea43b-f0cc-4746-9ee8-a2f3186b2243"
              alt="nombre-comunidad"
            />
            Hora de finalización
          </span>
          <input
            className="create__input small"
            type="time"
            name=""
            id=""
            required
          />
        </label>
        <label className="form__question" htmlFor="">
          <span className="question__span">
            <img
              className="form__icon"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/tematica-icon.svg?alt=media&token=b0884adc-1735-4d03-83e9-fe784af6cc76"
              alt=""
            />
            Descripción de la actividad
          </span>
          <textarea
            className="create__input text--area"
            name=""
            id=""
            cols="30"
            rows="5"
            required
          ></textarea>
        </label>
        <label className="button__add--more" htmlFor="">
          <button type="button">Agregar más actividades +</button>
        </label>
        <label className="button__first--section" htmlFor="">
          <button>Finalizar registro</button>
        </label>
      </form>
    </div>
  );
};

export default CreateCommunity;
