let imagesToload= document.querySelectorAll("img[date-src]");


const loadIamge =(image)=>{
    image.setAttribute("src",images.getAttribute("data-src"));
    image.onload =() =>{
        image.removeAttribute("data-src");
    }

    imagesToload =forEach(image => {
       loadIamge(img); 
    });

    if ("IntersectionObserver" in window){
        const observer = new IntersectionObserver(image);{
            Item.forEach(item);{
             if (item.isIntersecting){
                loadIamge(item.target);
                observer.unobserver(item.target);
             }
            }
        }
    }

    imagesToload.forEach(img);{
        observer.observer(img);
    }

    else {
        imagesToload.forEach(img);{
            loadIamge(img);
        }
    }
}