import React from "react";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const { t, lang } = useTranslation("common");
  const [state, handleSubmit] = useForm("moqrvdlz");
  if (state.succeeded) {
    return <p className="text-4xl font-bold text-black">Dziękujemy za przesłanie formularza!</p>;
  }
  return (

      
      <div class="w-full lg:w-1/2 px-4">
        <div class="bg-white p-8 lg:p-16">
          <h3 class="mb-2 text-2xl text-primary font-bold font-heading">Formularz kontaktowy</h3>
          <p class="mb-6 text-gray-500">Skontaktuj się z nami za pomocą formularza.</p>
          <form action="/realizacje/stargard-szczecinski" onSubmit={handleSubmit}>
          {/* <input class="block w-full bg-gray-50 py-4 pl-6 mb-2 placeholder-gray-400 text-sm text-gray-400" type="name" placeholder="Imię" /> */}
            <input class="block w-full bg-gray-50 py-4 pl-6 mb-2 placeholder-gray-400 text-sm text-gray-400" id="email" name="email" type="email" placeholder="Email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" class="block w-full bg-gray-50 py-4 px-6 mb-2 resize-none placeholder-gray-400 tetx-sm text-gray-400" rows="4" placeholder="Twoja wiadomość..." />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button type="submit" disabled={state.submitting} class="block w-full py-5 bg-black hover:bg-primary text-sm text-white uppercase font-bold transition duration-200">WYŚLIJ</button>

          </form>
        </div>
      </div>

  






    /* <div className="">
    <form className="flex justify-around" onSubmit={handleSubmit}>
      <label className="text-black " htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="bg-red-500" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div> */
  );
}

export default ContactForm;
