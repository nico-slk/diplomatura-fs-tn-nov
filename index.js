// Creador de Nombres de Bandas Aleatorios:
// ● Instrucciones: Escribe una función que genere nombres de bandas aleatorios y únicos cada vez que se llama.
// Puedes combinar palabras inusuales, colores extravagantes y animales exóticos para hacerlos sonar realmente interesantes.

const primerNombre = ["Miserable", "Comico", "Lamentable", "Desgraciada", "Increible", "Aburrido", "Terrorifico", "Fantastico", "Emocionante", "Infeliz"];
const segundoNombre = ["bipolar", "aventurero", "guerrero", "alcoholico", "sex-symbol", "sabinero", "soñador", "adicto", "loco", "asesino"];
function generadorNombres() {
  const indexPrimerNombre = Math.floor(Math.random() * 10);
  const indexSegundoNombre = Math.floor(Math.random() * 10);

  return `${primerNombre[indexPrimerNombre]} ${segundoNombre[indexSegundoNombre]}`;

}

// Conversor de Emociones a Emoji:
// ● Instrucciones: Crea una función que tome una cadena de texto que exprese emociones(como "feliz", "triste", "sorprendido") y
//   la convierta en un emoji correspondiente. ¡Añade una dosis de humor a tus emociones!

const txt = ["triste", "contento", "enojado", "loco", "sustado"];
const emoji = ["😟", "😄", "😡", "🤪", "😱"];

function fromTextToEmoji(emocion) {
  if (txt.indexOf(emocion) >= 0) {
    let emojiIndex = txt.indexOf(emocion);
    return emoji[emojiIndex];
  }
}

// Instrucciones:
// Desarrolla una función que genere historias absurdas combinando elementos inesperados, como pingüinos que hablan francés,
// robots enamorados de plantas y astronautas perdidos en el espacio con una mascota alienígena.

let antepuestos = ["el", "la", "este", "ese", "aquel", "mi", "tu", "su", "uno", "dos"];
let sujetos = ["robot", "humano", "perro", "alien", "piedra", "mago", "dragon", "alemán", "oso", "dios"];
let pronombres = ["me", "te", "lo", "la", "nos", "les", "se", "me", "te", "lo"];
let accionTerceraPersona = ["envejeció", "peleó", "leyó", "entregó", "marchó", "durmió", "regaló", "vino", "mordió", "asustó"];
let conjCasual = ["porque", "ya que", "por la razon de que", "pues", "y luego", "donde", "porque", "ya que", "por la razon de que", "pues"];
let accion = ["mori", "cocine", "cai", "rapté", "maté", "corrí", "compartí", "canté", "exploté", "volé"];

function historia() {
  const indexSujetos = Math.floor(Math.random() * 10);
  const indexAccion = Math.floor(Math.random() * 10);
  const indexAccionTerceraPersona = Math.floor(Math.random() * 10);
  const indexAntepuestos = Math.floor(Math.random() * 10);
  const indexPronombres = Math.floor(Math.random() * 10);
  const indexConjCasual = Math.floor(Math.random() * 10);

  return `${antepuestos[indexAntepuestos]} ${sujetos[indexSujetos]} ${pronombres[indexPronombres]} ${accionTerceraPersona[indexAccionTerceraPersona]} ${conjCasual[indexConjCasual]} ${accion[indexAccion]}`;
}

// Instrucciones: Escribe una función que, dado un año, devuelva una recomendación de canciones populares de esa época.
// Puedes mezclar diferentes géneros y hacer recomendaciones basadas en eventos históricos de ese año.

let setentas = [
  '"Stairway to Heaven" - Led Zeppelin',
  '"Bohemian Rhapsody" - Queen',
  '"Imagine" - John Lennon',
  '"Hotel California" - Eagles',
  '"Dancing Queen" - ABBA',
  '"Superstition" - Stevie Wonder',
  '"American Pie" - Don McLean',
  '"Stayin Alive" - Bee Gees',
  '"Sweet Home Alabama" - Lynyrd Skynyrd',
  '"I Will Survive" - Gloria Gaynor',
];
let ochentas = [
  '"Billie Jean" - Michael Jackson',
  '"Like a Virgin" - Madonna',
  '"Sweet Child o Mine" - Guns N Roses',
  '"Every Breath You Take" - The Police',
  '"Take on Me" - a - ha',
  '"Wake Me Up Before You Go-Go" - Wham!',
  '"Purple Rain" - Prince and The Revolution',
  '"Livin on a Prayer" - Bon Jovi',
  '"Tainted Love" - Soft Cell',
  '"Walk Like an Egyptian" - The Bangles',
];
let noventas = [
  '"Smells Like Teen Spirit" - Nirvana',
  '"Wannabe" - Spice Girls',
  '"No Scrubs" - TLC',
  '"Enter Sandman" - Metallica',
  '"Smooth" - Santana featuring Rob Thomas',
  '"Vogue" - Madonna',
  '"Baby One More Time" - Britney Spears',
  '"Black Hole Sun" - Soundgarden',
  '"Waterfalls" - TLC',
  '"I Will Always Love You" - Whitney Houston',
];
let dosmil = [
  '"Hey Ya!" - OutKast',
  '"Crazy in Love" - Beyoncé featuring Jay - Z',
  '"Mr. Brightside" - The Killers',
  '"Beautiful Day" - U2',
  '"Hips Dont Lie" - Shakira featuring Wyclef Jean',
  '"Hot n Cold" - Katy Perry',
  '"I Gotta Feeling" - The Black Eyed Peas',
  '"Umbrella" - Rihanna featuring Jay - Z',
  '"Use Somebody" - Kings of Leon',
  '"Chasing Cars" - Snow Patrol',
];
function recomendarCancion(decade) {
  let index = Math.floor(Math.random() * 10);
  if (decade === "70") return setentas[index];
  if (decade === "80") return ochentas[index];
  if (decade === "90") return noventas[index];
  if (decade === "00") return dosmil[index];
}
