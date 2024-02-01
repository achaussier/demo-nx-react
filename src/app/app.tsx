// eslint-disable-next-line @typescript-eslint/no-unused-vars

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <button onClick={() => { throw new Error()}}>Break the world</button>;
      <NxWelcome title="myreactapp" />
    </div>
  );
}

export default App;
