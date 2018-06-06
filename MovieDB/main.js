var movies = [{
    title: "Mad Max Furry",
    hasWatched: true,
    rating: 5
},
{
    title: "Frozen",
    hasWatched: false,
    rating: 4
},
{
    title: "Jumanju",
    hasWatched: true,
    rating: 5
}]

//Show All Objects

movies.forEach(function(movie) {
    var result = "You have  ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\"" + " - ";
    result += movie.rating + " starts";
    console.log(result);
})