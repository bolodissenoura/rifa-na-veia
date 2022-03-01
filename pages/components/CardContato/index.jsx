import styled from 'styled-components';

const ElementCardContato = styled.div`
    text-align: center;
    margin-top: 60px;
    .fa {
        padding: 20px;
        font-size: 30px;
        margin-right: 10px;
        width: 50px;
        text-align: center;
        text-decoration: none;
    }

    .fa:hover {
        opacity: 0.7;
    }

    /* instagram */
    .fa-instagram {
        background: #121212;
        border-radius: 15px;
        color: white;
    }

    /* whatsapp */
    .fa-whatsapp {
        background: #34af24;
        border-radius: 15px;
        color: white;
    }
    .fa-envelope {
        background: #121212;
        border-radius: 15px;
        color: white;
    }

`;



export default function CardContato() {

    return (
        <>
            <ElementCardContato>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-whatsapp"></a>
                <a href="#" class="fa fa-envelope"></a>
                
            </ElementCardContato>
        </>
    )
}

