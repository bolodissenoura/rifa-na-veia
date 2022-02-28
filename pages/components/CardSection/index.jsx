import styled from 'styled-components';


const ElementCardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 43px;
    width: auto;
    height: auto;
    .card{
        background-color: #121212;
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
        <div className="ElementCardSection">
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
        </div>
    )
}

