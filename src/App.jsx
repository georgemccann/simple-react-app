import React, {Suspense} from "react";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import AppRouter from "@/routers/AppRouter";

function App() { 
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter/>
      </Suspense>
    </Provider>
  )
}

export default App
