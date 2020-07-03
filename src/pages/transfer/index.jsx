import React from 'react';
class Transfer extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.history.replace(this.props.location.query.path);
  }
  render(){
    return (
      <React.Fragment></React.Fragment>
    )
  }
}
export default Transfer;