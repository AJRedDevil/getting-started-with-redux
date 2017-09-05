import React, { Component } from 'react';

// Link Presentation Component
const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span>{children}</span>
    }
    return <a href="#"
        onClick={ e => {
            e.preventDefault();
            onClick();
        }}
    >
        {children}
    </a>    
};

// FilterLink Container
class FilterLink  extends Component {
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
                active = {
                    props.filter === state.visibilityFilter
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
        )
    }
}

// Footer Presentation Component
const Footer = ({
    store
}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
            store={store}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_ACTIVE'
            store={store}
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_COMPLETED'
            store={store}
        >
            Completed
        </FilterLink>
    </p>
);

export default Footer;