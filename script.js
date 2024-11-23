console.log("Hello Script")
const toggleBtn=document.querySelector('#offBtn');
const toggleOn=document.querySelector('#onBtn');
const selectBTN= document.querySelector('#selectBtn');
const sidebarOff=document.querySelector('#menuOff')
const sidebarOn=document.querySelector('#menuOn')


document.querySelector('#submitBTN').addEventListener('click',()=>{
    alert("submit successfully")
})
selectBTN.addEventListener('click' ,()=>{
    console.log("Hello Select Button")
    document.querySelector('#fileSelect').click();
})
function handleFileupload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0]; // Get the first selected file
    
    if (file) {
        // Display the selected file name
        document.querySelector('.fileBox').textContent = `Selected File: ${file.name}`;
    } else {
        document.getElementById('.fileBox').textContent = 'No file selected';
    }
}
toggleBtn.addEventListener('click',()=>{
    console.log("hello")
    document.querySelector('.dashboardLeft').style.display="none";
    document.querySelector('.menuArrow').style.marginLeft="-10px";
    document.querySelector('#offBtn').style.display="none";
    document.querySelector('#onBtn').style.display="block";
})

toggleOn.addEventListener('click',()=>{
    console.log("hello")
    document.querySelector('.dashboardLeft').style.display="block";
    document.querySelector('.menuArrow').style.marginLeft="15em";
    document.querySelector('#offBtn').style.display="block";
    document.querySelector('#onBtn').style.display="none";
})

// **************** sidebar menu ***************
sidebarOn.addEventListener('click',()=>{
    console.log("hello")
    document.querySelector('.dashboardLeftSidebar').style.display="flex";
    document.querySelector('.menuSidebar').style.marginLeft="7em";
    document.querySelector('#menuOff').style.display="block";
    document.querySelector('#menuOn').style.display="none";
})
sidebarOff.addEventListener('click',()=>{
    console.log("hello")
    document.querySelector('.dashboardLeftSidebar').style.display="none";
    document.querySelector('.menuSidebar').style.marginLeft="-10px";
    document.querySelector('#menuOff').style.display="none";
    document.querySelector('#menuOn').style.display="block";
})