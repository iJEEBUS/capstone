import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ProblemDetail extends React.Component {

    state = {
        problem: {}
    }

    componentDidMount() {
        // this queries server and populates the students 
        // list with all students
        const problemID = this.props.match.params.problemID;
        axios.get('http://localhost:8000/api/problems/' + problemID)
            .then(res => {
                this.setState({
                    problem: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.problem.title}>
                <p>{this.state.problem.content}</p>
            </Card>
        )
    }
}

export default ProblemDetail;