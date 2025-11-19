let btn= document.querySelector("#btn");
let content= document.querySelector("#text");
let voice= document.querySelector("#voice");

function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;
    window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let days= new Date();
    let hours = days.getHours()
    if(hours>=0 && hours<12){
        speak("Selamat pagi Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira. saya di program atau dibuat oleh Mr.Muhammad Arif Triyana")
    } else if(hours>=12 && hours<16){
        speak("Selamat siang Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira. saya di program atau dibuat oleh Mr.Muhammad Arif Triyana")
    } else {
        speak("Selamat malam Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira. saya di program atau dibuat oleh Mr.Muhammad Arif Triyana")
    }
}

// window.addEventListener("load",()=>{
//     wishme()
// })

let speechRecognization= window.speechRecognition || window.webkitSpeechRecognition
let recognization = new speechRecognization()
recognization.onresult= (event)=>{
    let currentIndex= event.resultIndex
    let transcript= event.results[currentIndex][0].transcript;
    content.innerText= transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    btn.style.display="none";
    voice.style.display="block";
    recognization.start();
})


function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
   if(message.includes("hello") || message.includes("hey") || message.includes("hi")|| message.includes("good") ){
    wishme();
    speak("Hallo sobat Universitas Catur Insan Cendikia apa yang bisa saya bantu?");
   } else if(message.includes("buka youtube")){
    speak("Buka youtube sabar dulu kang...");
    window.open("https://www.youtube.com/","_blank")
   } else if(message.includes("buka facebook")){
    speak("Buka facebook sabar dulu kang...");
    window.open("https://www.facebook.com/","_blank")
   } else if(message.includes("buka instagram")){
    speak("Buka instagram sabar dulu kang...");
    window.open("https://www.instagram.com/","_blank")
   } else if(message.includes("buka spotify")){
    speak("Buka spotify sabar dulu kang...");
    window.open("https://www.spotify.com/","_blank")  
   } else if(message.includes("buka calculator")){
    speak("Buka kalkulator sabar dulu kang...");
    window.open("calculator://")
   } else if(message.includes("buka whatsapp")){
    speak("Buka whatsapp emang ada yang nge chat sok sokan luh...");
    window.open("whatsapp://")
   } else if(message.includes("time")){
    let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time);
   } else if(message.includes("date")){
    let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
    speak(date);
   } else{
    speak(`Ini adalah apa pun yang saya temukan di Internet mengenai ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
   }

}