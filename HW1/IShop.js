var IShop = React.createClass({

  displayName: 'IShop',

  propTypes: {
    titleText: React.PropTypes.string.isRequired,
    items:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired
      })
    )
  },

  render: function() {

    var items=this.props.items.map( model =>
        React.createElement(Item, {item:model, key:model.id} )
      );


    return React.DOM.div( {className:'IShop'},
      React.DOM.div( {className:'Title'}, this.props.titleText ),
      React.DOM.div( {className:'Items'}, items )
    );
  },

});