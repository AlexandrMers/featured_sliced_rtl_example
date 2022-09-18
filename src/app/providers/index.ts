import compose from "compose-function";

import { store } from "app/store";

import { withRouter } from "./with-router";
import { withStore } from "./with-store";

// TODO - не забыть передать store ...
export const withProviders = compose(withRouter, withStore(store));
