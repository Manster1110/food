import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer W23l5XPZvIqtAUO-Ci7bNfSV3kUUblGTll6yIrFuD_wocLwA4vU4jVsEDJ2YpGYnEd1uDxkh4I1_a3GkaZ03f07uhxnYNfQ3NN4LikmVPXofvZBSGCcZV_UlQewbYnYx'
  }
});