import { useState } from 'react'
import LudoBoardScreen from './screen/LudoBoardScreen'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from "redux-persist/integration/react";


function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <LudoBoardScreen />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
