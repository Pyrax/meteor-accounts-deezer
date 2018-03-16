# meteor-accounts-deezer
Meteor login service and accounts for Deezer

## Usage
- Add the package to your Meteor application: `meteor add pyrax:meteor-accounts-deezer`

### Configuring
- Configure your app in the Deezer developers backend - the redirect URL should be: _http&#58;//<example.app>/\_oauth/deezer_
- Configure the service:
```javascript
ServiceConfiguration.configurations.update(
  { 'service': 'deezer' },
  {
    $set: {
      'clientId': '<application_ID>',
      'secret': '<secret_key>',
    }
  },
  { upsert: true },
);
```

### Client-login
Now you can use the login-method on the client:
```javascript
const options = {
  requestPermissions: ['basic_access', 'email'], // default permissions
};
Meteor.loginWithDeezer(options, (err) => {
  console.log(err || 'No error');
});
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.