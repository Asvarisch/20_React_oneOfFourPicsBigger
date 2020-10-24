class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '800px',
      width: '800px',
      //zoomedIn: false
      
    } 
  }

  // handleScreenSizeChange = () => {
  //   this.setState({
  //     height: '800px',
  //     width: '800px',
  //     zoomedIn: true
  //   })
  // }

  render() {
    const COLORS = {
      red: 'red',
      blue: 'blue',
      yellow: 'yellow',
      green: 'green'

    }

    return (
      
      <div className='container'>
        <Rectangle className={COLORS.red}/>
        <Rectangle className={COLORS.blue}/>
        <Rectangle className={COLORS.yellow}/>
        <Rectangle className={COLORS.green}/>
      </div>
    );
  }


}


class Rectangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 400,
      width: 400,
      isZoom: false
    } 
    // this.rectangle = React.createRef();
  }

  handleZoomIn = () => {
    this.setState({
      height: 800,
      width: 800, 
      isZoom: true
    } );
  }

  handleZoomOut = () => {
    this.setState({
      height: 400,
      width: 400,
      isZoom: false
    } );
  }

  render() {
    
    return (
      <div
      style={this.state}
      className={this.props.className}
      onClick={this.state.isZoom? this.handleZoomOut : this.handleZoomIn}
      // onClick={this.props.handleScreenSizeChange}
      >
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
