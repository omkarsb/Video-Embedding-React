import React, {Component} from 'react'
import './hpvideoUpText.css'
import PropTypes from 'prop-types';


export default class HPVideoUpText extends Component{
    render() {
        const text = this.props.videotextblock;

        console.log(text);
        return (
            <div className="video-text">
                <div className="video-text__title">               
                    <p>{text.title}</p>
                </div>
                <div className="video-text__subtitle">
                    <p>{text.subtitle}</p>
                </div>
            </div>
        )
    }
}

HPVideoUpText.propTypes = {
    videotextblock: PropTypes.object.isRequired
};
