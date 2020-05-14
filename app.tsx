import React, { ReactElement } from 'react'
import { render } from 'react-dom'

interface Props {
  foo: string;
}

const App = ({ foo }: Props): ReactElement => {
  // Should fail. Typescript validation.
  const hello: number = { a: 1 }
  console.log(hello)

  // Should NOT fail. The "as" operator is legal.
  const world = 'world' as string
  console.log(world)

  // Should fail. The eslint:recommended rules prohibit this.
  if (true) {}

  return <h1>ok?</h1>
}

// Should fail. React validation.
render(<App />, document.getElementById('react'))
