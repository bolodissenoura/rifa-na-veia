import styled from 'styled-components';
import ElementCardSection from '../CardSection'

const ElementSection = styled.section`
    background-color: #313552;
    box-shadow: 0px 0px 5px black;
    height: auto;
    width:100%;
    z-index: 1;
    text-align: center;
`;

const ElementImg = styled.div`
    margin-top:50px;
`




export default function Section() {

    return (
        <div className="ElementSection">
            <ElementSection>
                <ElementImg>
                    <img src="logo.png" alt="" />
                </ElementImg>

                <ElementCardSection/>

            </ElementSection>

        </div>
    )
}

