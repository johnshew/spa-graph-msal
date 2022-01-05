// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const msalConfig = {
  auth: {
    clientId: '16fa985a-217c-4fbf-be68-fc8aa85532e5',
    redirectUri: 'https://spa-graph-msal.vivitap.com/'
  },
  system: {
    loggerOptions: {
      loggerCallback: (
        level,
        message,
        containsPii
      ) => {
        console.debug(message);
      },
      piiLoggingEnabled: false,
    },
    windowHashTimeout: 60000,
    iframeHashTimeout: 6000,
    loadFrameTimeout: 0,
  },
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}

