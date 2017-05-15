import React, { Component } from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Album from './Album';

const TOKEN = process.env.REACT_APP_TOKEN;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    fontFamily: 'Roboto',
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const token = TOKEN,
    num_photos = 16;

    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos},
      success: (res) => {
        this.setState({ photos: res.data });
      },
      error: (data) => console.log(data)
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <Album photos={ this.state.photos } />
        </div>
      </MuiThemeProvider>
    );
  }
}
