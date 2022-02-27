import styled from 'styled-components';
import ElementCardSection from '../CardSection'

const ElementSection = styled.section`
    background-color: #7cbba3;
    box-shadow: 0px 0px 5px black;
    height: 100vh;
    overflow: hidden;
    width:100%;
    z-index: 1;
    text-align: center;
`;

const Title = styled.h1`
    color: #fff;
    padding: 40px;
    font-size:3.5em;
    padding-top: 70px;
    font-family: 'Montserrat Alternates', sans-serif;
`

const Card = styled.div`
    margin-top: 13px;
    background-color: #b1b1b1;
    padding: 40px;
    width: 100%;
    height: 10vh;
    margin-left: auto;
    margin-right: auto; 
    font-size:3.5em;
    padding-top: 7px;
    font-family: 'Montserrat Alternates', sans-serif;
`

export default function Section() {

    return (
        <div className="ElementSection">
            <ElementSection>
                
                <Title>
                    Rifas <br /> na Veia
                </Title>

                <ElementCardSection/>

            </ElementSection>

        </div>
    )
}

