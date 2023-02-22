/* Import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* Import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Import specific icons */
import {
  faHouse,
  faGear,
  faCircleInfo,
  faBookOpen,
  faBookBible,
  faHandsPraying,
  faCross
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faHouse);
library.add(faGear);
library.add(faCircleInfo);
library.add(faBookOpen);
library.add(faBookBible);
library.add(faHandsPraying);
library.add(faCross);

export default FontAwesomeIcon