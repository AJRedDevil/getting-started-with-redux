import React, { Component } from 'react';

const Link = ({
    active,
    filter,
    onClick,
    children
}) => {
    if (active) {
        return <span>{children}</span>;
    }
    
    return (
        <a
            href='#'
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => 
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = props.store.getState();

        return (
            <Link
                active={
                    props.filter ===
                    state.visibilityFilter
                }
                onClick={() => 
                    props.store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        );
    }
}

export default FilterLink;