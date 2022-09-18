import React from "react";

import { withProviders } from "./providers";

import "./index.scss";

import { Routing } from "pages";

function App() {
  return (
    // Потенциально сюда можно вставить
    // Единый на все приложение хедер
    // Либо же делать это на отдельных страницах
    <Routing />
  );
}

export default withProviders(App);
