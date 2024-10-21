import navigation from "./navigation.json";
import donationInfo from "./donationInfo.json";
import cardSection from "./cardSection.json";
import aboutSection from "./aboutSection.json";
import termsSection from "./termsSection.json";
import chooseSection from "./chooseSection.json";

import animals from "./animals.json";
import heroSection from "./heroSection.json";
import common from "./common.json";
import helpSection from "./helpSection.json";
import addressSection from "./addressSection.json";

const uk = {
  translation: {
    ...animals,
    ...navigation,
    ...donationInfo,
    ...chooseSection,
    ...heroSection,
    ...aboutSection,
    ...cardSection,
    ...termsSection,
    ...addressSection,
    ...helpSection,
    ...common,
  },
};

export default uk;
