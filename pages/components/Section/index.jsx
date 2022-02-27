import styled from 'styled-components';
import ElementCardSection from '../CardSection'
import SectionContato from '../SectionContato';

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




export default function Section() {

    return (
        <div className="ElementSection">
            <ElementSection>
                <Title>
                    Rifas <br /> na Veia
                </Title>

                <SectionContato/>
                    

                <ElementCardSection/>

            </ElementSection>

        </div>
    )
}

