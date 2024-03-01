const fetchData = async (isSort) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");

  const data = await res.json();

  info = data.data.tools;

  displayAi(info, isSort);
};

// display phone
const displayAi = (parameter, isSort) => {
  console.log(parameter);
  const parentDiv = document.getElementById("display-ai");

  // trying to sort
  if (isSort) {
    document.getElementById("display-ai").innerText = "";
    parameter.sort((a, b) => {
      let date1 = new Date(a.published_in).getTime();
      let date2 = new Date(b.published_in).getTime();

      if (date1 < date2) {
        return -1;
      } else {
        return 1;
      }
    });
    // document.getElementById(display-ai).innerText = '';
    parameter.forEach((element) => {
      console.log(element.published_in);
      const childDiv = document.createElement("div");

      childDiv.className = "card card-compact bg-base-100 shadow-xl";

      childDiv.innerHTML = `
            <figure>
            <img
              src="${element?.image}"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Features</h2>
            <ol>
                <li>1. Natural Language</li>
                <li>2. Context Undrestand</li>
                <li>3. Process Model</li>
            </ol>
            <hr>
            <div class="card-actions justify-between">
                <div>
                    <h2 class="text-xl font-medium">${element.name}</h2>
                    <span>Date:${element.published_in}</span>
                </div>
              <button class="btn"><?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg fill="#1C2033" width="52" height="52" version="1.1" id="lni_lni-arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
                <path d="M57.6,30.4l-20.7-21c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l16.8,17.1H8c-1.2,0-2.2,1-2.2,2.2s1,2.3,2.2,2.3h42.7
                    l-17,17.3c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7l20.7-21C58.5,32.7,58.5,31.3,57.6,30.4z"/>
                </svg>
                </button>
            </div>
          </div>
            `;
      parentDiv.appendChild(childDiv);
    });
  } else {
    parameter.forEach((element) => {
      console.log(element.published_in);
      const childDiv = document.createElement("div");

      childDiv.className = "card card-compact bg-base-100 shadow-xl";

      childDiv.innerHTML = `
            <figure>
            <img
              src="${element?.image}"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Features</h2>
            <ol>
                <li>1. Natural Language</li>
                <li>2. Context Undrestand</li>
                <li>3. Process Model</li>
            </ol>
            <hr>
            <div class="card-actions justify-between">
                <div>
                    <h2 class="text-xl font-medium">${element.name}</h2>
                    <span>Date:${element.published_in}</span>
                </div>
              <button class="btn"><?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg fill="#1C2033" width="52" height="52" version="1.1" id="lni_lni-arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
                <path d="M57.6,30.4l-20.7-21c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l16.8,17.1H8c-1.2,0-2.2,1-2.2,2.2s1,2.3,2.2,2.3h42.7
                    l-17,17.3c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7l20.7-21C58.5,32.7,58.5,31.3,57.6,30.4z"/>
                </svg>
                </button>
            </div>
          </div>
            `;
      parentDiv.appendChild(childDiv);
    });
  }
  // parameter = parameter.slice(0,5);

  // parameter.forEach(element => {
  //     console.log(element.published_in)
  //     const childDiv = document.createElement('div');

  //     childDiv.className ='card card-compact bg-base-100 shadow-xl';

  //     childDiv.innerHTML = `
  //     <figure>
  //     <img
  //       src="${element?.image}"
  //     />
  //   </figure>
  //   <div class="card-body">
  //     <h2 class="card-title">Features</h2>
  //     <ol>
  //         <li>1. Natural Language</li>
  //         <li>2. Context Undrestand</li>
  //         <li>3. Process Model</li>
  //     </ol>
  //     <hr>
  //     <div class="card-actions justify-between">
  //         <div>
  //             <h2 class="text-xl font-medium">${element.name}</h2>
  //             <span>Date:${element.published_in}</span>
  //         </div>
  //       <button class="btn"><?xml version="1.0" encoding="utf-8"?>
  //         <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  //         <svg fill="#1C2033" width="52" height="52" version="1.1" id="lni_lni-arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  //              x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
  //         <path d="M57.6,30.4l-20.7-21c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l16.8,17.1H8c-1.2,0-2.2,1-2.2,2.2s1,2.3,2.2,2.3h42.7
  //             l-17,17.3c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7l20.7-21C58.5,32.7,58.5,31.3,57.6,30.4z"/>
  //         </svg>
  //         </button>
  //     </div>
  //   </div>
  //     `
  //     parentDiv.appendChild(childDiv);
  // });
};

fetchData();

const sortByView = () => {
  fetchData(true);
};
