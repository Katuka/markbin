import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../api/Bins';
import { Meteor } from 'meteor/meteor';
import BinsEditor from './BinsEditor';
import BinsViewer from './BinsViewer';
import BinsShare from './BInsShare';


class BinsMain extends Component {
    render() {
        if(!this.props.bin) {return <div>Loading...</div>}
        return (
            <div>
                <BinsEditor bin={this.props.bin} />
                <BinsViewer bin={this.props.bin} />
                <BinsShare bin={this.props.bin} />
            </div>
        );
    }
}

export default withTracker((props) => {
    const { binId } = props.match.params;

    Meteor.subscribe('bins');
    // Meteor.subscribe('sharedBins');

    return { bin: Bins.findOne(binId) };

})(BinsMain);