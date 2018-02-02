import React, { Component } from 'react'
import { API_KEY,
  LYFT_CLIENT_ID,
  LYFT_CLIENT_SECRET,
  LYFT_CLIENT_TOKEN
} from "../../../config.js";
import { Redirect } from 'react-router-dom';
import lyft from 'node-lyft';


// const getAddress = (lat, lng) =>
//   fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
//       lat
//     },${lng}&key=${config.MAPS_API}`
//   ).then(result => {
//     return {
  //       address: result[0].formatted_address
  //     };
  //   });

  // let defaultClient = lyft.ApiClient.instance;

  // Configure OAuth2 access token for authorization: User Authentication
  // let userAuth = defaultClient.authentications["User Authentication"];
  // userAuth.accessToken = API_KEY;

  // let apiInstance = new lyft.UserApi();

  // let request = new lyft.Ride("lyft", new lyft.Location(this.state.lat, this.state.lng));
  // request.destination = new lyft.Location(37.771, -122.39123);

  // apiInstance.newRide(request).then(data => {
  //     console.log("API called successfully. Returned data: " + data);
  //   }, error => {
  //     console.error(error);
  // });

class Occasion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickuplat: "waiting",
      pickuplng: "waiting",
      event: "",
      destlat: "",
      destlng: "",
    };
    // this.getLyftRide = this.getLyftRide.bind(this);
    // this.contactLyft = this.contactLyft.bind(this);
  }

  getCoords(address) {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(result => {
        return {
          lat: result.results[0].geometry.location.lat,
          lng: result.results[0].geometry.location.lng
        };
      });
  }

  chooseOccasion(title) {
    return this.props.events.filter(
      occ => occ.title.split(" ").join("") === title
    );
  }

  // contactLyft(event) {
  //   event.preventDefault();

  //   fetch(`https://api.lyft.com/oauth/authorize?client_id=${LYFT_CLIENT_ID}&scope=public%20profile%20rides.read%20rides.request%20offline&state=<state_string>&response_type=code`);

  //   // fetch('https://api.lyft.com/oauth/token', {
  //   //   method: 'POST',
  //   //   headers: new Headers({
  //   //     'Content-Type': 'application/json'
  //   //   }),
  //   //   body: data
  //   // })
  // }

  // getLyftRide() {
  //   <Redirect to={`https://api.lyft.com/oauth/authorize?client_id=${LYFT_CLIENT_ID}&scope=public%20profile%20rides.read%20rides.request%20offline&state=<state_string>&response_type=code`} />
  // }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        pickuplat: position.coords.latitude,
        pickuplng: position.coords.longitude
      });
    });

    this.setState({
      event: this.chooseOccasion(
        window.location.href.replace(/http:\/\/localhost:3000\/#occasion\//, "")
      )[0]
    });

    this.getCoords(this.state.event.address).then(result => {
      this.setState({
        destlat: result.lat,
        destlng: result.lng
      });
    });
  }

  render() {
    return <div className="Occasion">
        <div className="page">
          <h3 className="page--title">{this.state.event.title}</h3>
          <a type="button" className="btn" href={`https://api.lyft.com/oauth/authorize?client_id=${LYFT_CLIENT_ID}&scope=public%20profile%20rides.read%20rides.request%20offline&state=<state_string>&response_type=code`}>
            Need a Lyft?
          </a>
        </div>
      </div>;
  }
}

export default Occasion;
