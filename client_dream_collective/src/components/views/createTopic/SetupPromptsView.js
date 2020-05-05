import React, { Component } from "react";
import styled, { ThemeConsumer } from "styled-components";
import LoadingWidget from "../../LoadingWidget";
import { devices } from "../../../devices.js"
import Header from "../../commons/header/Header"
import { theme } from "../../../config/colorTheme";
import Prompt from "../../commons/Prompt";
import TextArea from "../../commons/TextArea"
import Category from "./Category"
import Footer from "../../commons/Footer"
import NewFeature from "../../feature/NewFeature";
import NewPrompt from "./NewPrompt";
import Text from "../../commons/Text";




const Wrapper = styled.div`
  width:100%;
  position:relative;
`;

const ContentWrapper = styled.div`
  margin:5vw auto;
  position:relative;
  width:90vw;

  @media ${devices.mobile} {
    flex-direction:column;
    height:auto;
  }
`;

const FeatureContainer = styled.div`
margin:auto;
  display:flex;
  width:70%;
  justify-content:space-between;
  margin-top:3vw;
`;

const AddNewPrompt = styled.div`
  width:70%;
  margin:3vw 0;
  font-size: ${(props)=>props.isSmall? "1.2vw":"2vw"};
  font-family: 'Roboto', serif;
  font-weight: ${(props)=>props.isSmall? "300":"700"};
  color:${(props) => props.isDisabled?theme.darkGray: theme.black};
  width:100%;
  text-align:left;
  background-color:${theme.lightGray};
  padding:3vw 2vw; 
  transition:transform 0.2s;
  cursor: pointer;

  &:hover{
    transform:scale(1.02)
  }
`;




const categories = ["product", "space", "service"]

var APICalls = require("../../../utils/APICalls")



class SetupPromptsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null,
      prompts: [{
        text: "",
        startingLine: ""
      }]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    APICalls.readTopic(this.props.match.params.id, (data) => this.setState({ topic: data }))
  }



  render() {
    if (this.state.topic == null) return <LoadingWidget></LoadingWidget>;

    const mainHelp = <Text text={"Encourage participants to tell you a story on how they see this dream " +this.state.topic.name +
    " being used. What do you want them to tell you about their creations? Is it to be used by anyone in specific?"}></Text>

    return (
      <Wrapper>
        <Header text={"Create prompts for people to tell you about their dream " + this.state.topic.name} helpBody={mainHelp}></Header>
        <ContentWrapper>
          {this.state.prompts.map((item, key) =>
            <NewPrompt topicName={this.state.topic.name} promptText={item.text} promptStartingLine={item.startingLine}></NewPrompt>
          )}
          <AddNewPrompt onClick={()=>this.addNewPrompt()}> + Add another prompt</AddNewPrompt>
        </ContentWrapper>
        {<Footer onDoneCallback={() => APICalls.updateTopic(this.state.topic._id, this.state, (data) => this.props.history.push("/newTopic/3/" + this.state.topic._id))}></Footer>}
      </Wrapper>
    )
  }


  handleCreateTopicCallback(data) {
    this.props.history.push('/newTopic/2/data._id');
  }

  addNewPrompt(){
    var prompts = this.state.prompts;
    prompts.push({text:"", startingLine:""})
    this.setState({prompts:prompts})
  }


}



export default SetupPromptsView;
