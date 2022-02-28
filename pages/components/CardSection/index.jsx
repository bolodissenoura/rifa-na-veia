import styled from 'styled-components';
import Card from '../Card';

const ElementCenterSection = styled.div`
    width: 70%; 
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    @media only screen and (max-width: 600px) {
        width: auto !important; 
    }
`





export default function CardSection() {

    return (
        <>
            <ElementCenterSection>
                <Card />
            </ElementCenterSection>
        </>
    )
}

