/** @jsx React.DOM */


var React = require('react');
var Node = require('./Node.react');
var _ = require('underscore');
var ReactPropTypes = React.PropTypes;


var getNode = function(node, key) {
  return <Node
            key={key}
            time={node.time}
            place={node.place}
            creator={node.creator}
            attendees={node.attendees}
          />
}


var Outline = React.createClass({

  propTypes: {
   nodes: ReactPropTypes.object.isRequired
  },

  render: function() {
    var nodes = _.map(this.props.nodes, getNode)

    return (
      <div className="row clearfix">
        <div className="panel panel-primary filterable">
            <div className="panel-heading">
                <h3 className="panel-title">Events</h3>
            </div>
            <table className="table">
                <thead>
                    <tr className="filters">
                        <th>Time</th>
                        <th>Location</th>
                        <th>Attendees</th>
                        <th>Organizer</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {nodes}
                </tbody>
            </table>
        </div>
      <a id="add_row" className="btn btn-default pull-right">Add Row</a>
      </div>
    );

  },


});

module.exports = Outline;
