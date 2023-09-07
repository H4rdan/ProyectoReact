import React from "react";
import "../../styles/ProgressBar.css";

class ProgressBar extends React.Component {
    render() {
        const { value, maxValue } = this.props;
        const progressWidth = (value / maxValue) * 100;

        return (
            <div className="progress-bar-container">
                <div className="progress-bar-max"></div>
                <div className="progress-bar-fill" style={{ width: `${progressWidth}%` }}>
                </div>
            </div>
        );
    }
}

export default ProgressBar;