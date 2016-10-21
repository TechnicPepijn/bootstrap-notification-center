var i=1; //Used to increment ids for individual notification divs

//Credit: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function sendNotification(data){
  if(!data.param){
    sendIndividualNotification(data);
  }
  else{
    if(getParameterByName(data.param) == data.value) {
      sendIndividualNotification(data);
    }
  }
}

function sendIndividualNotification(data){
  if(!data.customClasses){
    data.customClasses = ''; //Prevents 'undefined'
  }
  var notification;
  var id = 'notification-' + i++;
  if(data.dismissable != false){
    notification = '<div id="'+id+'" class="alert alert-'+data.type+' '+data.customClasses+'" role="alert">\n<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n'+data.contents+'\n</div>'
  }
  else{
    notification = '<div class="alert alert-'+data.type+' '+data.customClasses+'" role="alert">\n'+data.contents+'\n</div>'
  }
  $("#notification-center").append(notification);
  
  if(data.fadeOut){
    $('#'+id).delay(data.fadeOut).fadeOut(400);
  }
  
}
