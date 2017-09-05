import React, { Component } from 'react';

class FilterLink extends Component {
    renderFilter = () => {
        if (this.props.filter === this.props.currentFilter) {
            return <span>{this.props.children}</span>
        }
        return <a href="#"
            onClick={ e => {
                e.preventDefault();
                this.props.store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: this.props.filter
                });
            }}
        >
            {this.props.children}
        </a>;
    }
    render() {
        return (
            this.renderFilter()
        );
    }
}

export default FilterLink;