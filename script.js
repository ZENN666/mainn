const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");
const heartAnimation = document.getElementById("heart-animation");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "yeayy, sayang maw apaa";
    gif.src = "https://media.tenor.com/9kaWDztOmC4AAAAi/dudu-bring-food-home-supermarket.gif";

    // Hilangkan tombol yes dan no
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Tambahkan 5 pilihan baru dengan gambar
    const options = [
        { 
            text: "Es krim", 
            imgSrc: "https://media.tenor.com/oDsBUfBJCkgAAAAi/bubu-dudu-sseeyall.gif", 
            action: () => openNewPage("eskrim.html") // Membuka halaman baru
        },
        { 
            text: "Seblak", 
            imgSrc: "https://media.tenor.com/X5T8UIBTZOEAAAAi/bubu-dudu-bubu.gif", 
            action: () => openNewPage("seblak.html") // Membuka halaman baru
        },
        { 
            text: "ketan citywalk", 
            imgSrc: "https://media.tenor.com/7vvQ47FLKdsAAAAi/dudu-bubu-having-dinner-dudu-food.gif", 
            action: () => openNewPage("ketan.html") // Membuka halaman baru
        },
        { 
            text: "jajan wonton", 
            imgSrc: "https://media.tenor.com/SmQ66yumndoAAAAi/bubu-dudu-eating-phone.gif", 
            action: () => openNewPage("wonton.html") // Membuka halaman baru
        },
        { 
            text: "ciuman 3 jam",  // Pilihan baru
            imgSrc: "https://media.tenor.com/wOegnx91cikAAAAi/tkthao219-bubududu.gif", 
            action: () => openNewPage("cium.html") // Membuka halaman baru
        }
    ];
    
    // Hapus elemen tombol yang ada sebelumnya
    btnGroup.innerHTML = "";

    // Buat tombol untuk setiap pilihan dengan gambar
    options.forEach(option => {
        const div = document.createElement("div"); // Bungkus tiap gambar dan tombol dalam <div>
        div.classList.add("option");

        // Tambahkan gambar
        const img = document.createElement("img");
        img.src = option.imgSrc;
        img.alt = option.text;
        img.classList.add("option-img");
        div.appendChild(img);

        // Tambahkan tombol
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("option-btn");
        button.addEventListener("click", option.action);
        div.appendChild(button);

        // Tambahkan div ke dalam btnGroup
        btnGroup.appendChild(div);
    });
});

// Fungsi untuk membuka halaman baru
function openNewPage(pageUrl) {
    window.location.href = pageUrl; // Mengarahkan ke URL halaman baru
}

function moveNoButton() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});

// yes button functionality

yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";
  
    const timeoutId = setTimeout(() => {
      heartLoader.style.display = "none";
      resultContainer.style.display = "inherit";
      gifResult.play();
    }, 3000);
  });

// Fungsi untuk membuka halaman baru setelah animasi 3 detik
function openNewPageWithHeart(pageUrl) {
    const heartLoader = document.querySelector(".cssload-main");
    
    // Tampilkan animasi hati
    heartLoader.style.display = "block";
    
    // Setelah 3 detik, arahkan ke halaman baru
    setTimeout(() => {
        window.location.href = pageUrl; // Mengarahkan ke URL halaman baru
    }, 3000);
}