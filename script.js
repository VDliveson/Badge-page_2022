// jQuery for the name and email field effects on clicking the text boxes
$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });

const bootcampRadioBtn = document.getElementById('bootcamp-radio-btn');
const hackathonRadioBtn = document.getElementById('hackathon-radio-btn');

const emailField = document.getElementById('email-field');
if(bootcampRadioBtn.checked){
  emailField.style.display = 'none';
}

if(hackathonRadioBtn.checked){
  emailField.style.display = 'block';
  emailField.required = true;
}





bootcampRadioBtn.addEventListener('click', () => {
  if(bootcampRadioBtn.checked){
    emailField.style.display = 'none';
  }
});

hackathonRadioBtn.addEventListener('click', () => {
  if(hackathonRadioBtn.checked){
    emailField.style.display = 'block';
    emailField.required = true;
  }
});

let greenTick = document.getElementById('green-tick');

// let uploadImageBtn = document.getElementById('select-image');
// uploadImageBtn.addEventListener('click', () => {
//   const fileInput = document.getElementById('files');
//   // userImg contains the actual image file
//   const userUploadedImage = fileInput.files[0];
//   console.log(userUploadedImage);
//   if(userUploadedImage){
//     greenTick.style.display = 'inline';
//   }
// })

const detailsForm = document.getElementById('details-form');
detailsForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('hi');
  if(bootcampRadioBtn.checked){
    const fileInput = document.getElementById('files');
    // userImg contains the actual image file
    const userUploadedImage = fileInput.files[0];
    console.log(userUploadedImage);
    const reader = new FileReader();
    reader.readAsDataURL(userUploadedImage);
    // reader.onLoad = function(){
    //   console.log(reader.result);
    //   addUserImgInParticipantCanvas(reader.result);
    // }
    reader.addEventListener('load', () => {
      console.log(reader.result);
      addUserImgInParticipantCanvas(reader.result);
    })
    // console.log(reader.result);ss
    // addUserImgInParticipantCanvas(reader.result);
    let name = document.getElementById('fname').value;
    updateNameInParticipantCanvas(name.substring(0, name.indexOf(' ') + 1), name.substring(name.indexOf(' '), name.length));
  }

  if(hackathonRadioBtn.checked){

    let emailID = document.getElementById('email-field').value;
    let request = new XMLHttpRequest();

    request.open("GET", 'https://makeathon3077.mlsctiet.co.in/getyourbadge/profile/');
    request.setRequestHeader("email", emailID); 
    request.send();
    request.onload = () => {
      console.log(request);
      console.log(request.status);
      if(request.status === 200){
        console.log(JSON.parse(request.response));
        let response = JSON.parse(request.response);
        if(response.error == 'Invalid email-id'){
          alert('Enter valid email id used to sign up to Makeathon 3077');
        }
        else{
          let name = document.getElementById('fname').value;
          updateNameInParticipantCanvas(name.substring(0, name.indexOf(' ') + 1), name.substring(name.indexOf(' '), name.length));

          let teamName = response.teamName;

          let verticalGradient = new Image();
          verticalGradient.addEventListener('load', function(){
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
            partContext.drawImage(verticalGradient, 366, 0);
          }, false);
          verticalGradient.src = './images/participant-rectangle.png';     

          
          let bootcampRect = new Image();
          bootcampRect.addEventListener('load', function(){
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);
            partContext.drawImage(bootcampRect, 0, 544);

            partContext.font = 'normal 515 24px Ubuntu';
            partContext.fillStyle = '#0A0909';
            partContext.fillText(`${teamName}`, 49, 585);

          }, false);
          bootcampRect.src = './images/hackathon-team-name-rect.png';

          const fileInput = document.getElementById('files');
          // userImg contains the actual image file
          const userUploadedImage = fileInput.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(userUploadedImage);
          // reader.onLoad = function(){
          //   console.log(reader.result);
          //   addUserImgInParticipantCanvas(reader.result);
          // }
          reader.addEventListener('load', () => {
            console.log(reader.result);
            addUserImgInParticipantCanvas(reader.result);
          })
        }
      }
    }
  }
})

const participantCanvas =  document.querySelector("#participant-canvas");
const partContext = participantCanvas.getContext("2d");

  // partContext.fillStyle = '#0A0909'
  // partContext.fillRect(0, 0, 360, 179);
  
let blackRect = new Image();
blackRect.addEventListener('load', function(){
  partContext.drawImage(blackRect, 0, 0);

  partContext.font = 'normal 515 60px Ubuntu';
  partContext.fillStyle = 'white';
  partContext.fillText('Your', 30, 80);

  partContext.font = 'normal 515 24px Ubuntu';
  partContext.fillStyle = 'white';
  partContext.fillText('Name.', 30, 110);
}, false);
blackRect.src = './images/black-rectangle.png';


 let makeathonLogo = new Image();
 makeathonLogo.addEventListener('load', function(){
    partContext.drawImage(makeathonLogo, 0, 183);
 }, false)
 makeathonLogo.src = './images/makeathon-logo-badge.png';

 let verticalGradient = new Image();
 verticalGradient.addEventListener('load', function(){
   partContext.drawImage(verticalGradient, 366, 0);
 }, false);
 verticalGradient.src = './images/gradient-vertical-rectangle.png';

 let bootcampRect = new Image();
 bootcampRect.addEventListener('load', function(){
   partContext.drawImage(bootcampRect, 0, 544);
 }, false);
 bootcampRect.src = './images/bootcamp.png'

 function addUserImgInParticipantCanvas(userImgSrc){
  // console.log(userImgSrc);
  let userImgRect = new Image();
  userImgRect.addEventListener('load', function(){
    partContext.drawImage(userImgRect, 253, 183, 200, 424);
  }, false);
  userImgRect.src = userImgSrc;
}

function updateNameInParticipantCanvas(firstName, lastName){
  let blackRect = new Image();
  blackRect.addEventListener('load', function(){
    partContext.drawImage(blackRect, 0, 0);

    partContext.font = 'normal 515 60px Ubuntu';
    partContext.fillStyle = 'white';
    partContext.fillText(`${firstName}`, 30, 80);

    partContext.font = 'normal 515 24px Ubuntu';
    partContext.fillStyle = 'white';
    partContext.fillText(`${lastName}.`, 30, 110);
  }, false);
  blackRect.src = './images/black-rectangle.png';
}

download_img = function(el) {
  var image = document.getElementById('participant-canvas').toDataURL("image/jpg");
  el.href = image;
};

// Bug, click on hackathon, click on bootcamp, then upload image, it doesn't work



