import React from "react";
import styled from "styled-components";
import {theme} from "../../config/colorTheme";



const Tagline= styled.p`
  font-size: 2vw;
  padding:0.5vw 0;
  font-family: 'Roboto', serif;
  font-weight: 700;
  color:${theme.black};
  margin:auto;
  text-align:center;
`;

const Container = styled.div`
width:${(props)=>props.isSmall? "21vw": "40vw"};
margin-bottom:5vw;
`;
const Line = styled.div`
margin-top:${(props)=>props.isSmall? "1.8vw": "3.2vw"};
`;

const Text = styled.p`
  font-size: ${(props)=>props.isSmall? "1.8vw": "3.2vw"};
  padding:0.1vw 0.6vw;
  
  font-family: 'Roboto', serif;
  font-weight: 700;
  color:${theme.black};
  margin:0;
  text-align:left;
  display:inline-block;
  background-color:${(props)=>props.highlight?theme.secondaryColor:"none"};
`;

export default function Hero(props){
    return <Container isSmall={props.isSmall}>
        <Line isSmall={props.isSmall}>
            <Text isSmall={props.isSmall}>The</Text>
            <Text isSmall={props.isSmall} highlight={true}>Dream</Text>
            <Text isSmall={props.isSmall} >Collective</Text>
        </Line>
       {!props.isSmall && <Tagline>Re-imagine the Future</Tagline>}
    </Container>
        
}