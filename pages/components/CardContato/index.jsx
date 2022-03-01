import styled from 'styled-components';
import Link from 'next/link'

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
                <Link href="#">
                    <a  className="fa fa-instagram"></a>
                </Link>
                <Link href="#">
                    <a  className="fa fa-whatsapp"></a>
                </Link>
                <Link href="#">
                    <a  className="fa fa-envelope"></a>
                </Link>

            </ElementCardContato>
        </>
    )
}

