import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const About = React.lazy(() => import('about/Module'));

const App1 = React.lazy(() => import('app1/Module'));

const App2 = React.lazy(() => import('app2/Module'));

const App3 = React.lazy(() => import('app3/Module'));

const App4 = React.lazy(() => import('app4/Module'));

const App5 = React.lazy(() => import('app5/Module'));

const App6 = React.lazy(() => import('app6/Module'));

const App7 = React.lazy(() => import('app7/Module'));

const App8 = React.lazy(() => import('app8/Module'));

const App9 = React.lazy(() => import('app9/Module'));

const App10 = React.lazy(() => import('app10/Module'));

const App11 = React.lazy(() => import('app11/Module'));

const App12 = React.lazy(() => import('app12/Module'));

const App13 = React.lazy(() => import('app13/Module'));

const App14 = React.lazy(() => import('app14/Module'));

const App15 = React.lazy(() => import('app15/Module'));

const App16 = React.lazy(() => import('app16/Module'));

const App17 = React.lazy(() => import('app17/Module'));

const App18 = React.lazy(() => import('app18/Module'));

const App19 = React.lazy(() => import('app19/Module'));

const App20 = React.lazy(() => import('app20/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/app1">App1</Link>
        </li>

        <li>
          <Link to="/app2">App2</Link>
        </li>

        <li>
          <Link to="/app3">App3</Link>
        </li>

        <li>
          <Link to="/app4">App4</Link>
        </li>

        <li>
          <Link to="/app5">App5</Link>
        </li>

        <li>
          <Link to="/app6">App6</Link>
        </li>

        <li>
          <Link to="/app7">App7</Link>
        </li>

        <li>
          <Link to="/app8">App8</Link>
        </li>

        <li>
          <Link to="/app9">App9</Link>
        </li>

        <li>
          <Link to="/app10">App10</Link>
        </li>

        <li>
          <Link to="/app11">App11</Link>
        </li>

        <li>
          <Link to="/app12">App12</Link>
        </li>

        <li>
          <Link to="/app13">App13</Link>
        </li>

        <li>
          <Link to="/app14">App14</Link>
        </li>

        <li>
          <Link to="/app15">App15</Link>
        </li>

        <li>
          <Link to="/app16">App16</Link>
        </li>

        <li>
          <Link to="/app17">App17</Link>
        </li>

        <li>
          <Link to="/app18">App18</Link>
        </li>

        <li>
          <Link to="/app19">App19</Link>
        </li>

        <li>
          <Link to="/app20">App20</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />

        <Route path="/app1" element={<App1 />} />

        <Route path="/app2" element={<App2 />} />

        <Route path="/app3" element={<App3 />} />

        <Route path="/app4" element={<App4 />} />

        <Route path="/app5" element={<App5 />} />

        <Route path="/app6" element={<App6 />} />

        <Route path="/app7" element={<App7 />} />

        <Route path="/app8" element={<App8 />} />

        <Route path="/app9" element={<App9 />} />

        <Route path="/app10" element={<App10 />} />

        <Route path="/app11" element={<App11 />} />

        <Route path="/app12" element={<App12 />} />

        <Route path="/app13" element={<App13 />} />

        <Route path="/app14" element={<App14 />} />

        <Route path="/app15" element={<App15 />} />

        <Route path="/app16" element={<App16 />} />

        <Route path="/app17" element={<App17 />} />

        <Route path="/app18" element={<App18 />} />

        <Route path="/app19" element={<App19 />} />

        <Route path="/app20" element={<App20 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
