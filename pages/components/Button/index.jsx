import styled from 'styled-components';

const Bt = styled.button`
    background-color: #c03737;
    box-shadow: 0px 0px 5px black;
    height: 50px;
    text-align: center;
    border-bottom-left-radius: 50px 20px;
    border-bottom-right-radius: 50px 20px;
    position: fixed;
    margin-left: 40%;
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

