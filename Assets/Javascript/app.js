function forAJAX() {

    var searchTerm = $("#search-term").val();
    var numRecords = $("#records-number").val();
    var beginDate = $("#start-year").val();
    var articles = $("#articles")

    var apikey = "8ANQnaqwqN5da4jtqdJcsFLPwryRKkcC";

    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + beginDate + 
    // "&end_date=" + endDate + "&limit=" + numRecords + "&api-key=8ANQnaqwqN5da4jtqdJcsFLPwryRKkcC";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&api-key=8ANQnaqwqN5da4jtqdJcsFLPwryRKkcC";
    // &begin_date=1900&end_date=2015&limit=5

    $.get(queryURL).then(function(response) {
        console.log(response);
        for(var i = 0; i < 3; i++) {
    
        var title = $("<div>");
        title.addClass("row");
        var words = $("<h2>" + response.response.docs[i].headline.main + "</h2>");
        var author = $("<br><p>By" + response.response.docs[i].byline.person[0].firstname + " " + 
        response.response.docs[i].byline.person[0].lastname + "</p>");
        title.append(words);
        title.append(author);
        title.append(".3div");
        console.log(title);
        console.log(author);
        }
    });
}
forAJAX();
// $(document).on("click", ".btn", forAJAX);
