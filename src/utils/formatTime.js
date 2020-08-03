export const formatTime = (time) => {
  if(isNaN(time) || time < 0 || time == null) {
    return null;
  } else {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time/ 3600);

    return toString(hours).padStart(2, '02') + ':' + toString(minutes).padStart(2,'02') + ':' + toString(seconds).padStart(2,'02');
  }


};
