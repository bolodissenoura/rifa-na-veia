import styled from 'styled-components';

const ElementSection = styled.section`
    background-color: #fff;
    height: auto;
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




export default function SectionGanhadores() {

    return (
        <div className="ElementSection">
            <ElementSection>
                <ElementImg>
                    <h1>Ganhadores 🏆</h1>
                    <p>Você pode estar aqui em um futuro próximo 👀</p>
                </ElementImg>
            </ElementSection>
        </div>
    )
}

