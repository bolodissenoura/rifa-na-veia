import styled from 'styled-components';

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

const ElementCardSection = styled.div`
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



export default function CardSection() {

    return (
        <>
            <ElementCenterSection>
                <ElementCardSection>
                    <div className="card">
                        <div className="img-content">
                        </div>

                    </div>
                    <div className="card">
                        <div className="img-content">

                        </div>
                    </div>
                    <div className="card">
                        <div className="img-content">

                        </div>
                    </div>

                </ElementCardSection>
            </ElementCenterSection>
        </>
    )
}

