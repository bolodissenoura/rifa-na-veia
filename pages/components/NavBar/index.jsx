import styled from 'styled-components';

const Nav = styled.div`
    background-color: #121212;
    box-shadow: 0px 0px 5px black;
    height: 50px;
    width: 100%;
    position: fixed;
    text-align: center;
    z-index: 99;
    top: 0;


    #menu__toggle {
        opacity: 0;
    }
    #menu__toggle:checked + .menu__btn > span {
        transform: rotate(45deg);
    }
    #menu__toggle:checked + .menu__btn > span::before {
        top: 0;
        transform: rotate(0deg);
    }
    #menu__toggle:checked + .menu__btn > span::after {
        top: 0;
        transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
        left: 0 !important;
    }
    .menu__btn {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 26px;
        height: 26px;
        cursor: pointer;
        z-index: 1;
    }
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition-duration: .25s;
    }
    .menu__btn > span::before {
        content: '';
        top: -8px;
    }
    .menu__btn > span::after {
        content: '';
        top: 8px;
    }
    .menu__box {
        display: block;
        position: fixed;
        top: 0;
        left: -100%;
        width: 300px;
        height: 100%;
        margin: 0;
        padding: 80px 0;
        list-style: none;
        background-color: #121212;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
        transition-duration: .25s;
    }
    .menu__item {
        display: block;
        padding: 12px 24px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        transition-duration: .25s;
    }
    .menu__item:hover {
    background-color: #272727;
    }



`;



export default function NavBar() {

    return (
        <div className="Nav">
            <Nav>
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a class="menu__item" href="#">Contato</a></li>
                        <li><a class="menu__item" href="#">Regras</a></li>
                        <li><a class="menu__item" href="#">Ganhadores</a></li>
                        <li><a class="menu__item" href="#">Meus Bilhetes</a></li>
                        
                    </ul>
                </div>
            </Nav>
        </div>
    )
}

