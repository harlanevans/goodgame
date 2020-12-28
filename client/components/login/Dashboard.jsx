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
    };
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <h1>HI!</h1>
        <Header />
        <ResultsDisplay />
      </div>
    );
  }
}

const Header = (props) => {
  
}

const ResultsDisplay = (props) => {
  
}

const result = (props) => {

}

export default Dashboard;
