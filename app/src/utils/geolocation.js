export const getCurrentLocation = () => {
  const getCoords = () => {
    return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    }
    
    const getLocation = async () => {
    let pos = {};
    let position = await getCoords();
    pos.lat = position.coords.latitude;
    pos.lng = position.coords.longitude;
    return pos

    };

    const positions =  getLocation().then(res => {
    return res;
    })
    return positions;
}
;