import styled from 'styled-components';

const Bt = styled.button`
    background-color: #3740c0;
    box-shadow: 0px 0px 5px black;
    height: 50px;
    margin-right: 40px;
    text-align: center;
`;

const Title = styled.h1`
    color: #fff;
    font-size:1.5em;
    padding-top: 7px;
    font-family: 'Montserrat Alternates', sans-serif;
`

export default function Button() {

    return (
        <div className="Bt">
            <Bt>
                <Title>
                    Clique
                </Title>

            </Bt>

        </div>
    )
}

