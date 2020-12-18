import React, { Component } from 'react';
import { io } from 'socket.io-client'

class News extends Component {
    constructor(props) {
        super(props);
        this.socket = null
        this.state = {
            news: [
                'title 1',
                'title 2',
            ],
        }
    }

    componentDidMount() {
        this.socket = io();
        this.socket.on('breaking-news', msg => {
            this.setState({ news: [...this.state.news, msg] })
        });
    }

    render() {
        return (
            <div>
                <h1>News</h1>
                <div>
                    <div className="body-css">
                        {this.state.news.map(title => <h3 key={title}>{title}</h3>)}
                    </div>
                </div>
            </div>

        );
    }
}

export default News;