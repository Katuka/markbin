import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


export default class BinsShare extends Component {

    onShare = () => {
        const email = this.refs.email.value.trim();

        Meteor.call('bin.share', this.props.bin, email);
    }

    renderSharedWith = () => {
        return this.props.bin.sharedWith.map(email => {
            return (
                <button key={email} className="btn btn-default">
                    {email}
                </button>
            );
        })
    }
    render() {
        // console.log(this.props.bin)
        return(
            <footer className="bins-share">
                <div className="input-group">
                    <input 
                        ref="email"
                        className="form-control"
                    />
                    <div className="input-group-btn">
                        <button 
                            onClick={this.onShare}
                            className="btn btn-default">
                            Share bin
                        </button>
                    </div>
                </div>
                <div>
                    Shared With: 
                </div>
                <div className="btn-group">
                    {this.renderSharedWith()}
                </div>
            </footer>
        );
    }
}