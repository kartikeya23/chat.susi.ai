import React, { Component } from 'react';
import susi from '../../../public/images/susi.svg';
import susiGif from '../../../public/images/susi.gif';
import susiTestGif from '../../../public/images/susi-test.gif';
import mapAndroid from '../../../public/images/map-android.jpg';
import androidMockup from '../../../public/images/android-mockup.jpg';
import bots from '../../../public/images/bots.jpg';
import allDevices from '../../../public/images/all_devices.png';
import manyLanguages from '../../../public/images/many_languages.png';
import openSource from '../../../public/images/open-source.png';
import githubText from '../../../public/images/github-text-logo.png';
import shield from '../../../public/images/shield.svg';
import './Overview.css';
import PropTypes from 'prop-types';
import PlayCircle from 'material-ui/svg-icons/av/play-circle-filled';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Close from 'material-ui/svg-icons/navigation/close';

import StaticAppBar from '../StaticAppBar/StaticAppBar.react';

class Overview extends Component{
  constructor(props){
    super(props);
    this.state={
      video:false,
    }
  }
  handleTitle = () => {
    this.props.history.push('/');
  }
  handleVideo = () => this.setState({
    login: false,
    signup: false,
    video: true
  })

  handleClose = () => this.setState({
    login: false,
    signup: false,
    video: false
  })

