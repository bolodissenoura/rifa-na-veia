import styled from 'styled-components';

const ElementSectionContato = styled.ul`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    
`;

const ElementListContato = styled.li`
    background: #fff;
    margin: 8px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    
    border-radius: 15px;
    padding: 17px 33px;
    border: 1px solid transparent;
    cursor: pointer;
    z-index: 5;
    -webkit-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
    a{
        text-decoration: none!important;
        color: #141414;
        font-size: 30px;
        font-family: 'Roboto', sans-serif;

    }
`;


export default function SectionContato() {

    return (
        <div className="ElementSectionContato">
            <ElementSectionContato>
                <ElementListContato>
                    <a href="/regras">
                        <p>Regras</p>
                    </a>
                </ElementListContato>
                <ElementListContato>
                    <a href="">
                        <p>Contato</p>
                    </a>
                </ElementListContato>

            </ElementSectionContato>

        </div>
    )
}

