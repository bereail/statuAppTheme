// src/emails/EmailTemplate.tsx
import * as React from "react";

type Props = {
  firstName: string;
  message: string;
  email: string;
};

export default function EmailTemplate({ firstName, message, email }: Props) {
  return (
    <div>
      <h1>Hola {firstName}</h1>
      <p>{message}</p>
      <p>Responder a: {email}</p>
    </div>
  );
}
