# deanius:octokat [![Build Status](https://secure.travis-ci.org/chicagogrooves/deanius-meteor-octokat.png?branch=master)](https://travis-ci.org/chicagogrooves/deanius-meteor-octokat)

## Overview

[Octokat](https://github.com/philschatz/octokat.js) is awesome. How do we use it from Meteor, on the server, in sync-style ?

```
// 1. Get a reference to Octokat
var github = new Octokat({token: Meteor.settings.api.github.auth.token});

// 2. Create a query (any query)
var teamReposQuery = github.teams(1234).repos;

// 3. Call fetchSync, and go to town!
var nonForks = fetchSync(teamReposQuery)
  .filter(function(r){ return !r.fork; });

// 4. Here's a fetchSync implementation:

// Use a fiber provided by Meteor to call fetch in 'synchronous-style'
function fetchSync (obj, meth) {
  var syncFetch = Meteor.wrapAsync(obj.fetch, obj);
  return syncFetch();
}

```

## Authentication
I advise using a [personal access token](https://github.com/settings/applications), which is revokable, and avoids coding in a user account, but you can use Oauth, or username/password. See [Octokat](https://github.com/philschatz/octokat.js) docs for specifics.
