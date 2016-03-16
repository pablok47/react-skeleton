var React = require('react');  //node syntax to import react module
var ListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
});

module.exports = ListItem;
