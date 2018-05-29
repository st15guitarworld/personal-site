import React, { Component } from 'react';
import { Row,Grid,Col,Image,Nav,NavItem, Navbar,NavDropdown,MenuItem} from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import Waypoint from 'react-waypoint';
var Scrollspy = require('react-scrollspy').Scrollspy
import './App.css';

class ScrollDown extends Component  {
    constructor(props) {
    super(props);
    }
    render() {
        return (
            <Scrollchor to="#profile" className="scroll-down">
                <span className="glyphicon glyphicon-chevron-down"></span>
            </Scrollchor>
        );
    }
}

class MyNavBar extends Component {
    constructor(props) {
            super(props);

    }
    render() {
        return (
        <div id="navContainer" className={this.props.show ? "show" : ""}>
        <nav id="siteNav" className="navbar" role="navigation">
            <div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
            <a className="navbar-brand" href="#">SN</a>
			</div>
            <div className="collapse navbar-collapse navbar-ex1-collapse" id="bs-example-navbar-collapse-1" >
                <Scrollspy items={ ['profile', 'experiences', 'abilities'] } className="nav navbar-nav nav-pull-right" currentClassName="active">
					<li><Scrollchor to="#profile" className="nav-link">Profile</Scrollchor></li>
					<li><Scrollchor to="#experiences" className="nav-link">Experiences</Scrollchor></li>
                    <li><Scrollchor to="#abilities" className="nav-link">Abilities</Scrollchor></li>
                    <li><Scrollchor to="#projects" className="nav-link">Projects</Scrollchor></li>
                    <li><Scrollchor to="#contact" className="nav-link">Contact</Scrollchor></li>

				</Scrollspy>
            </div>
        </nav>
            </div>
        );
    }

}


class Top extends Component {
    constructor(props) {
    super(props);
    this.state = {
        style: {
        height:this.getScreenHeight()
    }
    }
        this.getScreenHeight = this.getScreenHeight.bind(this);
    }
    componentDidMount() {
    window.addEventListener('resize',(event) => this.setState({
        style:{
            height:this.getScreenHeight()
        }
    }));
    }

    getScreenHeight() {
        var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        y=w.innerHeight||e.clientHeight||g.clientHeight;
        return y;
    }

    render() {
        return (
        <Jumbotron style={this.state.style}>
        <div className="overlay"></div>
        <Grid>
            <h1>Steve Noel</h1>
            <p className="lead"> Personal Site</p>

        </Grid>
            {this.props.children}
        </Jumbotron>
        );
    }
}

