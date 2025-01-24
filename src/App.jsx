import { useState } from 'react'
import LudoBoardScreen from './screen/LudoBoardScreen'
import { Provider } from 'react-redux'
import { store, presistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} presistor={presistor}>
          <LudoBoardScreen />
        </PersistGate>


      </Provider>
    </>
  )
}

export default App
