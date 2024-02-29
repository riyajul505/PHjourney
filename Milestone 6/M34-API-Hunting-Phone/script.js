const loadPone = async (searchText=13) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
    console.log(phones)
  const phoneContainer = document.getElementById("phone-container");
  // clear phone card before adding new
  phoneContainer.textContent = "";
  // display show all button
  const showAll = document.getElementById("show-all-button");
    let totalPhone = 0;
  phones.forEach(phone => {
    totalPhone += 1;
  })
   console.log(totalPhone)
  if (totalPhone > 12) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  // display only 12 phones
  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");

    phoneCard.classList = "card  bg-base-100 shadow-xl";

    phoneCard.innerHTML = `
    <figure>
      <img
        src="${phone.image}"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button onclick="showDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>
      `;
    phoneContainer.appendChild(phoneCard);
  });
//   hide loading spinner
toggleLoadingSpinner(false);
};

// handle search

const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchValue = document.getElementById("search-field").value;

  loadPone(searchValue);
};

// toggle loading spinner

const toggleLoadingSpinner = (isLoading) => {
    const spinner = document.getElementById('loading-spinner');

    if (isLoading){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}

// show details
const showDetail = async (id) => {
    // console.log('show details clicked', id);
    // load single phone details
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);

    const data = await res.json();

    showPhoneDetails(data.data);

}

const showPhoneDetails = (phone) => {
    const modalContainder = document.getElementById('show-detail-modal-container');
    modalContainder.innerHTML = `
    <img src="${phone.image}" alt="">
        <h3> ${phone.name} </h3>
        <p> Storage: ${phone?.mainFeatures
            ?.storage} </p>

    `

    my_modal_5.showModal();
    console.log(phone);
}


loadPone();