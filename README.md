# Notification Center for Bootstrap
Super simple notifications with Bootstrap

# Usage
Using Notification Center is pretty simple. 

**First**, import the `notification-center.min.js` file:

`<script src="notification-center.min.js"></script>`

**Next**, you need to add the follow HTML to any page where you want notifications to appear:

`<div id="notification-center"></div>`

**Finally**, call the sendNotification() function. It takes one argument, an object with all of the details for your notification.
```
sendNotification({
  param: 'test',
	value: 'true',
	type: 'success',
	contents: 'Hello! I\'m a test notification from a URL Parameter.',
	customClasses: 'text-center',
});
```

Here's a rundown of each property included in the argument object:

- param: a String containing the URL parameter that triggers your notification.
- value: a String containing the value for `param` that triggers your notification. 
- [REQUIRED] type: the type of Bootstrap alert that you're sending. This changes the color of the notification. The values for this can be either 'success','info','warning',or 'danger'
- [REQUIRED] contents: the text of your notification. This can include HTML.
- customClasses: custom CSS classes you'd like to add to your notification.

`param` and `value` are only required if you're triggering your notification through a URL parameter.
