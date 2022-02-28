import styled from 'styled-components';
import CardSection from '../CardSection';

const ElementSection = styled.section`
    background-color: #fff;
    box-shadow: 0px 0px 5px black;
    height: 1000vh;
    width:100%;
    z-index: 1;
    text-align: center;

`;

const ElementImg = styled.div`
    margin-top:50px;
    img{
    }
    h1{
        padding-top: 50px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 50px;
        color: #121212;
    }
    p{
        padding-top: 20px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 20px;
        color: #121212;
    }
`




export default function Section() {

    return (
        <div className="ElementSection">
            <ElementSection>
                <ElementImg>
                    <h1>BOA SORTE 🍀</h1>
                    <p>Um real pode mudar sua vida pra sempre.</p>
                </ElementImg>
                <CardSection/>

            </ElementSection>

            

        </div>
    )
}

