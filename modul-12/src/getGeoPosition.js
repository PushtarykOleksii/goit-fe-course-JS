export default () => {
    const options = {
      timeout: 5000,
      maximumAge: 1000 * 60 * 30
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  