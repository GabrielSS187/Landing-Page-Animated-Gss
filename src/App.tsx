import { I18nextProvider } from "react-i18next";
import i18n from "./translation";

import { Router } from "./routes/index";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Router />
      <GlobalStyles />
    </I18nextProvider>
  )
};

export default App;
