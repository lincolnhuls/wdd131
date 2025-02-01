function Hiding() {
    document.querySelector(".menu").classList.toggle("hide");
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        document.querySelector(".menu").classList.remove("hide");
    }
    else {
        document.querySelector(".menu").classList.add("hide");
    }
 }

function viewerTemplate(img_path, alt_text) {
     return `<div class="viewer">
        <button class="close_viewer">X</button>
        <img src="${img_path}" class="model" alt="${alt_text}"></img>
    </div>`;
} 

function viewHandler(event) {
    	// create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    const imageName = clickedImage.src.split("-");

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImageName = imageName[0] + "-sm.jpeg";

    const altText = clickedImage.alt;

    const viewer = viewerTemplate(fullImageName, altText);

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewer)

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close_viewer").addEventListener("click", closeViewer)

}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

handleResize();
document.querySelector("button").addEventListener("click", Hiding);
window.addEventListener("resize", handleResize);
document.querySelector(".gallery").addEventListener("click", viewHandler);