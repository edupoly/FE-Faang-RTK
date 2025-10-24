import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../services/productsService";
import { employeesApi } from "../services/employeeService";
import { userApi } from "../services/userService";
import userReducer from "../userslice";
import { todosApi } from "../services/todoService";
export const store = configureStore({
  reducer: {
    userR: userReducer,
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      employeesApi.middleware,
      userApi.middleware,
      todosApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
