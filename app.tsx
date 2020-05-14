import React from 'react'
import { render } from 'react-dom'

const App = () => {
  // Should fail. Typescript validation.
  const hello: string = 1 // eslint-disable-line no-unused-vars

  // Should NOT fail. The "as" operator is legal.
  const world = 'world' as any // eslint-disable-line no-unused-vars

  // Should fail. The eslint:recommended rules prohibit this.
  if (true) {}

  return <h1>Ok</h1>
}

render(<App />, document.getElementById('react'))