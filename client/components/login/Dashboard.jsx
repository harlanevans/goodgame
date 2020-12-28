import React from 'react';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      genre: '',
      platform: '',
      review: '',
      result: [],
    };
  }

  componentDidMount() {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({result: data});
      })
      .catch(err => console.log(err));
  }

  render() {
    const dashboardStyle = {
      height: '100%',
      width: '100%',
      background: 'blue',
    };

    return (
      <div style={dashboardStyle}>
        <h1>HI!</h1>
        <Container />
      </div>
    );
  }
}

const Container = (props) => {
  const containerStyle = {
    height: '100%',
    width: '100%',
    background: 'red',
  };
  return (
    <div style={containerStyle}>
      <h1>Container</h1>
      <Header />
      <ResultsDisplay />
    </div>
    // later render Header and ResultsDisplay
  );
};

const Header = (props) => {
  const headerStyle = {
    height: '100px',
    width: '500px',
    color: 'salmon',
  };

  return(
    <div style={headerStyle}>
      <h1>Header</h1>
    </div>
  );
};

const ResultsDisplay = (props) => {
  const resultsDisplayStyle = {
    width: '500px',
    height: '500px',
    background: 'green',
  }
  return (
    <div style={resultsDisplayStyle}>
      <h1>ResultsDisplay</h1>
    </div>
  );
}

// const result = (props) => {
//   return (

//   );
// }

export default Dashboard;
