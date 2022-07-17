import "@styles/globals.scss";

import store from "@store/index.js";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "next-themes";

import Layout from "@components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Layout />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
