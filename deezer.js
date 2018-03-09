Accounts.oauth.registerService('deezer');

if (Meteor.isClient) {
  const loginWithDeezer = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Deezer.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction('deezer', loginWithDeezer);
  Meteor.loginWithDeezer = function () {
    return Accounts.applyLoginFunction('deezer', arguments);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: _.map(
      // publish access token since it can be used from the client
      Deezer.whitelistedFields.concat(['accessToken', 'expiresAt']),
      function (subfield) {
        return 'services.deezer.' + subfield;
      }),

    forOtherUsers: _.map(
      // even with autopublish, no legitimate web app should be publishing all users' emails
      _.without(Deezer.whitelistedFields, 'email', 'id', 'name', 'firstname', 'lastname'),
      function (subfield) {
        return 'services.deezer.' + subfield;
      })
  });
}