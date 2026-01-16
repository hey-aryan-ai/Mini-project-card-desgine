const users = [
    {
        name: "Aryan",
        pic: "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        bio: "Software Engineer"
    },
    {
        name: "Rohit",
        pic: "https://images.unsplash.com/photo-1768311172651-9f0a3a1d4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        bio: "Frontend Developer"
    },
    {
        name: "Neha",
        pic: "https://images.unsplash.com/photo-1766326802078-1675c192356f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
        bio: "UI/UX Designer"
    },
    {
        name: "Priya",
        pic: "https://images.unsplash.com/photo-1766498019113-133d6eb646b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Full Stack Developer"
    },
    {
        name: "Aman",
        pic: "https://images.unsplash.com/photo-1765766600589-ddad380d6534?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        bio: "Backend Engineer"
    },
    {
        name: "Kunal",
        pic: "https://images.unsplash.com/photo-1765873360407-5a2cc1a7c0c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
        bio: "Data Analyst"
    },
    {
        name: "Sneha",
        pic: "https://images.unsplash.com/photo-1766593635664-cd747d359fcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
        bio: "Mobile App Developer"
    },
]

function showUsers(arr) {
    arr.forEach(function (users) {

        // create outer card div;
        const card = document.createElement("div");
        card.classList.add("card");

        // create img ;

        const img = document.createElement("img");
        img.src = users.pic;
        img.classList.add("bg-img");

        // create blurred-layer div;


        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = ` URL(${users.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // create constent div


        const content = document.createElement("div");
        content.classList.add("content");

        // create h3 and paragraph


        const heading = document.createElement("h3");
        heading.textContent = users.name;

        const para = document.createElement("p");
        para.textContent = users.bio;

        // append heading and paragraph in content 

        content.appendChild(heading);
        content.appendChild(para);

        // append all to card

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // finally append card to the body or any conatiner

        document.querySelector(".cards").appendChild(card);

    })
}

showUsers(users);
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
    let newuser = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newuser);
});
