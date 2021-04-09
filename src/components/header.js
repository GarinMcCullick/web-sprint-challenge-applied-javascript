const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //making my elements
  const div = document.createElement("div");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  const h1 = document.createElement("h1");

  //setting class names
  div.classList.add("header");
  span.classList.add("date");
  span2.classList.add("temp");
  
  //setting heirarchy
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(span2);
  
  //setting textContent
  span.textContent = "is it working"//date;
  h1.textContent = "is it working"//title;
  span2.textContent = "is it working"//temp;

  return div;
}

console.log(Header());

const headerAppender = () => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = document.querySelector(".header-container")
  header.append(Header());
}

export { Header, headerAppender }
