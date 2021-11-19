import React from "react";
import i18nConfig from "../i18n.json";
import Link from "next/link";

const SwitchLanguage = () => {
  const { locales } = i18nConfig;

  const codeToCountry = (code) => {
    switch (code) {
      case "de":
        return "germany";

      case "en":
        return "united";

      case "ru":
        return "russia";

      default:
        return "poland";
    }
  };
  return (
    <>
      <div className="flex space-x-4">
        {locales.map((lng) => {
          return (
            <Link href="" locale={lng} key={lng}>
              {/* {t(`${flags}`)} */}
              <img
                alt=""
                className="w-6 h-4 border border-white"
                src={`/${codeToCountry(
                  lng
                )}.webp`}
                layout="fill"
                width={141}
                height={82}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SwitchLanguage;
