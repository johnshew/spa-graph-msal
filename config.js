// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfigSnippet>
const msalConfig = {
  auth: {
    clientId: '16fa985a-217c-4fbf-be68-fc8aa85532e5',
    redirectUri: 'http://localhost:8080'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}
// </msalConfigSnippet>
