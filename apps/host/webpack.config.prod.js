const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ['shop', 'http://localhost:4201/'],
    ['cart', 'http://localhost:4202/'],
    ['about', 'http://localhost:4203/'],
    ['app1', 'http://localhost:4204/'],
    ['app2', 'http://localhost:4205/'],
    ['app3', 'http://localhost:4206/'],
    ['app4', 'http://localhost:4207/'],
    ['app5', 'http://localhost:4208/'],
    ['app6', 'http://localhost:4209/'],
    ['app7', 'http://localhost:4210/'],
    ['app8', 'http://localhost:4211/'],
    ['app9', 'http://localhost:4212/'],
    ['app10', 'http://localhost:4213/'],
    ['app11', 'http://localhost:4214/'],
    ['app12', 'http://localhost:4215/'],
    ['app13', 'http://localhost:4216/'],
    ['app14', 'http://localhost:4217/'],
    ['app15', 'http://localhost:4218/'],
    ['app16', 'http://localhost:4219/'],
    ['app17', 'http://localhost:4220/'],
    ['app18', 'http://localhost:4221/'],
    ['app19', 'http://localhost:4222/'],
    ['app20', 'http://localhost:4223/'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
