# Edpuzzle Video Skipper 

Follow the steps below to use the EdPuzzle Video Skipper

Note: This project is being used in [Edpuzzle Answers](https://github.com/ading2210/edpuzzle-answers). 

## Add the bookmarklet

Copy the following code and make it a bookmarklet

![bookmarklet creation](Images/image.png)

To make a bookmarklet, simply create a new bookmark, name it whatever you want, and then paste the code below into the url box.



```javascript
javascript: if (window.location.hostname == "edpuzzle.com") {
    var script = document.body.appendChild(document.createElement("script"));
    script.src = "https://cdn.jsdelivr.net/gh/ASmallYawn/EdpuzzleSkipper@2.0/script.js";
    script.remove();
} else {
    alert("Please run this on https://edpuzzle.com/assignments/[assignment_id]/watch")
}
```

If you would like to host a local copy instead (You won't recive any updates made to this repo), you can copy the following code below and make it a bookmarklet.
```javascript

javascript: var assignment_id = window.location.href.split("/")[4];

var attempt_start_url = "https://edpuzzle.com/api/v3/assignments/" + assignment_id + "/attempt";

var attempt_start_request = new XMLHttpRequest();

attempt_start_request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var start_request_data = JSON.parse(this.responseText);
    var id = start_request_data._id;
    var teacher_assignment_id = start_request_data.teacherAssignmentId;
    var csrf_url = "https://edpuzzle.com/api/v3/csrf";

    var csrf_request = new XMLHttpRequest();

    csrf_request.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var csrf_data = JSON.parse(this.responseText);
        var csrf_token = csrf_data.CSRFToken;
        var finish_url = "https://edpuzzle.com/api/v4/media_attempts/" + id + "/watch";
        var refferer = "https://edpuzzle.com/assignments/"+ teacher_assignment_id +"/watch";

        var finish_request = new XMLHttpRequest();

        finish_request.onreadystatechange = function() {
          if(this.status == 201) {
            window.location.reload();
          }
        };

        finish_request.open('POST', finish_url, true);

        finish_request.setRequestHeader('accept', 'application/json, text/plain, */*');
        finish_request.setRequestHeader('accept_language', 'en-US,en;q=0.9');
        finish_request.setRequestHeader('content-type', 'application/json');
        finish_request.setRequestHeader('x-csrf-token', csrf_token);
        finish_request.setRequestHeader('x-edpuzzle-referrer', refferer);
        finish_request.setRequestHeader('x-edpuzzle-web-version', '7.31.62.d07e116556803136');
        
        var request_content = {
          "timeIntervalNumber":10
        };

        finish_request.send(JSON.stringify(request_content));
      }
    };
    csrf_request.open("GET", csrf_url, true);


    csrf_request.send();

  }
};

attempt_start_request.open("GET", attempt_start_url, true);


attempt_start_request.send();

skipRequest.open("GET", skipUrl);


skipRequest.send();

```

## Usage

Simply go to any EdPuzzle, a link like this (https://edpuzzle.com/assignments/[assignment_id]/watch), and click the bookmarklet.


## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)

Please star if you enjoy it :)

ඞ sussy balls