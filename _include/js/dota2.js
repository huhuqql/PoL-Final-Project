

var matchid = 3830003166;
var key = "841208D0618758F4AE351C88F4666F3A";
var matchdetail;

//  $(document).ready(function () {
//     $("#retrieveMatch").click(function () {
//       $.ajax({
//         type: "get",
//         url: "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=" + matchid + "&key=" + key,
//         dataType: "json",
//         success: function (result) {
//             matchdetail = result;
//             console.log(matchdetail);
//         },
//         error: function () {

//         }
//       });
//     });
//   });



$(document).ready(function () {
    $("#retrieveMatch").click(function () {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=" + matchid + "&key=" + key; 
        fetch(proxyurl + url) 
            .then(response => response.text())
            .then(contents => console.log(contents))
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    });
});
