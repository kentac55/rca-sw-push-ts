import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as serviceWorker from './serviceWorker'
import { TriggerAPI, TriggerSchema } from './endpoint'

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <NotifyButton />
            <UnregisterButton />
          </div>
        </header>
      </div>
    )
  }
}

function NotifyButton(): JSX.Element {
  function handleClick(ev: React.MouseEvent<HTMLElement>): void {
    ev.preventDefault()
    const msg: TriggerSchema = {
      msg: new Date().toLocaleString(),
    }
    fetch(TriggerAPI, {
      method: 'POST',
      body: JSON.stringify(msg),
    })
    console.log('Just triggered server to publish notifications.')
  }
  return <button onClick={handleClick}>{'Notify'}</button>
}

// function RegisterButton(): JSX.Element {
//   function handleClick(ev: React.MouseEvent<HTMLElement>): void {
//     ev.preventDefault()
//     serviceWorker.register()
//     console.log('ServiceWorker registered')
//   }
//   return <button onClick={handleClick}>{'Register'}</button>
// }

function UnregisterButton(): JSX.Element {
  function handleClick(ev: React.MouseEvent<HTMLElement>): void {
    ev.preventDefault()
    serviceWorker.unregister()
    console.log('ServiceWorker unregistered')
  }
  return <button onClick={handleClick}>{'Unregister'}</button>
}

export default App
