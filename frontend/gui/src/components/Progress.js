import React, { Component } from 'react';
import '../styling/Progress.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestion: false,
            questions: this.props.questions,
        };
    }

    render() {
        return (
            <div className="ProgressBox">
                {this.state.questions.map(i => (
                    <span><FontAwesomeIcon icon={i.answered ? faCheckSquare : faSquare} size={"2x"} /><span>  </span></span>
                ))}
            </div>
        );
    }
}

export default Progress;