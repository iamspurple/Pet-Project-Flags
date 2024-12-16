import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { Container } from './Container';
import {IoMoonOutline , IoMoonSharp} from 'react-icons/io5';


const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--color-elements);

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
    color: var(--color-text);
    font-weight: var(--fw-bold);
    text-decoration: none;
    font-size: var(--fs-sm);
`;

const ModeSwitcher = styled.div`
    cursor: pointer;
    color: var(--color-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-regular);
    text-transform: capitalize;
`;

export const Header = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((theme === 'light' ? 'dark' : 'light'))
    };


    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    },[ theme]);

  return (
    <HeaderEl>
        <Container>
            <Wrapper>
                <Title>Where in the world?</Title>
                <ModeSwitcher onClick={toggleTheme}>
                    {theme === "light" ? (<IoMoonOutline size='14px'/>) :(<IoMoonSharp size='14px'/> )}
                    <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                </ModeSwitcher>
            </Wrapper>
        </Container>
    </HeaderEl>
  )
};




