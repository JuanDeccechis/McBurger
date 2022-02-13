import React from 'react';

class ItemDetailPageProductAdded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let path = `/detail`;
        this.props.history.push(path);
    }

    render() {
        return (
            <></>
        )
    }
}

export default ItemDetailPageProductAdded;
