import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import API from "../../utils/API";
import Joke from "../../components/Joke"
import "./Home.scss";
// import Background from "../../background.jpg";
// import { Container } from "reactstrap";
// import styled from "styled-components"


// var divStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// };

// const BodyDiv = styled.div`
// background-color:"#black"

// `
class Home extends Component {

  state = {
    loggedIn: false,
    joke: ""
  };

  componentDidMount() {
    // this.getJoke();
    this.loggedIn();
  }

  getJoke = () => {
    // API.ChuckNorris().then(joke => {
    //   let newJoke = joke.data.value.joke.replace(/&quot;/g, '"');
    //   this.setState({
    //     joke: newJoke
    //   })
    // }).catch(err => {
    //   console.log(err)
    // });
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }



  render() {

    // function Home (){
    //   return <img src={logo} alt="Logo" />;
    //    };
    return (
      // <BodyDiv>

      // // <Container className="homePage">
      //   {/* <div style={{ divStyle }}> */}
      //   {/* </div> */}


      <div className="homeBox">
        <Joke />
        {/* {this.state.loggedIn ? (
           <Button onClick={e=> {this.getJoke()}} color="warning" block>Get New Fact</Button>
        ) : (<></>)}  */}
      </div>



      // </Container>

      // </BodyDiv>




    )


  }

}



export default Home;