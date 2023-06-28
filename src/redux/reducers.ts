import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import site from "./slices/siteDetails";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const templateConfig = {
  key: "template",
  storage: storage,
};

const rootReducer = combineReducers({
  routing: routerReducer,
  site: persistReducer(templateConfig, site),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
