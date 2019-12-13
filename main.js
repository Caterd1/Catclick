document.addEventListener("DOMContentLoaded", function() {
    // variables
    let list = document.querySelector(".cat-list");
    let display1 = document.querySelector(".cat-display-1");
    let display2 = document.querySelector(".cat-display-2");
    let number1 = document.querySelector(".cat-number1");
    let number2 = document.querySelector(".cat-number2");
    let displayName1 = document.querySelector(".cat-name1");
    let displayName2 = document.querySelector(".cat-name2");
    let firstClick = null;
    let secondclick = null;
  
    let cats = [
      {
        name: "Angora",
        src: "images/gatto Angora.jpg",
        number: 0
      },
      {
        name: "Bengala",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKg-6C4yUCdhbkCl7qdUt6sRVcLXwGWgWstjUoPT6b97nWTiaP5A&s",
        number: 0
      },
      {
        name: "Certosino",
        src: "images/gatto-certosino.jpg",
        number: 0
      },
      {
        name: "Maine Coon",
        src: "images/Maine Coon.jpg",
        number: 0
      },
      {
        name: "Persiano",
        src: "images/Persiano.jpg",
        number: 0
      },
      {
        name: "Sacro di Birmania",
        src: "images/Sacro di Birmania.jpg",
        number: 0
      }
    ];
  
    let singleCat = cats[0];
    let secondCat = cats[5]
  
    cats.forEach(cat => {
      let entry = document.createElement("li");
      let link = document.createElement("a");
      let src = cat.src;
      let name = document.createTextNode(cat.name);
      link.appendChild(name);
      entry.appendChild(link);
      list.appendChild(entry);
  
      link.addEventListener(
        "click",
        function() {
          displayName1.textContent = cat.name;
          display1.setAttribute("src", src);
          singleCat = cat;
          number1.textContent = cat.number.toString();
        },
        false
      );
    });
  
    display1.addEventListener(
      "click",
      function() {
       
        let singleCatNumber = singleCat.number;
        singleCatNumber += 1;
        singleCat.number = singleCatNumber;
        number1.textContent = singleCatNumber.toString();
        console.log(number1);
      },
      false
    );
  
  
    display2.addEventListener(
      "click",
      function() {
        let secondCatNumber = secondCat.number;
        secondCatNumber += 1;
        secondCat.number = secondCatNumber;
        number2.textContent = secondCatNumber.toString();
        console.log(number1);
      },
      false
    );
  });