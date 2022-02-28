import styled from 'styled-components';


const ElementCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 43px;
    width: auto;
    height: auto;
    .card{
        background-color: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        height: 450px;
    }
    .img-content{
        background-image: url('dinheiro.jpg');
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
        width:auto;
        height:200px;
    }
`

const ElementText = styled.div`
    padding:10px;
    .subtitle{
        padding-top:20px;
    }
    h1{
        font-size: 1.5em;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight:  700;
    }
    h2{
        padding-top: 5px;
        font-size: 1.2em;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight:  700;
        color: #1d1d1d;
    }
    span{
        font-size: 1em;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight:  600;
        color: #3b3b3b;
    }
    hr{
        margin-top: 20px;
        width: 95%;
        color: #c9c9c994;
    }
    .bt-default {
        background-color: #6b965b;
        border-radius: 9px;
        box-shadow: #757575 0 10px 20px -10px;
        box-sizing: border-box;
        color: #FFFFFF;
        font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
        font-size: 16px;
        font-weight: 700;
        margin-top: 12px;
        line-height: 24px;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 8px 18px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: fit-content;
        word-break: break-word;
        border: 0;
    }
    .encerrado{
        background-color: #513dc4;
        cursor: auto;
    }
    .participar{
        background-color: #54c43d;
        cursor: pointer;
    }
    .number{
        background-color: #979797;
        border-radius: 5px;
        padding: 3px;
    }
`



export default function Card() {

    return (
        <>
            <ElementCard>
                <div className="card">
                    <div className="img-content">
                    </div>
                    <ElementText>
                        <h1>JOGA 1 GANHA R$300</h1>
                        <div className="subtitle">
                            <h2>Data do Sorteio: <span>28/02/2022</span> </h2>
                            <h2>Valor: <span>R$ 1,00</span> </h2>
                        </div>
                        <hr />
                        <div className="footer">
                            <h2>Sorteado</h2>
                            <h2><span>@daniellimae</span> <span className='number'>1000</span></h2>
                            <button className="bt-default participar" role="button">
                                PARTICIPAR
                            </button>
                        </div>

                    </ElementText>

                </div>
                <div className="card">
                    <div className="img-content">
                    </div>
                    <ElementText>
                        <h1>JOGA 1 GANHA R$300</h1>
                        <div className="subtitle">
                            <h2>Data do Sorteio: <span>28/02/2022</span> </h2>
                            <h2>Valor: <span>R$ 1,00</span> </h2>
                        </div>
                        <hr />
                        <div className="footer">
                            <h2>Sorteado</h2>
                            <h2><span>@daniellimae</span> <span className='number'>1000</span></h2>
                            <button className="bt-default encerrado" role="button">
                                ENCERRADO
                            </button>
                        </div>

                    </ElementText>
                </div>
                <div className="card">
                    <div className="img-content">
                    </div>
                    <ElementText>

                    </ElementText>
                </div>

            </ElementCard>
        </>
    )
}

