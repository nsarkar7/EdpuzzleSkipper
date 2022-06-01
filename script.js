var assignment_id = window.location.href.split("/")[4];

var skipUrl = "https://edpuzzle.com/api/v3/assignments/" + assignment_id + "/attempt";

var skipRequest = new XMLHttpRequest();

skipRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var info = JSON.parse(this.responseText);
    var id = info._id;
    var teacher_assignment_id = info.teacherAssignmentId;
    
    //Second Request

    var skipUrl2 = "https://edpuzzle.com/api/v4/media_attempts/" + id + "/watch";

    var referrer = "https://edpuzzle.com/assignments/"+ teacher_assignment_id +"/watch"

    fetch(skipUrl2, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-fetch-site": "same-origin",
            "x-csrf-token": "",
            "x-edpuzzle-referrer": referrer,
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
