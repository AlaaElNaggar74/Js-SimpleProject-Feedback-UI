let smacontainer = document.getElementById("smacontainer");
let iconconat = document.querySelectorAll(".icon");
let ico = document.querySelectorAll(".icon i");
let par = document.querySelectorAll(".icon p");
let buutt = document.getElementById("buutt");

let tex = "";
iconconat.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    tex = event.target.innerText || event.target.parentNode.innerText;
    console.log(event.target.innerText)
    console.log(event.target.parentNode.innerText)
    iconconat.forEach((ele) => {
      ele.classList.remove("active");
    });

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

buutt.addEventListener("click", (e) => {
  if (tex != "") {
    var boxreplace = "";
    boxreplace = `<div class="repceed" style="font-size:1.5rem">
            <p style="font-weight:bold">Thank You!</p>
            <p style="margin:40px 0;font-weight:bold">FeedBack : <span style="font-size:1.6rem ;color:red"> ${tex} </span></p>
            <p style="font-size:1.2rem">We Will Send Your FeeedBack To Manager To Improve Our Customer Support</p>
        </div>`;
    smacontainer.innerHTML = boxreplace;
  }
});
