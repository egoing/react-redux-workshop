import React, { Component } from 'react'

export default class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="create" onClick={function(e){
                    this.props.onClick('CREATE');
                    e.preventDefault();
                }.bind(this)}>create</a></li>
                <li><a href="update" onClick={function(e){
                    this.props.onClick('UPDATE');
                    e.preventDefault();
                }.bind(this)}>update</a></li>
                <li>
                    <input type="button" value="delete" onClick={function(e){
                        this.props.onClick('DELETE');
                        e.preventDefault();
                    }.bind(this)}></input>
                </li>
            </ul>
        )
    }
}
