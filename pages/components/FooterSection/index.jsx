import styled from 'styled-components';

const ElementFooter = styled.div`
    background-color: #121212;
    box-shadow: 0px 0px 5px black;
    height: 50px;
    width: 100%;
    text-align: center;
    z-index: 99;
    top: 0;

    h1{
        color:#ffff;
        padding-top: 13px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 18px;
    }
    a{
        text-decoration: none;
    }
`;



export default function FooterSection() {

    return (
        <div className="ElementFooter">
            <ElementFooter>
                <a target="_blank" href="https://bolodissenoura.github.io/daniellimae/"><h1>© 2022 Copyright: Daniel Lima </h1></a>
            </ElementFooter>
        </div>
    )
}

