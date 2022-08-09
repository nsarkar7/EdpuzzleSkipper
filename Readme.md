# Edpuzzle Video Skipper 

Follow the steps below to use the EdPuzzle Video Skipper

Note: This project is going to be merged into [Edpuzzle Answers](https://github.com/ading2210/edpuzzle-answers), but this repo will continue to be maintained.

## Add the bookmarklet

Copy the following code and make it a bookmarklet

![bookmarklet creation](Images/image.png)

To make a bookmarklet, simply create a new bookmark, name it whatever you want, and then paste the code below into the url box.



```javascript
javascript: if (window.location.hostname == "edpuzzle.com") {
    var script = document.body.appendChild(document.createElement("script"));
    script.src = "https://EdpuzzleSkip.asmallyawn.repl.co/script.js";
    script.remove();
} else {
    alert("Please run this on https://edpuzzle.com/assignments/[assignment_id]/watch")
}
```

If you would like to host a local copy instead (You won't recive any updates made on the server), you can copy the following code below and make it a bookmarklet. This is useful if replit decicdes to act dumb.

```javascript

javascript: var assignment_id = window.location.href.split("/")[4];

var skipUrl = "https://edpuzzle.com/api/v3/assignments/" + assignment_id + "/attempt";

var skipRequest = new XMLHttpRequest();

skipRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var info = JSON.parse(this.responseText);
    var id = info._id;
    var teacher_assignment_id = info.teacherAssignmentId;
    
    //Second Request

    var skipUrl2 = "https://edpuzzle.com/api/v4/media_attempts/" + id + "/watch";

    var refferer = "https://edpuzzle.com/assignments/"+ teacher_assignment_id +"/watch"

    fetch(skipUrl2, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-fetch-site": "same-origin",
            "x-csrf-token": "",
            "x-edpuzzle-referrer": refferer,
            "x-edpuzzle-web-version": "7.31.62.d07e116556803136"
        },
        "referrer": "https://edpuzzle.com/",
        "referrerPolicy": "strict-origin",
        "body": "{\"timeIntervalNumber\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(() => {
        window.location.reload()
    })


  }
}

skipRequest.open("GET", skipUrl);


skipRequest.send();

```

You can also use [this website](https://EdpuzzleSkip.asmallyawn.repl.co).
## Usage

Simply go to any EdPuzzle, a link like this (https://edpuzzle.com/assignments/[assignment_id]/watch), and click the bookmarklet.


## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)

Please star if you enjoy it :)

ඞ sussy balls