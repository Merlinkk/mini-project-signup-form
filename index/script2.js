

var iname = localStorage.getItem('name')
var iemail = localStorage.getItem('email')

var emailMessage = `Thankyou for signing up for GC ${iname} (${iemail}). This is just a confirmation email regarding your application for GC signup. Stay posted for further instructions and news.`

function sendMail() {
    var params = {
      name: iname,
      email: iemail,
      message: emailMessage,
    };

    console.log(params)
  
    const serviceID = "service_c4aakpv";
    const templateID = "template_76gz826";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        localStorage.getItem('name');
        localStorage.getItem('email');
        emailMessage;
        console.log(res);
        
    })
      .catch(err=>console.log(err));
      
    }
    
    
    window.addEventListener('load', function() {
        const savedValue = localStorage.getItem('name').toUpperCase();
        console.log(savedValue)
        document.getElementById('name').textContent = savedValue
        const savedValue2 = this.localStorage.getItem('email')
        document.getElementById('name').textContent = savedValue
        document.getElementById('email').textContent = savedValue2
        sendMail()
    })
    
    
