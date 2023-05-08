// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists } from "./schema";

import {db, pwd, uid} from './secrets'
// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { session, withAuth } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: `postgres://${uid}:${pwd}@${db}`,
      enableLogging: true,
      useMigrations: true,
    },
    server: {
      cors: { origin: ["http://localhost:3001"], credentials: true },
      port: 3000,
      maxFileSize: 200 * 1024 * 1024,
      healthCheck: true,
    },
    lists,
    session,
  })
);
