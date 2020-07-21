
const access_granted = () => {
    wrapper_header.classList.add("hide");
    form.classList.add("hide")
    setTimeout(header_Visible, 1000);
    wrapper_header.classList.add("float_down")
}

const access_denied = () => {
    user_input.classList.add("squish");
    password_input.classList.add("squish");
}

const authentication = (username, password) => {
    const condition =  (username === user_data.username && password === user_data.password) ? access_granted() : access_denied();
}

login_btn.addEventListener("click", (event) => {
    event.preventDefault()
    authentication(user_input.value, password_input.value)});

[user_input, password_input].forEach(element => {
    element.addEventListener("change", () => {
        element.classList.remove("squish");
    })
})

const create_shapes = (left, delay, clipPath) => {
    const shape = document.createElement('div');
    shape.style.width = '100px';
    shape.style.height = '100px';
    shape.style.left = left.toString() + 'px';
    shape.style.top = '-100px';
    shape.style.position = 'absolute';
    shape.style.animationDelay = delay.toString() + 's';
    shape.style.background = 'rgba(255, 255, 255, 0.25)';
    shape.style.webkitClipPath = clipPath;
    shape.style.mozClipPath = clipPath;
    shape.style.msClipPath = clipPath;
    shape.style.oClipPath = clipPath;
    shape.style.clipPath = clipPath;
    shape.classList.add('float');
    shape_container.appendChild(shape)
}

for(i=0; i<20;i++) {
    create_shapes((Math.floor((Math.random() * window.innerWidth))), (Math.floor(Math.random() * 15)), "none")
}

fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
  .then(response => response.json())
  .then((data) => {
    for(i=0; i<data.length;i++){
        console.log(data[i].colors[0])
        create_gradient(data[i]);
    }
  })
  
  option_close_btn.addEventListener("click", () => {
    option_container.classList.add("hide_option");
  });

  option_open_btn.addEventListener("click", () => {
    option_container.classList.remove("hide_option");
  });

  const create_gradient = (data) => {
      const gradient_color = document.createElement("div")
      const check_gradient_length = (data.colors.length === 2) ? gradient_color.style.background = "linear-gradient("+ data.colors[0] +" , "+ data.colors[1] +")" : 
                                                                 gradient_color.style.background = "linear-gradient("+ data.colors[0] + " , " + data.colors[1] + " , " + data.colors[2] + ")"
      gradient_color.classList.add("option__color");
      const gradient_name = document.createElement("p")
      gradient_name.textContent = `${data.name}`
      gradient_name.classList.add("option__name")
      gradient_color.appendChild(gradient_name);
      option_row.appendChild(gradient_color);
  }

  option_row.addEventListener("click", (event) => {
      if (event.target.classList.contains("option__color")){
          container.style.background = event.target.style.background;
          option_container.classList.add("hide_option");
      }
  })

  /* HTML5
  <div class="container" style="background: linear-gradient(to right, #667eea, #764ba2);">
        <a class="btn option__btnOpen"> &#9776; Show Options</a>
        <div class="wrapper">
            <h2 class="wrapper__header">Login Page</h2>
            <form action="#" class="wrapper__form">
                <input class="wrapper__username" type="text" name="username" placeholder="Username">
                <input class="wrapper__password" id="wrapper__password" type="password" name="password" placeholder="Password">
                <button class="wrapper__btn">Login</button>
            </form>
        </div>
        <div class="shapes">
        </div>
    </div>
    <div class="option__container hide_option">
        <div class="header">
            <a class="btn shapes__btnOpen"><i class="fas fa-shapes option__button"></i></a>
            <a class="btn option__btnClose"> <i class="fas fa-paint-roller option__button"></i></a>
            <a class="btn option__btnClose"> &#10006; Close Options</a>
        </div>
        <div class="option__row">
        </div>
    </div>
  
  */

/*
* {
    box-sizing: border-box;
    padding:0;
    margin:0;
}

body {
    font-size: 62.5%;
    line-height: 1.7;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    position: relative;
    overflow:hidden;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}


:root {
    --white-color:#fff;
}

.container {
    height: 100vh;
    width:100%;
    position: relative;
    z-index: 1000;
}

.wrapper {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
}

.wrapper__header {
    color: var(--white-color);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    transition: all 1s;
}

.wrapper__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.wrapper__username,
.wrapper__password,
.wrapper__btn {
    text-align: center;
    padding: 0.6rem 1rem;
    font-size: 1.2rem;
    width: 100%;
    border-radius: 3px;
}

.wrapper__username,
.wrapper__password {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #333;
    transition: all .2s;
    outline: none;
}

.wrapper__username:hover,
.wrapper__password:hover {
    background: rgba(255, 255, 255, 0.4);
}

.wrapper__username::placeholder,
.wrapper__password::placeholder {
    color: #fff;
}

.wrapper__username:focus,
.wrapper__password:focus {
    width: 120%;
    transition: all .2s;
    background: #fff;
    
}

.wrapper__password {
    margin: .8rem 0;
}

.wrapper__btn {
    width: 100%;
    background: #fff;
    border:none;
    color: #333;
    transition: all .2s;
}

.wrapper__btn:hover {
    background: rgba(255, 255, 255, 0.7);
}

.wrapper__btn:focus {
    outline: none;
}

.hide {
    opacity:0;
    transition: all .4s;
}

.float_down {
    transition: all 1s;
    transform: translateY(100px);
}

.float {
    animation: float_around 15s infinite linear;
}

.squish {
    animation: squish 1s ease-in-out;
    border: 1px solid rgba(255, 0, 0, 1);
}

.star {
    clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

@keyframes float_around {
    from {transform: translateY(1080px) rotate(360deg);}
    to {transform: translateY(-100px) rotate(0);}
}

@keyframes squish {
    0% {
        transform: translateX(20);
    }
    20% {
        transform: translateX(-20px);
    }
    40% {
        transform: translateX(20px);
    }
    60% {
        transform: translateX(-20px);
    }
    80% {
        transform: translateX(20px);
    }
    100% {
        transform: translateX(0);
    }
}

.option__container {
    position: absolute;
    top: 0;
    left:0;
    z-index: 10000;
    height: 100%;
    background: #2c3e50;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .25s ease-in-out;
    overflow-y: scroll;
}

.hide_option {
    height: 0 !important;
    transition: all .25s ease-in-out;
}

.header {
    padding: .6rem;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: sticky;
}

.btn {
    font-size: 1rem;
    cursor:pointer;
    position: sticky;
}

.option__btnOpen {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
}

.btn:hover {
    border-bottom: 1px solid #333;
}

.option__btnOpen:hover {
    border-bottom: 1px solid #fff;
}

.option__row {
    padding: .5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    width: 100%;
    justify-items: center;
    overflow-y: scroll;
}

.option__color {
    border-radius: 3px;
    height: 150px;
    width: 100%;
    position: relative;
    transition: all .1s;
}

.option__color:hover {
    transform: scale(1.01);
    outline: #222222 solid 10px;
}

.option__color:hover .option__name {
    border-bottom: 1px solid lightgrey;
}

.option__name {
    color: #fff;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
}

.option__button {
    margin:0 1rem;
}




.triangle {
    clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
}
  
  
*/