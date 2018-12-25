var Item = React.createClass({

    displayName: 'Item',

    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function () {


        return React.DOM.div({className: 'Item'},
            React.DOM.h1({className: 'Title'}, this.props.item.name),
            React.DOM.img({className: 'Image', src: this.props.item.url, alt: this.props.item.name}),
            React.DOM.div({className: 'Price'}, this.props.item.price + '$'),
            React.DOM.div({className: 'Count'}, this.props.item.count + 'шт.'),
            React.DOM.button({className: 'Button'}, 'Buy now')

        );
    },

});





