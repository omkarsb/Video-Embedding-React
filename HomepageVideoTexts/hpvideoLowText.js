import React, {Component} from 'react'
import './hpvideoLowText.css'
import PropTypes from 'prop-types';


export default class HPVideoLowText extends Component{
    render() {
        const text = this.props.videotextblock;

        console.log(text);
        return (
            <div className="video-text">
                <div className="video-text__redirectInfo">
                    <p>{text.redirectInfo}</p>
                    <button className="video-text__button">{text.buttontext}</button>
                </div>
            </div>
        )
    }
}

HPVideoLowText.propTypes = {
    videotextblock: PropTypes.object.isRequired
};
