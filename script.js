var list = document.getElementById("list");
var button = document.getElementById("getBooks");


//var books = ["Harry Potter", "Sex and the City", "The God Father", "Great Gatsby", "Moby Dick"]

var books = [
    {title:"Harry Potter", bookCover: "https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_SL1000_.jpg"}, 
    {title:"Sex and the City", bookCover: "https://images-na.ssl-images-amazon.com/images/I/81mvz8KVg4L.jpg"},
    {title:"Sherlock Holmes", bookCover: "https://images-na.ssl-images-amazon.com/images/I/71HQznzHy6L.jpg"}

];



button.addEventListener("click", function(){
    list.innerHTML = "";
    for(let i = 0; i < books.length; i++){
        console.log(books[i].title);
        console.log(books[i].bookCover);
        var li = document.createElement("li");
        var img = document.createElement("img");

        li.id = "bookLi";
        li.innerHTML = books[i].title + ":";
        img.src = books[i].bookCover;
        li.appendChild(img);
        list.appendChild(li);
    }
})