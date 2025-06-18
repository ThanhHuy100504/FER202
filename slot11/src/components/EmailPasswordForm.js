import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm kiểm tra email hợp lệ
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setEmailValid(isValidEmail(email));
    setPasswordValid(password.length >= 8);
    setFormValid(isValidEmail(email) && password.length >= 8);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isInvalid={emailTouched && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          placeholder="Nhập mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          isInvalid={passwordTouched && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-4" variant="primary" type="submit" disabled={!formValid}>
        Submit
      </Button>
    </Form>
  );
};

export default EmailPasswordForm;
