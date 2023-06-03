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
    about.innerHTML+=`<p class='lead justify-content-center'>${content}</p>`
} )

//Loop through Education content
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card education">
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

//Landing
let tEffect =new Typed(".aspirations",{
    strings: ["Software Engineer","Penetration Tester","IT Security Officer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1500
})

// Skills
let skills =document.querySelector('section#skills .row')

skills.innerHTML +=
`
<div class="col-md-6 col-sm-12 interests ">
    <div class="row text-center my-3 mt-2">

        <div class="col-md-6 align-items-center ">
            <h2 class="display-3">Interests</h2>
        </div>
    </div>
    <div class="row my-5">
        <div class="col">
            <h4 class="m-3 ">My interests include programming,watching anime and series,playing rugby,real estate,tech and the business sector.I have always had an interest in tech since primary school, with the exposure to IT in high school I started developing an interest in programming and build frameworks and systems, although I haven't succeded yet.I also have an interest in the real estate and business sector as I would like to open up my own real estate campony.</h4>
        </div>
    </div>


</div>


<div class="col-md-6 col-sm-12 align-items-center skillslist  ">
    <div class="row text-center my-3 mt-2">

        <div class="col-md-6 ">
            <h2 class="display-3">Skills</h2><br>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <label for="HTML">HTML 5</label>
            <div class="progress">

                <div class="progress-bar bg-success" role="progressbar" aria-label="HTML" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    Skilled
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12">
            <label for="CSS">CSS</label>
            <div class="progress">

                <div class="progress-bar bg-warning" role="progressbar" aria-label="CSS" style="width: 60%;" aria-valuenow="60"   aria-valuemin="0" aria-valuemax="100">
                    Average
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12">
            <label for="Bootstrap">BOOTSTRAP 5</label>
            <div class="progress">

                <div class="progress-bar bg-warning" role="progressbar" aria-label="Bootstrap" style="width: 58%;" aria-valuenow="58"   aria-valuemin="0" aria-valuemax="100">
                    Average
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12">
            <label for="JAVA">JAVA</label>
            <div class="progress">

                <div class="progress-bar bg-warning" role="progressbar" aria-label="JAVA" style="width: 65%;" aria-valuenow="65"   aria-valuemin="0" aria-valuemax="100">
                    Average
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12">
            <label for="Python">PYTHON 3</label>
            <div class="progress">

                <div class="progress-bar bg-danger" role="progressbar" aria-label="Python" style="width: 35%;" aria-valuenow="35"   aria-valuemin="0" aria-valuemax="100">
                    Beginner
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12">
            <label for="Team">TEAMWORK</label>
            <div class="progress">

                <div class="progress-bar bg-success" role="progressbar" aria-label="Team" style="width: 75%;" aria-valuenow="75"   aria-valuemin="0" aria-valuemax="100">
                    Skilled
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12">
            <label for="Com">Communication</label>
            <div class="progress">

                <div class="progress-bar bg-success" role="progressbar" aria-label="Com" style="width: 79%;" aria-valuenow="79"   aria-valuemin="0" aria-valuemax="100">
                    Skilled
                </div>
            </div>
        </div>
    </div>

</div>
`

// Projects
let pjs=document.querySelector('#projects')
pjs.innerHTML += 
`

<div class="projects">

    <div class="row">
        <div class="col ">

            <div id="work" class="carousel slide " data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#work" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#work" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#work" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.postimg.cc/zXSW2GyR/laptop-logo.webp" class="d-block w-100" alt="...">
                        <div class="carousel-caption ">
                            <h1 class="text-black fw-bold">KLS Group</h1>
                            <p>The First website I built in a group</p>
                            <a target="_blank" class="btn btn-primary site" href="https://spontaneous-pavlova-480de7.netlify.app/" role="button" >Go to site</a>
                            <a target="_blank" class="btn btn-primary site" href="https://github.com/SmasherK/KLSgroup.git" role="button" >Go to Github</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.postimg.cc/mgpPKzBh/Screenshot-2023-05-09-150331.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption ">
                            <h1 class="text-black fw-bold">Calendar</h1>
                            <p>My First Bootstrap attempt in making a calender</p>
                            <a target="_blank" class="btn btn-primary site" href="https://papaya-tarsier-663072.netlify.app/" role="button" >Go to site</a>
                            <a target="_blank" class="btn btn-primary site" href="https://github.com/SmasherK/bootstrap.git" role="button" >Go to Github</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.postimg.cc/76DmcWxx/K.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption ">
                            <h1 class="text-black fw-bold">Animations</h1>
                            <p>A website I built to showcase different CSS animations</p>
                            <a target="_blank" class="btn btn-primary site" href="https://enchanting-pika-913a79.netlify.app/" role="button" >Go to site</a>
                            <a target="_blank" class="btn btn-primary site" href="https://github.com/SmasherK/web_page.git" role="button" >Go to Github</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#work" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#work" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    </div>


</div>

`
// Testimonials

let test=document.querySelector('#testimonials')

test.innerHTML +=
`
<div class="testimonials">

    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="https://i.postimg.cc/nVTpd8Hh/IMG-1425.jpg" class="card-img-top " alt="..." loading="lazy">
            <div class="card-body">
              <h3 class="card-title">Thotyelwa Mpongwana</h3><br>
              <h4>Colleague</h4><br>
              <p class="card-text">Kamva is really strong in HTML & CSS. 
                When working in a team everyone always asks him for help and hes is always willing to help which is a great perk to have when working with a team.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://i.postimg.cc/ydbndYmN/C12-Aphelele-Joyi-1.jpg" class="card-img-top" alt="..." loading="lazy">
            <div class="card-body">
              <h3 class="card-title">Aphelele Joyi</h3><br>
              <h4>Colleague</h4><br>
              <p class="card-text">Kamva is a very good student, with a positive attitude towards learning. He does not withhold information and is an excellent team player. He has good communication and critical thinking skills. I believe all these qualities make him an assert for any team.</p><br>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://i.postimg.cc/RZGvDj1R/C12-C2-Amy-Pieterse-2.jpg" class="card-img-top" alt="..." loading="lazy">
            <div class="card-body">
              <h3 class="card-title">Amy Pieterse</h3><br>
              <h4>Colleague</h4><br>
              <p class="card-text">Working with Kamvelihle was a pleasure. I was impressed by his ability to communicate complex ideas in a clear and concise manner. He is a skilled and dependable web developer with a strong work ethic and deep commitment to producing quality work.</p>
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://i.postimg.cc/RFBGJb8k/C12-C2-Siyamanga-Zweni-2.jpg" class="card-img-top" alt="..." loading="lazy">
                <div class="card-body">
                    <h3 class="card-title">Siyamanga Zweni</h3><br>
                    <h4>Colleague</h4><br>
                    <p class="card-text">Kamvelihle is an exceptional learner with a keen eye for detail, He is also an excellent team player who always goes above and beyond to support her fellow students. His determination and willingness to collaborate makes him a valuable asset to any project team. I have no doubt that he will continue to excel in his career and make meaningful contributions to the field of technology.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://i.postimg.cc/SNMXHNjG/t0.jpg" class="card-img-top" alt="..." loading="lazy">
                <div class="card-body">
                    <h3 class="card-title">Imraan Bernksen</h3><br>
                    <h4>Assistant Lecturer</h4><br>
                    <p class="card-text">I highly recommend Kamvelihle Sikalana, an aspiring web developer with a passion for creating stunning and functional websites. Kamvelihle has a strong foundation in programming languages such as HTML, CSS, and Bootstrap and is constantly learning and staying up-to-date with the latest technologies. Their attention to detail and commitment to delivering high-quality work make them an excellent choice for any web development project.</p>
                </div>
            </div>
        </div>

      </div>

</div>

`

// Contact

let connect=document.querySelector('#contact')



connect.innerHTML +=
`
<div class="contact ">

<form action="https://formspree.io/f/mnqyweaz" method="POST">
    <label for="Name">Name and Surname</label><br>
    <input type="text" name="Name" placeholder="Your Name & Surname" required id="name">
    <br><label for="email">Email</label><br>
    <input type="email" name="Email" placeholder="Your Email" required id="mail" >
    <br><label for="Message">Message</label><br>
    <textarea name="Message"  rows="6" placeholder="Your Message" required id="text"></textarea>
    <button type="submit"  id="submit">Submit</button>
    <button   type="reset" >Clear</button>
</form>
</div>

`

// Footer

let foot=document.querySelector('.footer')

foot.innerHTML +=
`

<div class="container text-center text-md-start">
    <div class="row text-center ">
        <div class="col-12  mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-black">Contacts</h5>
            <p>
                <i class="fas fa-home mr-5 "></i> Cape Town,7784,South Africa
            </p>
            <p>
                <i class="fas fa-envelope mr-5 "></i> ksikalana@gmail.com
            </p>
            <p>
                <i class="fas fa-phone mr-5 "></i> +27 83 475 7606
            </p>
        </div>
       
        

    </div>
    <div class="row " style="background-color: #40403f;">
        <div class="col-md-7 col-lg-8" >
            <p>Copyright &copy; 2023  by Kamvelihle Sikalana</p>
        </div>
        <div class="col-md-5 col-lg-4">
            <div class="tex-align-center text-md-end">
                <ul>
                    <li class="list-inline-item "><a target="_blank" href="https://www.linkedin.com/in/kamvelihle-sikalana-4884a4198" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="fab fa-linkedin-in"></i></a></li>
                    <li class="list-inline-item"><a target="_blank" href="https://github.com/SmasherK" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="fab fa-github"></i></a></li>
                </ul>

            </div>
        </div>
    </div>

</div>



`
