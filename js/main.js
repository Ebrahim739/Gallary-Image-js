const Gallery = document.querySelectorAll(".gallery .image"),
previewbox = document.querySelector(".preview-box"),
previewimg = previewbox.querySelector("img"),
closeicon = previewbox.querySelector(".icon"),
currentimg = previewbox.querySelector(".current-img"),
totalimg = previewbox.querySelector(".total-image"),
shadow = document.querySelector(".shadow");
 


window.onload = ()=>{
    for (let i = 0; i < Gallery.length; i++) {
      // @ts-ignore
      totalimg.textContent = Gallery.length;
      let newindex = i;
      let clickImgIndex;
        Gallery[i].onclick = ()=>{
          clickImgIndex =newindex;
          console.log(i);
          function preview() {
              // @ts-ignore
            currentimg.textContent = newindex + 1;
            let slectedImgUrl = Gallery[newindex].querySelector("img").src;
            previewimg.src = slectedImgUrl;
          }
          preview();

            const prevbtn = document.querySelector(".prev");
            const nextbtn = document.querySelector(".next");
            if (newindex == 0) {
              // @ts-ignore
              prevbtn.style.display = "none";
            }
            if (newindex >= Gallery.length - 1) {
              // @ts-ignore
              nextbtn.style.display = "none";
           } 
           prevbtn.onclick = ()=>{
              newindex--;
              if (newindex == 0) {
                preview();
                // @ts-ignore
                prevbtn.style.display = "none";
             } else {
               preview();
                 // @ts-ignore
                 nextbtn.style.display = "block";
             }

            }
            nextbtn.onclick = ()=>{
              newindex++;
              if (newindex >= Gallery.length - 1) {
                preview();
                // @ts-ignore
                nextbtn.style.display = "none";
              } else {
               preview();
               // @ts-ignore
               prevbtn.style.display = "block";
             }

            }
        
         
          document.querySelector("body").style.overflow = "hidden";

          previewbox.classList.add("show");
          // @ts-ignore
          shadow.style.display = "block";
          document.querySelector("body").style.overflow = "hidden";

 
           closeicon.onclick = ()=>{
            newindex = clickImgIndex;
             // @ts-ignore
            prevbtn.style.display = "block";
            // @ts-ignore
            nextbtn.style.display = "block";
            previewbox.classList.remove("show");
            // @ts-ignore
            shadow.style.display = "none"  ;
            document.querySelector("body").style.overflow = "auto";
          }
        
        } 
    }
}
