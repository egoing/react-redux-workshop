import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <article>
               <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        )
    }
}
