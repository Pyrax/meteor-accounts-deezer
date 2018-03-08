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
    forLoggedInUser: ['services.deezer'],
    forOtherUsers: ['services.deezer.username']
  });
}