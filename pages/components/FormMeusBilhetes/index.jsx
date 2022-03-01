import styled from 'styled-components';

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




export default function FormMeusBilhetes() {
    return (
        
        <>
            
            <ElementForm>
                
                <form action="">
                    <input type="text" className="form-control" placeholder="Celular" id="celular" name="celular" />
                </form>
                
            </ElementForm>
        </>
    )

}

