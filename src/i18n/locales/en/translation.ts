import navigation from "./navigation.json";
import donationInfo from "./donationInfo.json";
import heroSection from "./heroSection.json";
import termsSection from "./termsSection.json";
import aboutSection from "./aboutSection.json";
import cardSection from "./cardSection.json";
import addressSection from "./addressSection.json";
import chooseSection from "./chooseSection.json";
import common from "./common.json";
import helpSection from "./helpSection.json";
import animals from "./animals.json";

const en = {
  translation: {
    ...animals,
    ...navigation,
    ...donationInfo,
    ...heroSection,
    ...aboutSection,
    ...chooseSection,
    ...cardSection,
    ...termsSection,
    ...addressSection,
    ...helpSection,
    ...common,
  },
};

export default en;
