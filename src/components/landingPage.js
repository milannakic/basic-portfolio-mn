import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "../images/avatar.png";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Avatar} alt="Avatar" className="avatar-img"></img>

            <div className="banner-text">
              <h1>Experienced PM / PO / BA / SM</h1>
              <hr />
              <p>
                Agile | Cynefin | React | NodeJS | Express | MondoDB | Oracle |
                MySql | Java | HTML/CSS
                <div className="social-links">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/milan-nakic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com/milannakic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                  {/* StackOverflow */}
                  <a
                    href="https://stackoverflow.com/users/10380855/milan-nakic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                  </a>
                  {/* Pluralsight */}
                  <a
                    href="https://app.pluralsight.com/profile/milan-nakic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                  </a>
                  {/* Youtube */}
                  <a
                    href="https://www.youtube.com/user/milannakic/featured?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </div>
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
