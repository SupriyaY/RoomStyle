import React from 'react'
import styled from 'styled-components'


export const HomeHeader = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: center;
background: white;
position: fixed;
align-items:center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
a {
    text-decoration: none;
    font-size: 2.0em;  
    font-family: 'Raleway', sans-serif;
    color: #4CA1AF;
    :hover {
        color: #fff;
    }


}    
`;

export const Header = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: center;
background: linear-gradient(to right, #C4E0E5, #4CA1AF);
align-items:center;
 a {
    text-decoration: none;
 }
    
`


export const Footer = styled.div`
width: 100vw;
height: 10vh;
background: linear-gradient(to right, #C4E0E5, #4CA1AF);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;




export default{
HomeHeader,
Header,
Footer,


}