import { FC } from "react";
import { Provider } from "react-redux";

export const withStore = (store: StoreType) => (Component: FC) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
