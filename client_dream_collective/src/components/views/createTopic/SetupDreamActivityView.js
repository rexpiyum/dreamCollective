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
import NewFeature from "./NewFeature";




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
  width:100%;
  justify-content:space-between;
  margin-top:3vw;
`;

const PreviewWrapper = styled.div`
  width:100%;
  height:40vw;
  padding:4vw;
  margin:1vw auto;
  background-color:${theme.accentColor20};
`;


const categories = ["product", "space", "service"]

var APICalls = require("../../../utils/APICalls")

class SetupDreamActivityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    APICalls.readTopic(this.props.match.params.id, (data) => this.setState({ topic: data }))

  }



  render() {
    if (this.state.topic == null) return <LoadingWidget></LoadingWidget>;

    return (
      <Wrapper>
        <Header text={"Set up dream " + this.state.topic.name + " activity"}></Header>
        <ContentWrapper>
          <Prompt text={"How would you reimagine this " + categories[this.state.topic.category] + "? Create 3 dream features for your " + this.state.topic.name + " to inspire others"}></Prompt>
          <FeatureContainer>
            <NewFeature clickHandler={(data) => { }}></NewFeature>
            <NewFeature clickHandler={(data) => { }}></NewFeature>
            <NewFeature clickHandler={(data) => { }}></NewFeature>
          </FeatureContainer>

          {this.state.category > -1 && <div><Prompt marginTop={"4vw"} marginBottom={"1vw"} text={"Give your dream " + categories[this.state.category] + " a name:"}></Prompt>
            <TextArea value={"Dream " + this.state.name}
              onChangeCallback={(ev) => this.setState({ name: ev.target.value.substring(6) })}
            ></TextArea>

            <Prompt marginTop={"4vw"} marginBottom={"1vw"} text={"Description"}></Prompt>
            <TextArea rows={6} value={this.state.description}
              onChangeCallback={(ev) => this.setState({ description: ev.target.value })}
            ></TextArea>
          </div>}
          <Prompt isSmall={true} marginTop={"3vw"} marginBottom={"1vw"} text={"A preview of your dream " +this.state.topic.name+" activity. This is how others will be able to contribute to your project"}></Prompt>
          <PreviewWrapper></PreviewWrapper>


        </ContentWrapper>
        {<Footer onNextCallback={() => APICalls.updateTopic(this.state.topic._id, this.state, (data) => this.props.history.push("/newTopic/3/" + this.state.topic._id))}></Footer>}
      </Wrapper>
    )
  }


  handleCreateTopicCallback(data) {
    this.props.history.push('/newTopic/2/data._id');
  }


}



export default SetupDreamActivityView;