  closeVideo = () => this.setState({
    video: false
  })
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {

    const closingStyle = {
      position: 'absolute',
      zIndex: 120000,
      fill: '#fff',
      width: '40px',
      height: '40px',
      right: '20px',
      top: '20px',
      cursor: 'pointer'
    }

    return (
      <div>

        <StaticAppBar {...this.props}
          location={this.props.location} closeVideo={this.closeVideo} />

        <div className='section'>
          <div className='section-container'>
            <div className="hero">
              <img src={susiGif} style={{ margin: '20px 0' }} alt='Meet SUSI' />
              <h1>Meet SUSI, Your Personal Assistant.</h1>
              <p>Ask it questions. Tell it to do things. Always ready to help.</p>
              <a onClick={this.handleVideo} style={{
                color: '#3367d6',
                cursor: 'pointer', position: 'relative'
              }}>
                <PlayCircle style={{
                  fill: '#3367d6',
                  marginRight: '50px'
                }} /><span className='watchStyle'>Watch</span>
              </a>
            </div>
          </div>
        </div>
        <div className="section_copy">
          <div className="conversation__description">
            <div className="description__heading">Ask it anything.</div>
            <p className="description__text">
              Search for the capital of Vietnam or
                  find translations in different languages.
                  Ask SUSI for your location, and
                  what the weather’s like when you get there.</p>
          </div>
          <div className='img-container'>
            <img src={susiTestGif} alt='susi-test' className='susi-test' />
          </div>
        </div>
        <div className="section_copy">
          <div className="conversation__description">
            <div className="description__heading">Tell it to do things.</div>
            <p className="description__text">
              SUSI can listen to you through the Mic
                  and answer back on your Speaker.
                  You can activate the assistant saying
                  <b> &quot;Hi SUSI&quot;</b> already on many clients and devices.
                  The more you talk with SUSI the better it gets.
                  You can even tell SUSI to remember things.</p>
          </div>
          <div className='img-container'>
            <img src={mapAndroid} alt='Map' className='android-mockup' />
          </div>
        </div>
        <div className="section_copy">
          <div className="conversation__description">
            <div className="description__heading">For your Smartphone</div>
            <p className="description__text">SUSI is available for <b>Android</b>
              &nbsp;and <b>iOS devices</b>.
                   Download the App to have access to SUSI on the go.</p>
            <a href="https://github.com/fossasia/susi_android/raw/apk/susi-debug.apk"
              className="playstore">Get It on Google Play</a>
            <a href="https://github.com/fossasia/susi_iOS/"
              className="appstore">Download on the App Store</a>
          </div>
          <div className='img-container'>
            <img src={androidMockup} alt='Android Mockup' className='android-mockup' />
          </div>
        </div>

        <div className="section_copy">
          <div className="column_section">
            <div className="conversation__description custom_description">
              <div className='img-container'>
                <img src={bots} alt='Android Mockup' className='bots-mockup' />
              </div>
              <div className="description__heading">On many Platforms</div>
              <p className="description__text"><b>SUSI.AI</b> already runs on many chat
                    services and social networks. We are developing plugins for all
                    major services including
                    &nbsp;<a href='https://github.com/fossasia/susi_tweetbot'>Twitter</a>,
                    &nbsp;<a href='https://github.com/fossasia/susi_fbbot'>Facebook</a>,
                    &nbsp;<a href='https://github.com/fossasia/susi_linebot'>Line</a>,
                    &nbsp;<a href='https://github.com/fossasia/susi_slackbot'>Slack</a>,
                    &nbsp;<a href='https://github.com/fossasia/susi_wechatbot'>We Chat</a>,
                    &nbsp;<a href='https://github.com/fossasia/susi_viberbot'>Viber</a>,
                    &nbsp;<a href='https://github.com/fossasia/susi_gitterbot'>Gitter</a>.
                    Just set up SUSI on your channel and add
                    &nbsp;<b>@susi</b> in your conversations and SUSI is ready to help.
                    </p>
            </div>
          </div>
          <div className="column_section">
            <div className='img-container'>
              <img src={allDevices} alt='Android Mockup' className='bots-mockup' />
            </div>
            <div className="conversation__description custom_description">
              <div className="description__heading">For all Devices</div>
              <p className="description__text"><b >SUSI.AI</b> is available for android, iOS devices and also you can use it from <Link to="http://chat.susi.ai">http://chat.susi.ai</Link>
              </p>
            </div>

          </div>
          <div className="column_section">
            <div className="conversation__description custom_description">
              <div className='img-container'>
                <img src={manyLanguages} alt='Android Mockup' className='bots-mockup' />
              </div>
              <div className="description__heading">Use it in many Languages</div>
              <p className="description__text">You can use <b>SUSI.AI</b> in DIfferent
                     languages
                    </p>
            </div>

          </div>
        </div>{/* section_copy ends */}

        <div className="section_copy safty_and_secure">
          <div className="conversation__description">

            <div className="description__heading">Safe and secure.</div>
            <p className="description__text"><b>SUSI.AI</b> is <b>
              <Link style={{ textDecoration: 'none', color: '#000' }}
                target="_blank" to="https://github.com/fossasia?utf8=%E2%9C%93&q=susi">Open Source</Link></b>. The code is
                    always available for security reviews and can be improved by
                    anyone with the knowledge and understanding online.</p>
                    <div className="opensource-logos">
                        <span className="opensource">
                          <Link to="https://opensource.org/" target="_blank">
                          <img src={openSource} alt='osi' />
                          </Link>
                        </span>
                        <span className="github_logo">
                          <Link to="https://github.com/fossasia?utf8=✓&q=susi" target="_blank">
                          <img src={githubText} alt='ghlogo' />
                          </Link>
                        </span>
                    </div>
                  </div>
                  <div className='img-container'>
                    <img src={shield} alt='Android Mockup'className='shield'  />
                  </div>
                </div>


        <div className='footer'>
          <div className='footer-container'>
            <img src={susi} alt='SUSI' className='susi-logo' />
            <ul className='alignLeft'>
              <li><a href='/about'>About</a></li>
              <li><a href='http://blog.fossasia.org/tag/susi-ai/'>Blog</a></li>
              <li><a href='https://github.com/fossasia?utf8=%E2%9C%93&q=susi'>Code</a></li>
            </ul>
            <ul className='alignRight'>
              <li><a href='/settings'>Settings</a></li>
              <li><a href='/terms'>Terms</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Video */}
        <Modal
          isOpen={this.state.video}
          className="Video-Modal"
          onRequestClose={this.handleClose}
          contentLabel="Assistant Video"
          overlayClassName="Video-Overlay">
          <div className="video-container">
            <iframe id="player" type="text/html" frameBorder="0" allowFullScreen
              src="http://www.youtube.com/embed/tIG5griC-G0?enablejsapi=1&autoplay=1"></iframe>
            <Close style={closingStyle} onTouchTap={this.handleClose} />
          </div>
        </Modal>
      </div>
    );
  };
}

Overview.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
}

export default Overview;
