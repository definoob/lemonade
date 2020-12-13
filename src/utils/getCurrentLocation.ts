export const getCurrentLocation = (callback: Function) => {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(
    (position) =>
      callback({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }),
    (err) => callback({ lat: 0, long: 0 }),
    options
  );
};
