import axios from 'axios'

const Tabs = (topicsResp1,topicsResp2,topicsResp3) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //creating my elements
  const divTopics = document.createElement("div")
  const div1 = document.createElement("div")
  const div2 = document.createElement("div")
  const div3 = document.createElement("div")
  //create class names
  divTopics.classList.add("topics")
  div1.classList.add("tab")
  div2.classList.add("tab")
  div3.classList.add("tab")

  //create heirarchy
  divTopics.appendChild(div1)
  divTopics.appendChild(div2)
  divTopics.appendChild(div3)

  //create textContent
  div1.textContent = topicsResp1;
  div2.textContent = topicsResp2;
  div3.textContent = topicsResp3;
  
  return divTopics
}
console.log(Tabs())

const tabsAppender = () => {

axios.get(`https://lambda-times-api.herokuapp.com/topics`)
.then(resp =>{
  const topicsResp1 = resp.data.topics[0];
  const topicsResp2 = resp.data.topics[1];
  const topicsResp3 = resp.data.topics[2];
  console.log("the response array",topicsResp1)

  const entry = document.querySelector(".tabs-container")
  entry.append(Tabs(topicsResp1,topicsResp2,topicsResp3))
})
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}


export { Tabs, tabsAppender }
