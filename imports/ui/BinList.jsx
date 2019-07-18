import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../api/Bins';
import { Link } from 'react-router-dom';

class BinList extends Component {

    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderItem = () => {
        return this.props.bins.map(bin => {
            const url = `/bins/${bin._id}`
            return(
                <li className="list-group-item" key={bin._id}>
                    <Link to={url}>Bin {bin._id}</Link>
                    <span className="pull-right">
                        <button 
                            onClick={() => this.onBinRemove(bin)}
                            className="btn btn-danger">
                            Remove
                        </button>
                    </span>
                </li>
            );
        })
    }


    render() {
        return(
            <div>
                <ul className="list-group">
                    {this.renderItem()}
                </ul>
            </div>
        );
    }
}


export default withTracker(() => {
    Meteor.subscribe('bins');
    // Meteor.subscribe('sharedBins');


    return { bins: Bins.find({}).fetch() }
})(BinList);

// export default createContainer(() => {
//     Meteor.subscribe('bins');

//     return { bins: Bins.find({}).fetch() }
// }, BinList)