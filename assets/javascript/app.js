var searchTerm = "lo";
var numRecords = 5;
var startYear = "1950";
var endYear = "2018";
// console.log(searchTerm)
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "03e8a46cce94492c91c1baabbef88a93"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    for (var i = 0; i < result.length; i++)
  console.log(result);
}).fail(function(err) {
  throw err;
});