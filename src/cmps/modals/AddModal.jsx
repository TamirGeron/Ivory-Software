import { NeonButton } from "../buttons/NeonButton";

export const AddModal = ({ onSubmit, toggleOnAdd, form, setForm }) => {
  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.id]: target.value,
    });
  };

  const onCheckBoxChange = ({ target }) => {
    let newFavs = form.favoriteFoods;
    if (target.checked) newFavs.push(target.value);
    else {
      const favIdx = newFavs.findIndex((curFavs) => curFavs === target.value);
      newFavs.splice(favIdx, 1);
    }
    setForm({ ...form, favoriteFoods: newFavs });
  };

  const uploadFile = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("img").setAttribute("src", event.target.result);
    };
    reader.readAsDataURL(file);

    setForm({ ...form, file: reader });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <section className="add-modal-container flex align-center justify-center">
      <div className="add-modal">
        <div className="add-modal-layout flex flex-column">
          <button
            className="close-modal-btn pointer"
            onClick={() => toggleOnAdd()}
          >
            X
          </button>
          <form className="form-add flex flex-column">
            <div className="label-input-form">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={(ev) => handleChange(ev)}
                type="text"
                id="firstName"
                placeholder="Israel"
                name="firstName"
                defaultValue={form.firstName}
              />
            </div>
            <div className="label-input-form">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={(ev) => handleChange(ev)}
                type="text"
                id="lastName"
                placeholder="Israeli"
                name="lastName"
                defaultValue={form.lastName}
              />
            </div>
            <div className="label-input-form">
              <label htmlFor="email">Email</label>
              <input
                onChange={(ev) => handleChange(ev)}
                type="email"
                id="email"
                placeholder="IsraelIsraeli@gmail.com"
                name="email"
                defaultValue={form.email}
              />
            </div>
            <div className="label-input-form">
              <label>Status</label>
              <div>
                <span id="rangeValue">{parseInt(form.status)}</span>
                <input
                  className="range"
                  type="range"
                  id="status"
                  min="0"
                  max="10"
                  onChange={(ev) => handleChange(ev)}
                  defaultValue={form.status}
                ></input>
              </div>
            </div>

            <div className="label-input-form">
              <label>Last Login Date</label>
              <input
                defaultValue={form.lastLoginDate}
                type="datetime-local"
                id="lastLoginDate"
                onChange={(ev) => handleChange(ev)}
              />
            </div>

            <div className="label-input-form">
              <label>Favorites Food</label>
              <div className="flex flex-column">
                <div>
                  <input
                    type="checkbox"
                    id="pizza"
                    value="Pizza"
                    onChange={(ev) => onCheckBoxChange(ev)}
                  />
                  <label htmlFor="pizza">Pizza</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="hamburger"
                    value="Hamburger"
                    onChange={(ev) => onCheckBoxChange(ev)}
                  />
                  <label htmlFor="hamburger">Hamburger</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="pasta"
                    value="Pasta"
                    onChange={(ev) => onCheckBoxChange(ev)}
                  />
                  <label htmlFor="pasta">Pasta</label>
                </div>
              </div>
            </div>

            <div className="label-input-form">
              <label>Is Admin</label>
              <select
                id="isAdmin"
                onChange={(ev) => handleChange(ev)}
                defaultValue={form.isAdmin}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="flex flex-column align-center file-img ">
              <label htmlFor="file">Select Image:</label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={(ev) => uploadFile(ev)}
              ></input>
              <img id="img" src={require("../../assets/imgs/Camel.jpeg")} />
            </div>
            {/* <button className="submit-form" type="submit">
              Submit
            // </button> */}
            <div className="submit-form" type="submit" onClick={handleSubmit}>
              <NeonButton text={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
