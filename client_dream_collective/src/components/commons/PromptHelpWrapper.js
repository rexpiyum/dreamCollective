import React from "react";
import styled from "styled-components";
import { theme } from "../../config/colorTheme";
import Prompt from "./Prompt";
import Help from "./help/Help"

const Text = styled.p`
  font-size: ${(props) => props.isSmall ? "1.2vw" : "2vw"};
  font-family: 'Roboto', serif;
  font-weight: ${(props) => props.isSmall ? "300" : "700"};
  color:${(props) => props.isDisabled ? theme.darkGray : theme.black};
  width:100%;
  margin:0;
  margin-top:${(props) => props.marginTop ? props.marginTop : "0"};
  margin-bottom:${(props) => props.marginBottom ? props.marginBottom : "0"};
  text-align:left;
`;

const Container = styled.div`
    display:flex;
    width:100%;
    margin:0;
    margin-top:${(props) => props.marginTop ? props.marginTop : "0"};
    margin-bottom:${(props) => props.marginBottom ? props.marginBottom : "0"};
    padding-bottom:0.5vw;
    `;

const HelpContainer = styled.div`
    width:auto;
    position:relative;
`;

export default function PromptHelpWrapper(props) {
    return <Container marginTop={props.marginTop} marginBottom={props.marginBottom}>
        <Prompt text={props.promptText}></Prompt>
        <HelpContainer>
            <Help body={props.helpBody}></Help>
        </HelpContainer>
    </Container>

}
