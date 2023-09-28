import React, {Component} from 'react';
import './clock.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state= {
            city: props.location,
            times: getTimeWithOffset(props.offset),
            
        };

        setInterval(() => {
            this.setState({
                times: getTimeWithOffset(props.offset)
            });
        },1000);
    }

    render() {
        return (
            <div className="clock">
               <div className="clock__location">{this.state.city}</div>
               <div className="clock__time">{formatDate(this.state.times)}</div>
            </div>
        );
    }
}

export default Clock;

