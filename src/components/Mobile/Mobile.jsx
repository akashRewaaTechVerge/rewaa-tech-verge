
import styled, { createGlobalStyle } from "styled-components";
export const Styles = {
  Wrapper: styled.main`
      background-color: #FFFFFF;
      height: auto;
    `
};

export const Navbar = {
  Wrapper: styled.nav`
      flex: 1;
      align-self: flex-start;
      padding: 1rem 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
     background-color: white;
    `,
  Logo: styled.h1`
      border: 1px solid gray;
      padding: 0.5rem 1rem;
    `,
  Items: styled.ul`
      display: flex;
      list-style: none;
    `,
  Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
    `
};

export const MobileNavbar = {

  Wrapper: styled(Navbar.Wrapper)`
      position: fixed;
      width: 100%;
      bottom: 0;
      background-color:#FFFFFF;
      justify-content: center;
    `,
  Items: styled(Navbar.Items)`
      flex: 1;
      padding: 0 2rem;
      justify-content: space-around;
    `,
  Item: styled(Navbar.Item)`
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.2rem;
    `,
  Icon: styled.span``
};

export const CSSReset = createGlobalStyle`
    *,
    *::before, 
    *::after {
      margin: 0; 
      padding: 0;
      box-sizing: inherit;
    }
  
    html {
      font-size: 62.5%; /*1rem = 10px*/
      box-sizing: border-box;      
    }  
  
    body {
      font-size: 1.4rem;
      font-family: sans-serif;
    }
  `;



