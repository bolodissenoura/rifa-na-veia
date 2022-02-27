import styled from 'styled-components';

const FirstSect = styled.section`
    background-color: #7cbba3;
    box-shadow: 0px 0px 5px black;
    height: 80vh;
    width:100%;
    z-index: 1;
    margin-top: -15px;
    text-align: center;
    position: fixed;
`;

const Title = styled.h1`
    color: #fff;
    font-size:1.5em;
    padding-top: 7px;
    font-family: 'Montserrat Alternates', sans-serif;
`

export default function FirstSection() {

    return (
        <div className="FirstSect">
            <FirstSect>
                <Title>
                    Clique
                </Title>

            </FirstSect>

        </div>
    )
}

