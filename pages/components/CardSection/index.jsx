import styled from 'styled-components';
import CardRifa from '../CardRifa'

const ElementCardSection = styled.div`
    margin-top: 13px;
    background-color: #fff;
    padding: 40px;
    width: 70%;
    height: 60vh;
    overflow-y: scroll;
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
                <CardRifa/>
                <CardRifa/>
                <CardRifa/>
                <CardRifa/>
                <CardRifa/>
                <CardRifa/>
                


            </ElementCardSection>
        </div>
    )
}

