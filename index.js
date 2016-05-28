#!/usr/bin/env node
require( "babel-register" )( {
  presets: [ "node5" ],
  plugins: [ "add-module-exports" ]
} );

const pkg = require( "./package.json" );
const app = require( "./src" );

module.exports = app( pkg );
