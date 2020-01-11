import React, { Component } from 'react'

export default class Create extends Component {
    render() {
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                );
            }.bind(this)}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea type="text" name="desc" placeholder="description"></textarea></p>
                <p><input type="submit"></input></p>
            </form>
        )
    }
}
