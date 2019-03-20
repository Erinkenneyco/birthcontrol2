import React from 'react';

import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import styled from "styled-components"

// const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

const CardDiv = styled.div`
margin-top:10px;`;

const DailyLog = styled.h6`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`
const Wrapper = styled.section`
padding: 1em;
background: papayawhip;
`;

const DateLog = styled.h5`
font-size: 2em;
text-align:center;
color: rgb(132, 25, 240);;
`




const Cards = (props) => {
    console.log("cardprops", props);
    return (
        <CardDiv>
            <Card key={props.keys} >
                <CardBody>
                    <Wrapper>
                        <DateLog>
                            <CardTitle> Date: {props.date ? props.date : "no date" } <br></br>
                           {/* Date: {(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)} */}

                            </CardTitle>
                        </DateLog>
                    </Wrapper>

                    <CardText>
                        <Wrapper>
                            <DailyLog>
                                This was your temperature: {props.temp} <br />
                                This was your weight: {props.weight}  <br />
                                you got {props.sleep} hours of sleep  <br />
                                You rated your spotting at a {props.spotting} <br />
                                {props.hungover ? "you were hungover" : "You were not hungover"}  <br />
                                {props.bc ? "you took your birth control" : "you didn't take your birth control"}  <br />
                                These were your symptoms: {props.symptoms} <br />
                            </DailyLog>
                        </Wrapper>
                    </CardText>

                </CardBody>
            </Card>
        </CardDiv>
    );
};

export default Cards;