class Clock extends React.Component {

  /**
  * Constructor of this class
  */
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };

    // this binding is necessary to make 'this' works in the callback
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmout() {
    console.log('componentWillMount');
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  onClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log('onclick: isToggleOn='+this.state.isToggleOn);
  }

  render() {
    return (
      <div>
        <h1>Current time:</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.onClick}>{this.state.isToggleOn.toString()}</button>
      </div>
    );
  }
}

export default Clock;
