import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');

// Ініціалізація бібліотеки
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

// Запис ключа до сховища
const localStorageKey = 'videoplayer-current-time';

// Відстежування події timeupdate - оновлення часу відтворення
player.on(
  'timeupdate',
  throttle(e => {
    // Збереження часу відтворення у локальне сховище
    localStorage.setItem(localStorageKey, e.seconds); // Час відтворення оновлюється у сховищі не частіше, ніж раз на секунду
  }, 1000)
);

// Відновлення відтворення зі збереженої позиції під час перезавантаження сторінки.
// Якщо пустий localStorage - getItem повертає null. Засетиться 0.
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

const currentTime = localStorage.getItem(localStorageKey);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
