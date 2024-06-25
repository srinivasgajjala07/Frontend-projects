

document.getElementById('bt2').addEventListener('click',myfun);
let i;
document.getElementById('evenodd').textContent="Even";
document.getElementById('para').textContent=i=0;
function myfun(){
    if(i<1){
        alert("Warning lower boundary is 0 only");
        document.getElementById('para').textContent=i=0;
    }
    else{
    document.getElementById('para').textContent=--i;}
    if(i%2==0){
        document.getElementById('evenodd').textContent="Even";
    }
    else{
        document.getElementById('evenodd').textContent="Odd";

    }
    
}

document.getElementById('bt3').addEventListener('click',myfun2);

function myfun2(){
    alert("you are reseted value become zero")
    document.getElementById('para').textContent=i=0;
    document.getElementById('evenodd').textContent="Even";

    
}
document.getElementById('bt4').addEventListener('click',myfun3);

function myfun3(){

    if(i==20){
        alert("Warning upper boundary is 20 only");
        document.getElementById('para').textContent=i=20;
    }
    else{
    document.getElementById('para').textContent=++i;} 
    if(i%2==0){
        document.getElementById('evenodd').textContent="Even";
    }
    else{
        document.getElementById('evenodd').textContent="Odd";

    }   
}

document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll(".heading");
    const paras = document.querySelectorAll('.para');

    let currentOpenIndex = null; // Track the index of the currently open paragraph

    function toggleAccordion(index) {
        paras.forEach((para, paraIndex) => {
            if (index === paraIndex) {
                para.classList.toggle('hide'); // Toggle the clicked one
            } else {
                para.classList.add('hide'); // Hide all others
            }
        });
        document.getElementById("head").classList.add("animate__zoomIn");
    }

    headings.forEach((heading, index) => {
        heading.addEventListener('click', () => {
            if (currentOpenIndex !== null && currentOpenIndex !== index) {
                paras[currentOpenIndex].classList.add('hide'); // Close the previously opened paragraph
            }
            toggleAccordion(index);
            currentOpenIndex = currentOpenIndex === index ? null : index; // Update the currently open index
        });
    });
});
function change2() {
    let randomNumber = Math.round(Math.random() * 10000000).toString(16)
        document.body.style.backgroundColor = "#"+randomNumber
}
        