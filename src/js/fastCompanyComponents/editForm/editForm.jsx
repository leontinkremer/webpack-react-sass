//Build-in modules
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

// Third pary modules
import PropTypes from "prop-types";

// Custom modules
import api from "../../apps/FastCompany/api";
import SelectField from "../common/form/selectField";

// Utils
import { validator } from "../../utils/validator";

// Components
import TextField from "../../preComponents/TextField";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

// Styles
import "./_layout.scss";

const EditForm = ({ onRegisterClick }) => {
  const params = useParams();
  const { userId } = params;

  console.log("userId", userId);
  let history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
    sex: "male",
    qualities: [],
    license: false,
  });
  const [user, setUser] = useState();
  const [qualities, setQualities] = useState({});
  const [professions, setProfession] = useState();
  const [errors, setErrors] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  useEffect(() => {
    console.log("user", user);
    validate();
    validate() === true ? setButtonDisabled(false) : setButtonDisabled(true);
  }, [user]);

  const handleChange = (target) => {
    console.log("professions", professions);
    let valueObject = {};

    // profession
    for (let [profession, objProfDetails] of Object.entries(professions)) {
      if (objProfDetails._id === target.value) {
        valueObject = objProfDetails;
        console.log("ausgewählter Beruf", objProfDetails);
      }
      console.log("objProfDetails", objProfDetails);
    }

    // qualities
    if (target.name === "qualitites") {
      target.value.forEach((element) => {
        console.log("element", element);
      });
    }

    console.log("target", target);
    console.log("typeof target", typeof target);
    console.log("target.name", target.name);
    console.log("target.value", target.value);
    console.log("typeof target.value", typeof target.value);
    console.log(typeof target.value === "string");

    switch (target.name) {
      case "profession":
        setUser((prevState) => ({ ...prevState, [target.name]: valueObject }));
        break;

      case "qualities":
        console.log("target.value", target.value);
        target.value.forEach((element) => {
          const qualityId = element.value;
          console.log("qualityId", qualityId); // qualityId of user
          console.log("qualities", qualities); // all qualities

          Object.values(qualities).map((quality) => {
            console.log("quality", quality);
            if (quality._id === qualityId) {
              console.log("quality._id", quality._id);
            }
          });
        });
        break;

      default:
        setUser((prevState) => ({ ...prevState, [target.name]: target.value }));
    }
  };

  const validatorConfig = {
    name: {
      isRequired: { message: "Поле обязательно для заполнения." },
    },
    email: {
      isRequired: { message: "Поле обязательно для заполнения." },
      isEmail: { message: "Посьта введена не корректно." },
    },
    password: {
      isRequired: { message: "Поле обязательно для заполнения." },
      isCapital: {
        message: "Пароль должен содержать хотя бы одну заглавную букву.",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру.",
      },
      isMin: {
        message: "Пароль должен быть не короче 8 знаков.",
      },
    },
    profession: {
      isRequired: { message: "Поле обязательно для заполнения." },
    },
    license: {
      isRequired: { message: "Поле обязательно для заполнения." },
    },
  };

  // useEffect(() => {
  //   validate();
  //   validate() === true ? setButtonDisabled(false) : setButtonDisabled(true);
  // }, [data]);

  const validate = () => {
    const errors = validator(user, validatorConfig);

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  */

  const testQualities = [
    { label: "Нудила", value: "67rdca3eeb7f6fgeed471198" },
    { label: "Неуверенный", value: "67rdca3eeb7f6fgeed471103" },
    { label: "Странный", value: "67rdca3eeb7f6fgeed471100" },
  ];
  console.log("testQualities", testQualities);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    api.users.update(userId, user);
    history.push(`/users/${user._id}`);
  };

  if (user) {
    console.log("user.profession.name", user.profession.name);
    console.log("user.email", user.email);
    const userQualities = user.qualities;
    let userQualitiesForMultiSelect = Object.keys(userQualities).map(
      (userQuality) => ({
        label: userQualities[userQuality].name,
        value: userQualities[userQuality]._id,
      })
    );
    console.log("user.qualities", user.qualities);
    console.log("userQualitiesForMultiSelect", userQualitiesForMultiSelect);

    return (
      <div className="login-box">
        <Heading
          size="lg"
          weight="light"
          color="$soft-neutral-color-0"
          align="center"
          marginBottom="sm"
        >
          Изменить
        </Heading>
        <form className="login-box__inner" action="" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextField
            label="E-Mail"
            name="email"
            value={user.email}
            onChange={handleChange}
            error={errors.email}
          />
          <SelectField
            label="Beruf"
            value={user.profession._id}
            name="profession"
            onChange={handleChange}
            defaultOption="Bitte wähle Deinen Beruf aus."
            options={professions}
            error={errors.profession}
          />
          <RadioField
            value={user.sex}
            onChange={handleChange}
            options={[
              {
                name: "männlich",
                value: "male",
              },
              {
                name: "weiblich",
                value: "female",
              },
              {
                name: "Divers",
                value: "diverse",
              },
            ]}
            name="sex"
            label="Geschlecht"
          />
          {console.log("user.qualities", user.qualities)}

          <MultiSelectField
            options={qualities}
            // options={testQualities}
            onChange={handleChange}
            // defaultValue={user.qualities}
            defaultValue={userQualitiesForMultiSelect}
            name="qualities"
          />

          {/* 
          <TextField
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            firstIcon="bi-eye"
            secondIcon="bi-eye-slash"
            error={errors.password}
          />
          <SelectField
            label="Beruf"
            value={data.profession}
            name="profession"
            onChange={handleChange}
            defaultOption="Bitte wähle Deinen Beruf aus."
            options={professions}
            error={errors.profession}
          />
          <RadioField
            value={data.sex}
            onChange={handleChange}
            options={[
              {
                name: "männlich",
                value: "male",
              },
              {
                name: "weiblich",
                value: "female",
              },
              {
                name: "Divers",
                value: "diverse",
              },
            ]}
            name="sex"
            label="Geschlecht"
          />
          <MultiSelectField
            options={qualities}
            onChange={handleChange}
            defaultValue={data.qualities}
            name="qualities"
          />
          <CheckBoxField
            value={data.license}
            onChange={handleChange}
            error={errors.license}
            name="license"
          >
            Подтвердить лицензионное соглашение
          </CheckBoxField>

          */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              type="primary"
              mainColor="$tertiary-color-regular"
              fontColor="$primary-color-regular"
              disabled={buttonDisabled}
            >
              Обновить
            </Button>
          </div>
        </form>
      </div>
    );
  }
  return "loading...";
};

export default EditForm;
