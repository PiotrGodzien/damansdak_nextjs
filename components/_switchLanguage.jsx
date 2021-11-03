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
                className="h-6 border border-white w-9"
                src={`https://damansdak.s3.eu-central-1.amazonaws.com/${codeToCountry(
                  lng
                )}.png`}
                layout="fill"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SwitchLanguage;
