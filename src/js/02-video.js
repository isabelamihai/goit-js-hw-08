import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const saveCurrentTime = throttle(function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}, 1000);
player.on('timeupdate', saveCurrentTime);
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime).catch(function (error) {
    console.error('Error setting current time:', error);
  });
}

