# Notification Center for Bootstrap
Super simple notifications with Bootstrap. At its core, this is a wrapper around Bootstrap Alerts that provides an easy way to display them through Javascript with goodies like the ability to show notifications based on a URL parameter and to fade out notifications after a set period of time.

# Demo

<img src="https://media.giphy.com/media/3oz8xV3ZWCoPQaASTm/giphy.gif"></img>

# Usage
Using Notification Center is pretty simple. 

**First**, import the `notification-center.min.js` file:

`<script src="notification-center.min.js"></script>`

You'll also need JQuery, and of course, Bootstrap.

**Next**, you need to add the follow HTML to any page where you want notifications to appear:

`<div id="notification-center"></div>`

**Finally**, call the sendNotification() function. It takes one argument, an object with all of the details for your notification.
```js
sendNotification({
  param: 'test',
	value: 'true',
	type: 'success',
	contents: 'Hello! I\'m a test notification from a URL Parameter.',
	customClasses: 'text-center',
	fadeOut: 5000,
	dismissable: true
});
```

Here's a rundown of each property included in the argument object:
- param: a String containing the URL parameter that triggers your notification.
- value: a String containing the value for `param` that triggers your notification. 
- [REQUIRED] type: the type of Bootstrap alert that you're sending. This changes the color of the notification. The values for this can be either 'success','info','warning',or 'danger'
- [REQUIRED] contents: the text of your notification. This can include HTML.
- customClasses: custom CSS classes you'd like to add to your notification.
- fadeOut: the time in ms after which you want your notification to disappear.
- dismissable: a boolean that sets whether or not your notification should be dismissable. By default, notifications are dismissable.

`param` and `value` are only required if you're triggering your notification through a URL parameter.

Check out the examples directory for examples of how all this works, in practice.

# Etc.
Thanks to my employer, the [Allstate Compozed Lab](https://github.com/compozed) for allowing me to work on cool projects like this for our open source Fridays. 😎 Bootstrap Notification Center is licensed under the [MIT License](https://github.com/alexarena/notification-center/blob/master/LICENSE).
