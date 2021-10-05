import 'tailwindcss/tailwind.css'
import Typewriter from 'typewriter-effect/dist/core';
// import Typewriter from 'typewriter-effect';

new Typewriter("#typewriter-hero", {
  strings: ["dachy stalowe", "dachy betonowe", "renowację dachów"],
  autoStart: true,
  loop: true,
  delay: 75,
  cursorClassName: "bg-clip-border font-normal",
});


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
