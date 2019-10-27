'use strict';
const strapi = require('./node_modules/strapi/lib/index');
const strapiDev=require('./node_modules/strapi/lib/commands/develop')

if (process.env.DEV_MODE === true) {
  strapiDev();
} else {
  strapi().start();
}

