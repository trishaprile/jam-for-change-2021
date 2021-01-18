import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ChevronRight } from 'react-bootstrap-icons';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import icssc_logo from './img/icssc_logo_transparent.png';
import globe from './img/globe.png';

function App() {

  const [accordion1, toggleAccordion1] = useState(false);
  const [accordion2, toggleAccordion2] = useState(false);
  const [accordion3, toggleAccordion3] = useState(false);
  const [accordion4, toggleAccordion4] = useState(false);
  const [accordion5, toggleAccordion5] = useState(false);
  const [accordion6, toggleAccordion6] = useState(false);
  const [accordion7, toggleAccordion7] = useState(false);
  const [accordion8, toggleAccordion8] = useState(false);
  const [accordion9, toggleAccordion9] = useState(false);
  const [accordion10, toggleAccordion10] = useState(false);
  const [accordion11, toggleAccordion11] = useState(false);

  const handleAccordion = (key) => {
    if (key === 1) {
      toggleAccordion1(!accordion1);
    } 
    else if (key === 2) {
      toggleAccordion2(!accordion2);
    } 
    else if (key === 3) {
      toggleAccordion3(!accordion3);
    } 
    else if (key === 4) {
      toggleAccordion4(!accordion4);
    } 
    else if (key === 5) {
      toggleAccordion5(!accordion5);
    } 
    else if (key === 6) {
      toggleAccordion6(!accordion6);
    } 
    else if (key === 7) {
      toggleAccordion7(!accordion7);
    } 
    else if (key === 8) {
      toggleAccordion8(!accordion8);
    } 
    else if (key === 9) {
      toggleAccordion9(!accordion9);
    } 
    else if (key === 10) {
      toggleAccordion10(!accordion10);
    } 
    else if (key === 11) {
      toggleAccordion11(!accordion11);
    } 
  }

  return (
    <div className="app">
      <div className="landing">
        <a href="https://studentcouncil.ics.uci.edu/" target="_blank" rel="noreferrer"><img src={icssc_logo} alt="ICSSC logo" className="icssc-logo-header"></img></a>
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
      </div>
      <div className="info">
        <Container className="about">
          <h3 className="about-title">ICS Student Council at UC Irvine invites you to our 2021 Jam for Change!</h3>
          <p className="about-text">Jam for Change is five day long development competition where teams work together to create applications that promote social good.</p>
          <div className="schedule">
            <h2 className="schedule-title">Event Schedule</h2>
            <VerticalTimeline className="vertical-timeline">
              <VerticalTimelineElement
                className="vertical-timeline-element-one"
                contentStyle={{ background: '#387CA0', color: '#fff', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '8px solid #387CA0' }}
                date="Monday, February 15th"
                dateClassName='vertical-timeline-date'
                iconStyle={{ background: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Kickoff Ceremony</h3>
                <p>5:00-6:00pm PST</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element-two"
                contentStyle={{ background: '#237e37', color: '#fff', borderRadius: '20px' }}
                contentArrowStyle={{ borderRight: '8px solid #237e37' }}
                date="Friday, February 19th"
                dateClassName='vertical-timeline-date'
                iconStyle={{ background: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Presentations & Award Ceremony</h3>
                <p>5:00-6:00pm PST</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
            <p className="more-events">More events TBA!</p>
          </div>
        </Container>
        <Container className="faq">
          <h2 className="faq-title">FAQ & Rules</h2>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(1)} className="faq-card-header" as={Card.Header} eventKey="0">
                <ChevronRight className={accordion1 === false ? "chevron-icon" : "chevron-icon-open"}/>What is Jam for Change?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="faq-card-body">Jam for Change is five day long development competition where teams work together to create applications that promote social good.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(2)} className="faq-card-header" as={Card.Header} eventKey="1">
                <ChevronRight className={accordion2 === false ? "chevron-icon" : "chevron-icon-open"}/>Where is Jam for Change?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="faq-card-body">Jam for Change is held entirely online this year. Correspondence and announcements throughout the duration of the event will happen primarily through the Jam for Change Discord. Registered participants will receive an invitation to Jam for Change Discord closer to the start date of Jam for Change.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(3)} className="faq-card-header" as={Card.Header} eventKey="2">
                <ChevronRight className={accordion3 === false ? "chevron-icon" : "chevron-icon-open"}/>When is Jam for Change?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="faq-card-body">Jam for Change is happening between February 15th-19th.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(4)} className="faq-card-header" as={Card.Header} eventKey="3">
                <ChevronRight className={accordion4 === false ? "chevron-icon" : "chevron-icon-open"}/>How much does it cost?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="faq-card-body">Nothing. Attending Jam for Change is free.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(5)} className="faq-card-header" as={Card.Header} eventKey="4">
                <ChevronRight className={accordion5 === false ? "chevron-icon" : "chevron-icon-open"}/>Who can participate?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="faq-card-body">All UC Irvine students are welcome to participate.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(6)} className="faq-card-header" as={Card.Header} eventKey="5">
                <ChevronRight className={accordion6 === false ? "chevron-icon" : "chevron-icon-open"}/>How many people can be on a team?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="faq-card-body">Teams can be up to a maximum of 4 people.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(7)} className="faq-card-header" as={Card.Header} eventKey="6">
                <ChevronRight className={accordion7 === false ? "chevron-icon" : "chevron-icon-open"}/>What if I don’t have a team?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="faq-card-body">We will be assisting with team formations during the event by creating a Discord channel for team formations.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(8)} className="faq-card-header" as={Card.Header} eventKey="7">
                <ChevronRight className={accordion8 === false ? "chevron-icon" : "chevron-icon-open"}/>How do I register?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="faq-card-body">You can register by filling out the <a href="https://docs.google.com/forms/d/e/1FAIpQLScs4CTQGtOYQJdWNB0ok4hG38lDfhXG7U1zzRDtkLkKESn09A/viewform">Registration Form</a>.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(9)} className="faq-card-header" as={Card.Header} eventKey="8">
                <ChevronRight className={accordion9 === false ? "chevron-icon" : "chevron-icon-open"}/>May I submit pre-existing projects for Jam for Change?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="faq-card-body">Unfortunately, all design elements and code for your project must be created during the event. Pre-existing third party tools and frameworks are allowed. Coding in advance is not allowed, but planning and discussing with teammates prior to the event is allowed.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(10)} className="faq-card-header" as={Card.Header} eventKey="9">
                <ChevronRight className={accordion10 === false ? "chevron-icon" : "chevron-icon-open"}/>What if my question isn’t answered here?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body className="faq-card-body">If your question isn’t answered in the FAQ, please leave a question in the Jam for Change Discord or email us at <a href="mailto:icssc@uci.edu">icssc@uci.edu</a>.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="faq-card">
              <Accordion.Toggle onClick={(evt) => handleAccordion(11)} className="faq-card-header" as={Card.Header} eventKey="10">
                <ChevronRight className={accordion11 === false ? "chevron-icon" : "chevron-icon-open"}/>What are the rules?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body className="faq-card-body">
                  <Container>
                    <Row>
                      <Col xs={12} md={6}>
                        <h3>Jam for Change Rules</h3>
                        <ul>
                          <li>Teams must be a size of 1-4 participants.</li>
                          <li>Participants must be currently enrolled UC Irvine students.</li>
                          <li>All design elements and code for your project must be created during the event. Pre-existing third-party tools and frameworks are allowed. Coding in advance is not allowed, but planning and discussing with teammates prior to the event is allowed.</li>
                          <li>Submissions must be your own original work, and you must have obtained approval or licenses required for you to submit your entry, and your entry cannot contain any third party trademarks or copyrighted materials unless you have obtained permission to use the materials.</li>
                          <li>Submissions must, as determined by ICS Student Council, in our sole and absolute discretion, follow the code of conduct.</li>
                          <li>By participating in Jam for Change, you agree to grant full permission to ICS Student Council to use your likeness in all forms and media for advertising and any other lawful purposes. </li>
                          <li>Teams will be required to submit a hyperlink or code repository (GitHub, GitLab) of their submission before final presentations by Friday February 19th, 2021 @ 4:30 PM PST to be eligible for prizes.</li>
                          <li>Teams will be required to present their project in a 3-5 minute presentation to a panel of judges during the final Jam for Change presentations in order to qualify for prizes. At least one team member must be present to present their project during their team’s assigned presentation time.</li>
                          <li>At the close of the Jam for Change Presentations, the top three winning teams will be selected by a panel of qualified judges. </li>
                          <li>Winners will be notified via the contact information provided during entry. If a selected winner cannot be contacted, is ineligible for, fails to claim a prize, or fails to return any forms, the selected winner will forfeit the prize.</li>
                        </ul>
                      </Col>
                      <Col xs={12} md={6}>
                        <h3>Jam for Change Code of Conduct</h3>
                        <p>By participating in Jam for Change, you agree to abide by the the following code of conduct:</p>
                        <ul>
                          <li>Jam for Change is dedicated to providing a harassment-free environment experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, religion, or computing experience. If your behavior is making someone feel uncomfortable, that is enough reason to stop. We do not tolerate harassment of Jam for Change participants of any form. </li>
                          <li>Participants asked to stop any harassing behavior are expected to comply immediately.</li>
                          <li>If a participant engages in harassing behavior, ICS Student Council may take any action it deems appropriate, including, but not limited to, warning the offending participant or expulsion from the event.</li>
                          <li>If you witness or experience any violations of this Code of Conduct, please notify a board member of ICS Student Council immediately, or email icssc@uci.edu</li>
                        </ul>
                        <p>By participating in Jam for Change, each participant agrees to follow the above-stated rules and code of conduct and by the interpretation of these rules by ICS Student Council, and understand that violation of these rules may result in their submission being disqualified for prizes and/or the offending participant being removed from the competition.</p>   
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
      <footer>
        <a href="https://studentcouncil.ics.uci.edu/" target="_blank" rel="noreferrer"><img src={icssc_logo} alt="icssc logo" className="icssc-logo-footer"></img></a>
        <p>© 2021 ICSSC Projects Committee</p>
      </footer>
    </div>
  )
}

export default App;
