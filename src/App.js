import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import globe from './img/globe.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container className="landing-container">
          <h2 className="pretitle">
            UC Irvine ICS Student Council
          </h2>
          <h1 className="main-title">
            Jam for Change 2021
          </h1>
          <h3 className="dates">
            Feb 15th - Feb 19th
          </h3>
          <img src={globe} alt="globe" className="globe-img"></img>
          <div className="register-container">
            <a href="https://forms.gle/VogasEdHYQsn7QYT6" target="_blank" rel="noreferrer"><Button className="btn">REGISTER NOW!</Button></a>
          </div>
        </Container>
        <Container className="info-container">
          <div className="about">
            <h3 className="about-title">ICS Student Council at UC Irvine invites you to our 2021 Jam for Change!</h3>
            <p className="about-text">Jam for Change is five day long development competition where teams work together to create applications that promote social good.</p>
            <div className="schedule">
              <h2 className="schedule-title">Event Schedule</h2>
              <VerticalTimeline className="vertical-timeline">
                <VerticalTimelineElement
                  className="vertical-timeline-element"
                  contentStyle={{ background: '#387CA0', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid #387CA0' }}
                  date="Monday, February 15th"
                  dateClassName='vertical-timeline-date'
                  iconStyle={{ background: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title">Kickoff Ceremony & Workshop</h3>
                  <p>
                    5:00-6:00pm PST
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element"
                  contentStyle={{ background: '#387CA0', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid #387CA0' }}
                  date="Friday, February 19th"
                  dateClassName='vertical-timeline-date'
                  iconStyle={{ background: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title">Presentations & Award Ceremony</h3>
                  <p>
                    5:00-6:00pm PST
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
          <div className="faq">
            <h2 className="faq-title">FAQ & Rules</h2>
            <Accordion>
              <Card>
                <Accordion.Toggle className="hover-primary" as={Card.Header} eventKey="0">
                  What is Jam for Change?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Jam for Change is five day long development competition where teams work together to create applications that promote social good.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-green" as={Card.Header} eventKey="1">
                  Where is Jam for Change being held?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Jam for Change is held entirely online this year. Correspondence and announcements throughout the duration of the event will happen primarily through the Jam for Change Discord. Registered participants will receive an invitation to Jam for Change Discord closer to the start date of Jam for Change.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-yellow" as={Card.Header} eventKey="2">
                  When is Jam for Change?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Jam for Change is happening between February 15th-19th.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-orange" as={Card.Header} eventKey="3">
                  How much does it cost?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Nothing. Attending Jam for Change is free.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-red" as={Card.Header} eventKey="4">
                  Who can participate?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>All UC Irvine students are welcome to participate.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-primary" as={Card.Header} eventKey="5">
                  How many people can be on a team?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>Teams can be up to a maximum of 4 people.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-green" as={Card.Header} eventKey="6">
                  What if I don’t have a team?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>We will be assisting with team formations during the event by creating a Discord channel for team formations.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-yellow" as={Card.Header} eventKey="7">
                  How do I register?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>You can register by filling out the following RSVP form above.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-orange" as={Card.Header} eventKey="8">
                  May I submit pre-existing projects for Jam for Change?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>Unfortunately, all design elements and code for your project must be created during the event. Pre-existing third party tools and frameworks are allowed. Coding in advance is not allowed, but planning and discussing with teammates prior to the event is allowed.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-primary" as={Card.Header} eventKey="10">
                  What if my question isn’t answered here?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>If your question isn’t answered in the FAQ, please leave a question in the Jam for Change Discord or email us at <a href="mailto:icssc@uci.edu">icssc@uci.edu</a></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle className="hover-green" as={Card.Header} eventKey="11">
                  What are the rules?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <div style={{display: "flex", flexDirection: "row"}}>
                      <div style={{display: "flex", width: "50%", flexDirection: "column", paddingRight: "2rem"}}>
                        <h3>Jam for Change Rules </h3>
                        <ul>
                          <li>Teams must be a size of 1-4 participants.</li>
                          <li>Participants must be currently enrolled UC Irvine students.</li>
                          <li>All design elements and code for your project must be created during the event. Pre-existing third-party tools and frameworks are allowed. Coding in advance is not allowed, but planning and discussing with teammates prior to the event is allowed.</li>
                          <li>Submissions must be your own original work, and you must have obtained approval or licenses required for you to submit your entry, and your entry cannot contain any third party trademarks or copyrighted materials unless you have obtained permission to use the materials.</li>
                          <li>Submissions must, as determined by ICS Student Council, in our sole and absolute discretion, follow the code of conduct.</li>
                          <li>By participating in Jam for Change, you agree to grant full permission to ICS Student Council to use your likeness in all forms and media for advertising and any other lawful purposes. </li>
                          <li>Teams will be required to submit a hyperlink or code repository (GitHub, GitLab) of their submission before final presentations by Friday October 23rd, 2020 @ 5:30 PM PDT to be eligible for prizes.</li>
                          <li>Teams will be required to present their project in a 3-5 minute presentation to a panel of judges during the final Jam for Change presentations in order to qualify for prizes. At least one team member must be present to present their project during their team’s assigned presentation time.</li>
                          <li>At the close of the Jam for Change Presentations, the top three winning teams will be selected by a panel of qualified judges. </li>
                          <li>Winners will be notified via the contact information provided during entry. If a selected winner cannot be contacted, is ineligible for, fails to claim a prize, or fails to return any forms, the selected winner will forfeit the prize.</li>
                        </ul>
                      </div>
                      <div style={{display: "flex", width: "50%",  flexDirection: "column", paddingLeft: "2rem"}}>
                        <h3>Jam for Change Code of Conduct</h3>
                        <p>By participating in Jam for Change, you agree to abide by the the following code of conduct:</p>
                        <ul>
                          <li>Jam for Change is dedicated to providing a harassment-free environment experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, religion, or computing experience. If your behavior is making someone feel uncomfortable, that is enough reason to stop. We do not tolerate harassment of Jam for Change participants of any form. </li>
                          <li>Participants asked to stop any harassing behavior are expected to comply immediately.</li>
                          <li>If a participant engages in harassing behavior, ICS Student Council may take any action it deems appropriate, including, but not limited to, warning the offending participant or expulsion from the event.</li>
                          <li>If you witness or experience any violations of this Code of Conduct, please notify a board member of ICS Student Council immediately, or email icssc@uci.edu</li>
                        </ul>
                        <p>By participating in Jam for Change, each participant agrees to follow the above-stated rules and code of conduct and by the interpretation of these rules by ICS Student Council, and understand that violation of these rules may result in their submission being disqualified for prizes and/or the offending participant being removed from the competition.</p>                   
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <footer>
            <p>© 2020 ICSSC Projects Commitee</p>
          </footer>
        </Container>
      </div>
    )
  }
}

export default App;
