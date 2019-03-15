import React, {Component} from 'react'
import Paper from 'material-ui/Paper/paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



export default class HomepageVideo extends Component{
    render() {

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      textAlign: 'center',
      transform: 'translate(-50%, -50%)',
      color: '#fff'
    }

    let backdropStyle = {
        position: 'relative',
      }

        return (
            <div>
            <div style={backdropStyle}>
                <video  width="100%" autoPlay loop>
                    <source src="https://s3.amazonaws.com/aws-website-bluewander-syg36/HomepageBackgroundVideo/landing_video_v2_sm.mp4" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div style={modalStyle}>{this.props.children}</div>
            </div>
        )
    }
}
