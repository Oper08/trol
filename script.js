// Массив с названиями звуков
const sounds = ['strashnye-istorii-kriki-shorohi-i-strashnye-zvuki.mp3'];

// Функция случайного звука
function playRandomSound() {
  const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
  audio.volume = 1;
  audio.play();
}

// Ждём 2 секунды, затем начинаем воспроизводить звуки с интервалом
setTimeout(() => {
  playRandomSound();

  setInterval(() => {
    playRandomSound();
  }, Math.random() * 5000 + 3000); // каждые 3–8 секунд
}, 2000);
