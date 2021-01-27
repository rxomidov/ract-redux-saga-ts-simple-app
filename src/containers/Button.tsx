import React from 'react'
import { connect } from 'react-redux'
import { getNews } from '../actions/index'
import { compose } from 'redux';

interface IButtonProps {
    loadNews: () => any
}

export class Button extends React.PureComponent<IButtonProps>{
    render() {
        return (
            <div className="text-center p-4">
                <button className="btn btn-success" onClick={this.props.loadNews}>Press to see news</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loadNews: getNews
};

export default connect(null,mapDispatchToProps)(Button);