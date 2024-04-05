<! DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewpoint"
  content="width=device-width, initial-scale=1.0">
  <title>your page Title</title>
  <link rel="stylesheet" type="text/css"
  href="style.css">
  </head>
  <body>
    <div id="splash-screen" class="splash-screen">
    <div class="splash-container">
      <h1>Welcome to AI Lockup</h1>
      </div>
         </div>
            <div class="tab-container">
              <div class="tab" id="tab-home"
                   onceclick="showTab('home')">Home</div>
              <div class="tab" id="tab-about"
                   oneclick="showTab('contact')">Contact Us</div>
    </div>
    <div id="home" class="tab-content">
      <h2>Home</h2>
      <ul class="home-list">
        <li>Item 1</li>
        <li>Item 2</1i>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 8</li>  
        <li>Item 9</li>
        <li>Item 10</li> 
 </div>
      <div id="abou" class="tab-content"
      style=" display: none; ">
        About</h2>
        Welcome o our software house. We specialize in creating innovative software solutions to meetthe needs of our clients. With a team of experienced developers and designers, we strive to deliver high-quality products that exceed buisnesses with cutting-edge technologyand help them suceed in today's digital world.</p>
  </div>

   <div id="contact" class="tab-content"
        style="display: none; ">
     <h2>Contact Us</h2>
     <div class="contact-info">
       <p>Email: exmaple@exmaple.com</p>
       <p>Postal Address: 123  Main Street City, Country</p>
       <p>Phone Number: +1234567890</p>
       <p>Website: <a
                      href="https://www.example.com">www.example.com</a></p>
       <p>Skype ID: example_skype</p.
     </div>
       <form class="contact-form">
         <label for="name">Name:</label><br>
         <input type="text" id="name"
         name="name" required><br>
         <label for="email">Email:</label><br>
         <input type="email" id="email"
                name="email" required><br>
         </label><br>
                   <textarea id="message"
                    name="message" rows="4" required>
       </textarea><br>
       <input type="submit"
              value="submit">
       </form>
</div>
<script src="script.js"></script>
// JavaScript to hidethe splash screen after 2 seconds
window.addEventListner('load', function () {
setTimeout(function () {
const splashscreen = document.getElementsById('splash-screen');
splashScreen.classList.add('hidden');
}, 2000); // 2000 milliseconds = 2);
seconds
});
</script>

</body>
</html>
body {
  font-family: Arial, sans-serif;
  margin= 0;
  paddinng= 0;
}
.tabs {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.tab:hover {
  background-color: #555;
}

.tab-content {
  display: none;
  padding: 20px;
}

#content-home{
  display: block;
}

.home-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.home-list li {
   width:50%;
  padding: 10px;
  background-color: blue;
  color: white;
  box-sizing: border-box;
}
position: fixed;
bottom= 0;
width: 100%;
background-color: #333; /* Background
color of the slash screen */
display: flex;
justify-content: center;
align-items: center;
z-index: 9999; /*Ensure it's on top of everything */
capacity: 1;
transition: capacity 0.5s ease-in-out;

function showTab(tabName) {
    // Hide all content divs
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
}
