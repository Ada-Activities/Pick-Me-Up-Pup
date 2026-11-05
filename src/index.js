const NUMBER_OF_DOGS = 15;

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const onLoaded = () => {
  // steps to carry out when the page has loaded
  console.log(pickRandomNumber());
};

onLoaded();
