import styled from 'styled-components';
import CardRifa from '../CardRifa'

const ElementCardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 50px;
    margin-top: 13px;
    background-color: #121212;
    padding: 43px;
    width: 73%;
    height: auto;
    margin-left: auto;
    margin-right: auto; 
    font-size:3.5em;
    padding-top: 7px;
    font-family: 'Montserrat Alternates', sans-serif;
`


export default function CardSection() {

    return (
        <div className="ElementCardSection">
            <ElementCardSection>
                <CardRifa />
                <CardRifa />
                <CardRifa />
                <CardRifa />
                <CardRifa />
                <CardRifa />
            </ElementCardSection>
        </div>
    )
}

