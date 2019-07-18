import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import { Meteor } from 'meteor/meteor';


export default class BinsEditor extends Component {

    onContentChange = (content) => {
        Meteor.call('bins.update', this.props.bin, content)
    }
    render() {
        console.log(this.props)
        return (
            <div className="col-xs-8">
            <h5 className="h3">Input</h5>
                <CodeMirror 
                    value={this.props.bin.content}
                    onChange={this.onContentChange}
                    options={{ mode: 'markdown', lineNumbers: true }}
                />
            </div>
        )
    }
}