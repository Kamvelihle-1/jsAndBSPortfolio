// About Section
let about = document.querySelector('section#about .row:last-child');
let cAbout= ["I am a 20 year old young man from Khayelitsha, born and raised in Cape Town,South Africa.I am a fullstack web development student at Life Choices Coding Academy.","I am an aspiring Software Engineer, Penetration tester and Security Software Developer.I aspire to be in the Tech field because I grew up with an exposure of the tech career field, I also did IT in high school(COSAT(Center Of Science And Technology)) where my love and passion for tech started, and I have been following its path ever since.A few years ago I found out about the CyberSecurity (mainly Penetration Tester & Security Software Developer) and Software Engineering fields which caught my interest since I like programming and working in teamlike environment."]

// Education

let education = [
    {
        id: 1,
        year: 2023,
        description: 'Attending Life Choices Coding Academy full-stack web development course ',
        place: 'Life Choices',
        type: '',
        certificate: ''
    },
    {
        id: 2,
        year: 2021,
        description: 'Attended Stellenbosch University for BSc Mathemetical Sciences(Computer Science)',
        place: 'Stellenbosch University',
        type: 'Incomplete',
        certificate: ''
    },
    {
        id: 3,
        year: 2020,
        description: 'I got my Metric certificates ',
        place: 'COSAT(Centre Of Science And Technology)',
        type: 'certificate',
        certificate: ''
    }
   
]



// Loop through About content
cAbout.forEach( (content)=>{
    about.innerHTML+=`<p class='lead'>${content}</p>`
} )

//Loop through Education content
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
