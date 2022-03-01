import styled from 'styled-components';
import React, { useState } from "react";

const ElementForm = styled.div`
    .no-arrow {
  -moz-appearance: textfield;
}
.no-arrow::-webkit-inner-spin-button {
  display: none;
}
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};




export default function FormMeusBilhetes() {
  const [phone, setPhone] = useState("");
  return (

    <>

      <ElementForm>

        <form action="">
          <input
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            placeholder="Telefone - formato: (00) 00000-0000"
          />
        </form>

      </ElementForm>
    </>
  )

}

