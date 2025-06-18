import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const FullValidationForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [countryTouched, setCountryTouched] = useState(false);
  const [agreeTouched, setAgreeTouched] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isNameValid = name.trim().length >= 3;
    const isGenderValid = gender !== "";
    const isCountryValid = country !== "";
    const isAgreeValid = agree;

    setFormValid(isNameValid && isGenderValid && isCountryValid && isAgreeValid);
  }, [name, gender, country, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          isInvalid={nameTouched && name.trim().length < 3}
        />
        <Form.Control.Feedback type="invalid">
          Name must be at least 3 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Gender</Form.Label>
        <div onBlur={() => setGenderTouched(true)}>
          <Form.Check
            inline
            label="Male"
            type="radio"
            name="gender"
            id="genderMale"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Female"
            type="radio"
            name="gender"
            id="genderFemale"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Other"
            type="radio"
            name="gender"
            id="genderOther"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {genderTouched && gender === "" && (
          <div className="text-danger mt-1">Please select a gender.</div>
        )}
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Country</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={() => setCountryTouched(true)}
          isInvalid={countryTouched && country === ""}
          isValid={countryTouched && country !== ""}
        >
          <option value="">-- Select Country --</option>
          <option value="vn">Đà Nẵng</option>
          <option value="hcm">TP.HCM</option>
          <option value="hn">Hà Nội</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select a country.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          onBlur={() => setAgreeTouched(true)}
          isInvalid={agreeTouched && !agree}
          feedback="You must agree before submitting."
        />
        {!agree && agreeTouched && (
          <div className="text-danger mt-1">
            You must agree to the terms and conditions.
          </div>
        )}
      </Form.Group>

      <Button className="mt-4" variant="primary" type="submit" disabled={!formValid}>
        Submit
      </Button>
    </Form>
  );
};

export default FullValidationForm;
