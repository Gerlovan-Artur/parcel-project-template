import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
    );


if (localStorage.getItem('videoplayer-current-time') !== null) {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(function (error) {
    console.error(error)
});
};