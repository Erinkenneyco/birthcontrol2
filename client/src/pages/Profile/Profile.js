

import React, { Component } from "react";
import "./Profile.scss";
import { Link } from "react-router-dom"
import API from "../../utils/API";
import { Container, Row, Col, Button } from "reactstrap";
import CalendarScreen from "./CalendarScreen.js";
import "tui-calendar/dist/tui-calendar.css";
import styled from "styled-components"


    



const styles = {
    link: {
      color: "rgb(132, 25, 240)"
      
  }
}


class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
        // profileImage: ""
    }

    componentDidMount() {



        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)

        // this.newProfileImage()



    }
    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }
    // calendar = new Calendar('#calendar', {
    //     defaultView: 'month',
    //     taskView: true,
    //     template: {
    //       monthGridHeader: function(model) {
    //         var date = new Date(model.date);
    //         var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
    //         return template;
    //       }
    //     }
    //   });
    // profileImage = () => {
    //     Flow.newProfileImage ()
    //     .then(res => this.setState({dogImage: res.data.message}))
    //     .catch (err => console.log(err))
    // }

    render() {
        return (
            <Container className="profilePage">
                <div style={{ marginTop: 10 }} ></div>
                {this.state.loggedIn ? (
                    <>
                        
                            <Row className="profileBox">

                                <h1 id="userTitle">Hello {this.state.user.username}!</h1>
                            </Row>
                        

                        
                            <Row>
                                <h3>Have you taken your pill today?</h3>
                            </Row>
                        
                        <Row className="profilePhoto" class="col-md-6" data-aos="fade-up">


                            <Col><img src="https://www.connectioncafe.com/wp-content/uploads/2018/08/The-Flow-State.jpg" id="flow" width="200" alt=""  ></img></Col>

                        </Row>


                        <CalendarScreen />






                        <Row>
                            {/* <Col className="taken" id="reminder">
                   {/* <h3>Last Taken Reminder</h3> */}


                            <Col className="appointment" id="schedule">
                                <h4>Want to see a Doctor?</h4>


                                <ul><a href="https://www.plannedparenthood.org/health-center" style={styles.link} target="_blank rel= noopener norerferrer"  > Schedule an Appointment</a></ul>

                            </Col>

                            <Col className="informational" id="links">
                                <h4>Informational Links</h4>

                                <ul><a href="https://www.plannedparenthood.org/" style={styles.link} target="_blank rel= noopener norerferrer" >Planned Parenthood Main Page</a></ul>
                                <ul><a href="https://www.womenshealth.gov/" style={styles.link} target="_blank rel=noopener norerferrer" > Office of Women's Health</a></ul>
                                <ul><a href="https://www.globalfundforwomen.org/womens-human-rights/#.XJAXipNKh-U" style={styles.link} target="_blank rel=noopener norerferrer"> Global Fund for Women</a></ul>

                            </Col>
                        </Row>
                    </>
                ) : (
                        <div className="noUser">
                            {!this.state.loading ? (
                                <>
                                    <h1>please log in</h1>
                                    <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                                </>
                            ) : (
                                    <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
                                )}
                        </div>

                    )
                }


            </Container>
        )
    }
}


export default Profile;