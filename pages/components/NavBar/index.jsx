import styled from 'styled-components';

const Nav = styled.div`
    background-color: #121212;
    box-shadow: 0px 0px 5px black;
    height: 50px;
    width: 100%;
    position: fixed;
    text-align: center;
    z-index: 99;
    border-bottom-left-radius: 50px 20px;
    border-bottom-right-radius: 50px 20px;
    top: 0;
`;

const Title = styled.h1`
    color: #fff;
    font-weight: bold;
    font-size:2em;
    padding-top: 7px;
    font-family: 'Montserrat Alternates', sans-serif;
`

export default function NavBar() {

    return (
        <div className="Nav">
            <Nav>
                <Title>
                    
                </Title>
            </Nav>
        </div>
    )
}