class Profile extends Component {
    render() {
        return (
            <div className="profileSection">
                <Grid id="profile">
                <h2>Profile</h2>
                <p className="lead"> I am a Self-Driven Java/Web Developer</p>
                    <hr/>
                <Row>
                    <Col md={4} >
                    <Image src="/me.jpg" circle responsive height="246px" width="246px" />
                    </Col>
                    <Col md={4} >
                        <h3>About me</h3>
                        <p>
                        I am a versatile software developer. I have extensive knowledge of Java and front-end web development techniques. I enjoy learning new things and working on challenging engineering problems.
                        </p>
                    </Col>
                    <Col md={4} >
                    <h3>Details</h3>
                    <p>
                    <strong>Name:</strong><br />
                    Steve Noel <br />
                    <strong>Hobbies:</strong> <br />
                    Playing Guitar, Watching Movies<br />
                    <strong>Location:</strong><br />
                    Greater New York Area, NY, Earth

                    </p>
                    </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}

class Experiences extends Component {
    render() {
    return  (
        <div className="background-baishe">
        <Grid id="experiences">
        <h2>Experiences</h2>
        <p className="lead" >
	    “Experience is the Teacher of all Things”<br />- Julius Caesar
        </p>
        <hr/>
        <h3>Education</h3>
          <div className="experiences">
            <Row className="experience">
                <Col md={4}>
                    <h4>Florida International University</h4>
                    <p className="experience-period">
                        Aug 2011 -
                        May 2015</p>
                </Col>
                <Col md={8}>
                <p>
				<strong>Bachelor of Science - Computer Science</strong><br />
				<span className="hidden-phone">
					The software development courses were mostly Java and C based. However, I also learned the importance of
                    Object Oriented Design Principles, web development and User experiece.</span>
				<span className="experience-details">
					<span className="location">
						<span className="glyphicon glyphicon-map-marker">
                            </span> Miami, FL</span>
				</span>
			</p>
                </Col>
            </Row>
            <hr/>
        <h3>Work</h3>
        <div className="experiences">
            <Row className="experience">
            <Col md={4}>
                    <h4>Goldman Sachs</h4>
                    <p className="experience-period">
                        Jul 2015 -
                        Present</p>
            </Col>
        <Col md={8}>
                <p>
				<strong>Technology Analyst</strong><br />
				<span className="hidden-phone">
					Worked at the Firms the client subledger team.Helped develop Java applications that maintained the data integrity of the firms institutinal client subledger.Also contributed to the development of a new user interface allowing users to query subledger data in realtime.</span>
				<span className="experience-details">
					<span className="location">
						<span className="glyphicon glyphicon-map-marker">
                            </span> Greater New York Area</span>
				</span>
			</p>
                </Col>
            </Row>
            <Row className="experience">
                <Col md={4}>
                    <h4>Savannah River National Labs</h4>
                    <p className="experience-period">
                        May 2014 -
                        August 2014</p>
            </Col>
            <Col md={8}>
            <p>
            <strong>Software Engineer Intern</strong>
            <span className="hidden-phone"><br />
            Savannah River Naional Labs is focused on developing technologies to aid in the
            nations legacy nuclear waste cleanup program. While there I helped design and develop an internal site for the management of research vehicles using Bootstrap and Jquery.
            </span>
            <span className="experience-details">
					<span className="location">
						<span className="glyphicon glyphicon-map-marker">
                            </span> Aiken, SC</span>
            </span>
            </p>
            </Col>
            </Row>
            <Row className="experience">
                <Col md={4}>
                    <h4>Florida International University</h4>
                    <p className="experience-period">
                        Nov 2013 -
                        May 2015</p>
                </Col>
                <Col md={8}>
                <p>
                <strong>Student Research Assistant</strong>
                <span className="hidden-phone"><br />
                Participated in FIUs Department of Energy fellowship program which allowed students to work on projects sponsored by the Department of Energy (DOE). While there I collaborated in the development of hydrological models of the DOEs Oak Ridge site. In addition, worked on the mobile application for the DOEs Deactivation and Decommission site.
                </span>
                <span className="experience-details">
                                <span className="location">
                                    <span className="glyphicon glyphicon-map-marker">
                                        </span> Miami, FL</span>
                </span>
                </p>
                </Col>

            </Row>

        </div>
          </div>
        </Grid>

        </div>
    );
}
}

class Stars extends Component {
    createStar(starClass,index) {
    const classNAME = "glyphicon glyphicon-star " + starClass;
    return (
    <span key={index} className={classNAME}></span>
    );
    }
    renderStars() {
        const rating = this.props.rating;
        const starSize = this.props.starSize;

        let stars = [];
        for(var i =1; i <= starSize; i++){
            let star;
            if(i<=rating){
                star = this.createStar("filled",i);
            }else{
                star = this.createStar("",i);
            }
           stars.push(star);
        }

        return stars;
    }
    render() {
        return (
        <span className={this.props.containerClass}>
            {this.renderStars()}
        </span>
        );
    }
}
class Projects extends Component {
  render(){
    return (
      <div className="background-baishe">
      <Grid id="projects">
          <h2>Projects</h2>
          <p className="lead">
           “Knowledge is of no value unless you put it into practice."
            <br />- Anton Chenkov
          </p>
          <hr />
          <Row style={{
            marginBottom:"25px"
          }}>
              <Col md={5} mdOffset={1} sm={12} >
                <div className="project-container">
                  <a href="http://stevenoel-ufo-sightings.surge.sh/">
                    <Image src="/ufo-sightings-shot.png" height="100%" width="100%" />
                  </a>
                  <div className="project-overlay">
                  </div>
                  <div className="project-text-container">
                    <p className="project-title">UFO Sightings</p>
                    <p className="project-description">Interactive map of UFO sightings. </p>
                  </div>
                </div>
              </Col>
              <Col md={5} sm={12}>
                <div className="project-container">
                  <a href="http://stevenoel-crypto-trakr.surge.sh/">
                    <Image src="/crypto-trakr-shot.png" height="100%" width="100%" />
                  </a>
                  <div className="project-overlay">
                  </div>
                  <div className="project-text-container">
                    <p className="project-title">Crypto Trakr</p>
                    <p className="project-description">CryptoCurrency App</p>
                  </div>
                </div>
              </Col>
          </Row>
          <Row>
            <Col md={5}  mdOffset={1} sm={12}>
              <div className="project-container">
                <a href="http://stevenoel-guitar-tools.surge.sh/">
                  <Image src="/guitar-tools-shot.png" height="100%" width="100%" />
                </a>
                <div className="project-overlay">
                </div>
                <div className="project-text-container">
                  <p className="project-title">Guitar Tools</p>
                  <p className="project-description">Online Guitar Tools App. Including Tuner,Metronome,Scale Viewer , and Chord Finder.</p>
                </div>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div className="project-container">
                <a href="http://stevenoel-react-solitaire-project.surge.sh/">
                  <Image src="/react-solitaire-shot.png" height="100%" width="100%" />
                </a>
                <div className="project-overlay">
                </div>
                <div className="project-text-container">
                  <p className="project-title">React Solitaire Game</p>
                  <p className="project-description">Online Solitaire Game using React and Redux.</p>
                </div>
              </div>
            </Col>
          </Row>
      </Grid>
    </div>
    );
  }
}

class Abilities extends Component {
    render(){
        return (
        <Grid id="abilities">
            <h2>Abilities</h2>
            <p className="lead">
	           “Life without knowledge is death in disguise.”<br />- Talib Kweli
            </p>
            <hr />
            <h3>Skills</h3>
            <Row>
            <Col md={6}>
            <ul className="no-bullets">
            <li><span className="ability-title">Java</span>
                <Stars containerClass="ability-score" rating={5} starSize={5}/>
            </li>
            <li><span className="ability-title">HTML</span>
                <Stars containerClass="ability-score" rating={5} starSize={5}/>
            </li>
            <li><span className="ability-title">CSS</span>
                <Stars containerClass="ability-score" rating={5} starSize={5}/>
            </li>
            <li><span className="ability-title">SQL</span>
                <Stars containerClass="ability-score" rating={5} starSize={5}/>
            </li>
            <li><span className="ability-title">JavaScript</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            <li><span className="ability-title">React Framwork</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            <li><span className="ability-title">Bootstrap Framework</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            </ul>
            </Col>
            <Col md={6}>
            <ul className="no-bullets">
            <li><span className="ability-title">MVC Architecture</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            <li><span className="ability-title">REACT Framework</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            <li><span className="ability-title">AngularJS Framework</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            <li><span className="ability-title">WordPress</span>
                <Stars containerClass="ability-score" rating={3} starSize={5}/>
            </li>
            <li><span className="ability-title">OOP Design Patterns</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            <li><span className="ability-title">Command Line</span>
                <Stars containerClass="ability-score" rating={4} starSize={5}/>
            </li>
            </ul>
            </Col>
            </Row>
            <hr />
            <h3>Languages</h3>
            <Row>
            <Col md={6}>
            <ul className="no-bullets">
            <li><span className="ability-title">English (Native Speaker)</span>
                <Stars containerClass="ability-score" rating={5} starSize={5}/>
            </li>
            <li><span className="ability-title">Spanish(Bilingual Proficiency)</span>
                <Stars containerClass="ability-score" rating={5} starSize={5}/>
            </li>
            </ul>
            </Col>
            </Row>
        </Grid>
        );
    }
}

class Contact extends Component {
    render() {
        return (
        <div id="background-grey">
        <Grid id="contact">
            <h2>Contact</h2>
            <p className="lead">Got a project you would like me to work on? Or how about just a friendly chat?<br /> Get in Touch. </p>
            <Row>
            <Col md={6}>
            <a href="https://www.linkedin.com/in/steve-noel-23b60b99/">https://www.linkedin.com/in/steve-noel-23b60b99</a>
            </Col>
            <Col md={6}>
            <a href="mailto:snoel006@fiu.edu">snoel006@fiu.edu</a>
            </Col>
            </Row>
        </Grid>
        </div>
        );
    }
}
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
        showNav: false,
        };
    }
    _handleWaypointEnter() {
        console.log("enter");
        if(this.state.shoNav !== false) {
            this.setState({showNav:false});
        }
    }
    _handleWaypointLeave() {
        console.log("leave");
        if(this.state.shoNav !== true) {
            this.setState({showNav:true});
        }
    }
    render() {
    return (
        <div>
        <MyNavBar show={this.state.showNav}/>
        <Top>
        <Waypoint onEnter={this._handleWaypointEnter.bind(this)}
                  onLeave={this._handleWaypointLeave.bind(this)}/>
        </Top>
        <Profile />
        <Experiences />
        <Abilities />
        <Projects />
        <Contact />
        </div>
    );
  }
}

export default App;
