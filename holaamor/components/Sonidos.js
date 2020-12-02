

const sonidos = [];

function Sound(name, color, sound) {
  let datos = {
    name,
    color,
    sound,
  };
  sonidos.push(datos);
}

new Sound("Corazón", "#373854", "../static_assets/heartbeat-03.mp3");
new Sound("Carillón", "#aec3ee", "../static_assets/wind-chime-2.mp3");
new Sound("Cepillo", "#e75ffb", "../static_assets/hair-brush-1.mp3");
new Sound("Cassette", "#e75ffb", "../static_assets/cassette-in-close-1.mp3");
new Sound("Vibrador", "#ec8c8c", "../static_assets/cell-phone-vibrate-1.mp3");
new Sound("Monedas", "#aec3ee", "../static_assets/coins-in-hand-2.mp3");
new Sound("Comer", "#e75ffb", "../static_assets/crunching-1.mp3");
new Sound("Billetes", "#f4ffc6", "../static_assets/counting-money-02.mp3");
new Sound("Latidos", "#f6adc5", "../static_assets/heartbeat-01a.mp3");
new Sound("Esfero", "#aec3ee", "../static_assets/ink-pen-1.mp3");
new Sound("Besos", "#f4ffc6", "../static_assets/Man kiss, kissing male,.wav");
new Sound("Risas", "#e75ffb", "../static_assets/man-laughing-02.mp3");
new Sound("Marcador", "#373854", "../static_assets/marker-2.mp3");
new Sound("Lapiz", "#aec3ee", "../static_assets/pencil-1.mp3");
new Sound("Señal", "#e75ffb", "../static_assets/phone-busy-1.mp3");
new Sound("Latir", "#373854", "../static_assets/heartbeat-04.mp3");
new Sound("Gemir", "#f4ffc6", "../static_assets/Pleasure 1.wav");
new Sound("Beso", "#f4ffc6", "../static_assets/Big kiss.wav");
new Sound("Lluvia", "#e75ffb", "../static_assets/rain-07.mp3");
new Sound("Café", "#373854", "../static_assets/restaurant-1.mp3");
new Sound("Calma", "#aec3ee", "../static_assets/spring-weather-1.mp3");
new Sound("Estirar", "#e75ffb", "../static_assets/Straining 2.wav");
new Sound("Arroyo", "#f4ffc6", "../static_assets/stream-3.mp3");
new Sound("Jugar", "#e75ffb", "../static_assets/toy-rattle-1.mp3");
new Sound("Risa", "#e75ffb", "../static_assets/laughter-2.mp3");
new Sound("llanto", "#373854", "../static_assets/Woman crying 1.wav");


export default sonidos;
