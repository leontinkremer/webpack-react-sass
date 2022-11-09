//Build-in modules
import React, { useState, useEffect } from "react";

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

// Styles
import "./_layout.scss";

const RegisterForm = ({ onRegisterClick }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "male",
    qualities: [],
  });
  const [qualities, setQualities] = useState({});
  const [professions, setProfession] = useState();
  const [errors, setErrors] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
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
  };

  useEffect(() => {
    validate();
    validate() === true ? setButtonDisabled(false) : setButtonDisabled(true);
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <div className="login-box">
      <Heading
        size="lg"
        weight="light"
        color="$soft-neutral-color-0"
        align="center"
        marginBottom="sm"
      >
        Registrieren
      </Heading>
      <form className="login-box__inner" action="" onSubmit={handleSubmit}>
        <TextField
          label="E-Mail"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
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
          name="qualities"
        />
        <p className="login-box__inner__span">
          Bereits registriert?
          <button
            className="login-box__inner__span__link"
            onClick={() => onRegisterClick()}
          >
            Einloggen.
          </button>
        </p>
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
            Registrieren
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
