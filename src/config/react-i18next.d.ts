import "react-i18next";

import translationEN from "locales/en/translation.json";
import qualificationEN from "locales/en/qualification.json";

declare module "react-i18next" {
  // and extend them!
  interface Resources {
    translation: typeof translationEN;
    qualification: typeof qualificationEN;
  }
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";

    resources: {
      translation: typeof translationEN;
      qualification: typeof qualificationEN;
    };
  }
}
