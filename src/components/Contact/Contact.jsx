import "./Contact.css"

const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  
export const Contact=()=>{
    return(

       



<div class="container">
<span class="big-circle"></span>
<img src="img/shape.png" class="square" alt="" />
<div class="form">
  <div class="contact-info">
    <h3 class="title">Sigamos en contacto!</h3>
    <p class="text">
      Consultanos lo que quieras
    </p>

    <div class="info">
      <div class="information">
        <img src="img/location.png" class="icon" alt="" />
        <p>Av. Santa fe 822 ,Palermo</p>
      </div>
      <div class="information">
        <img src="img/email.png" class="icon" alt="" />
        <p>fresa@gmail.com</p>
      </div>
      <div class="information">
        <img src="img/phone.png" class="icon" alt="" />
        <p>123-456-789</p>
      </div>
    </div>

    <div class="social-media">
      <p>Encuentranos en :</p>
      <div class="social-icons">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="contact-form">
    <span class="circle one"></span>
    <span class="circle two"></span>

    <form  autocomplete="off">
      <h3 class="title">Contactanos</h3>
      <div class="input-container">
        <input type="text" name="name" class="input" />
        <label for="">Nombre</label>
        <span>Nombre</span>
      </div>
      <div class="input-container">
        <input type="email" name="email" class="input" />
        <label for="">Email</label>
        <span>Email</span>
      </div>
      <div class="input-container">
        <input type="tel" name="phone" class="input" />
        <label for="">Telefono</label>
        <span>Telefono</span>
      </div>
      <div class="input-container textarea">
        <textarea name="message" class="input"></textarea>
        <label for="">Dejanos tu mensaje</label>
        <span>Dejanos tu mensaje</span>
      </div>
      <input type="submit" value="Send" class="btn" />
    </form>
  </div>
</div>
</div>

    );
}