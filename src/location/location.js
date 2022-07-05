const locationItems = document.querySelector(".location__items");
const locationNav = document.querySelector(".location__nav");

let addresses = [
    {
        id: 0,
        country: "China",
        city: "Hong Kong",
        address: "Sohoshang Du Bei Ta Bzuo 1008shi",
        workingHours: `
        <div class="location__workingHours__item"">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item"">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 1,
        country: "China",
        city: "Guangzhoushi",
        address: "Ke Xue Cheng Cai Pin Lu 11hao Adong 817",
        workingHours: `
        <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item"">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 2,
        country: "USA",
        city: "New York",
        address: "1348 Cantebury Drive, 10011",
        workingHours: `
        <div class="location__workingHours__item"">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item"">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 3,
        country: "USA",
        city: "New York",
        address: "2538 Bicetown Road, 10007",
        workingHours: `
        <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 4,
        country: "USA",
        city: "Los Angeles",
        address: "2880 Charla Lane, 75034",
        workingHours: `
        <div class="location__workingHours__item"">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item"">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 5,
        country: "Poland",
        city: "Wroclaw",
        address: "ul. Rapperswilska 51",
        workingHours: `
        <div class="location__workingHours__item"">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item"">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 6,
        country: "Poland",
        city: "Warszawa",
        address: "ul. Gościnna 130",
        workingHours: `
        <div class="location__workingHours__item"">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item"">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 7,
        country: "Poland",
        city: "Łódź",
        address: "ul. Gnieźnieńska 62",
        workingHours: `
        <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 8,
        country: "Poland",
        city: "Rzeszów",
        address: "ul. Modrzewiowa 89",
        workingHours: `
        <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">8AM - 5PM</span>
        </div>
        <div class="location__workingHours__item">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">9AM - 6PM</span>
        </div>
        `
    },
    {
        id: 9,
        country: "Russia",
        city: "Moscow",
        address: "Lenina Ul., bld. 105",
        workingHours: `
        <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">6AM - 5PM</span>
        </div>
        <div class="location__workingHours__item">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">11AM - 6PM</span>
        </div>
        `
    },
    {
        id: 10,
        country: "Russia",
        city: "Saint Petersburg",
        address: "Proletarskiy, bld. 1",
        workingHours: `
         <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">6AM - 7PM</span>
        </div>
        <div class="location__workingHours__item">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">10AM - 9PM</span>
        </div>
        `
    },
    {
        id: 11,
        country: "Russia",
        city: "Ekaterinburg",
        address: "Kutuzova Ul., bld. 86",
        workingHours: `
        <div class="location__workingHours__item">
            <span>MON - FRI</span>
            <span id="hours">6AM - 7PM</span>
        </div>
        <div class="location__workingHours__item">
            <span>SAT - SUN & Public Holidays</span>
            <span id="hours">10AM - 9PM</span>
        </div>
        `
    }
]

window.addEventListener("DOMContentLoaded", () => {
    displayAddressesItems(addresses);
    displayAddressesButtons(addresses);
})

const displayAddressesItems = (addresses) => {
    let displayAddresses = addresses.map(item => {
        return `
        <article class="location__item">
                <h5 class="location__title">${item.city}</h5>
                <p class="location__address">
                   ${item.address}
                </p>
                <div class="location__workingHours">
                    ${item.workingHours}
                </div>
        </article>
    `
    })
    displayAddresses = displayAddresses.join(' ');
    locationItems.innerHTML = displayAddresses;
}

const displayAddressesButtons = (addresses) => {
    const countries = addresses.reduce(
        (values, item) => {
            if (!values.includes(item.country)) {
                values.push(item.country)
            }
            return values;
        },
        []
    );

    const categoryBtns = countries.map( country => {
        return `<button class="btn" type="button" data-id=${country}>
        ${country}</button>`;
    }).join("");
    locationNav.innerHTML = categoryBtns;
    const filterBtns = locationNav.querySelectorAll(".btn");

    filterBtns.forEach( btn => {
        btn.addEventListener("click", e => {
            const country = e.currentTarget.dataset.id;
            let addressesCountry = addresses.filter( addresses => {
                if(addresses.country === country) {
                    return addresses;
                }
            });

            if(country === "ALL") {
                displayAddressesItems(addresses);
            } else {
                displayAddressesItems(addressesCountry);
            }
        })
    })
}
