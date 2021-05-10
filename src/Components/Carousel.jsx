import react,{useEffect} from "react";

const Carousel = () =>{       
        const slideContainer = document.querySelector('.container');
        const slide = document.querySelector('.slides');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const interval = 1000;
        
        
        let slides = document.querySelectorAll('.slide');
        let index = 1;
        let slideId;
        
        const firstClone = slides[0].cloneNode(true)
        const lastClone = slides[slides.length - 1].cloneNode(true)
        
        firstClone.id = 'first-clone'
        lastClone.id = 'last-clone'
        
        slide.append(firstClone);
        slide.prepend(lastClone);
        
        const slideWidth = slides[index].clientWidth;
        
        slide.style.transform = `translateX(${-slideWidth * index}px)`
        
        const startSlide = () =>{
            slideId = setInterval(() => {
                moveTonextSlide();
            }, interval)
        }

        const getSlides = ()=>document.querySelectorAll('.slide')

        slide.addEventListener('transitionend', ()=>{
            slides = getSlides();
            if(slides[index].id === firstClone.id){
                slide.style.transition = 'none';
                index = 1;
                slide.style.transform = `translateX(${-slideWidth * index}px)`
            }
            if(slides[index].id === lastClone.id){
                slide.style.transition = 'none';
                index = slides.length - 2;
                slide.style.transform = `translateX(${-slideWidth * index}px)`
            }
        })

        const moveTonextSlide = () =>{
                slides = getSlides()
                if(index >= slides.length - 1) return;
                index++;
                slide.style.transform = `translateX(${-slideWidth * index}px)`
                slide.style.transition = '.7s';
        };

        const moveToprevSlide = () =>{
                slides = getSlides()
                if(index <= 0) return;
                index--;
                slide.style.transform = `translateX(${-slideWidth * index}px)`
                slide.style.transition = '.7s';
        };


        slideContainer.addEventListener('mouseenter',()=>{
            clearInterval(slideId);
        })
        slideContainer.addEventListener('mouseleave',startSlide);

        nextBtn.addEventListener('click', moveTonextSlide);
        prevBtn.addEventListener('click', moveToprevSlide);    


        useEffect(()=>{
            startSlide();
        },[])

    return(
    <div class="container">
        <div class="slides">
            <div class="slide"><img src="images/img1.jpg" alt=""/></div>
            <div class="slide"><img src="images/img2.jpg" alt=""/></div>
            <div class="slide"><img src="images/img3.jpg" alt=""/></div>
            <div class="slide"><img src="images/img4.jpg" alt=""/></div>
            <div class="slide"><img src="images/img5.jpg" alt=""/></div>
        </div>
        <div class="slide-controls">
            <button id="prev-btn"><i class="fas fa-chevron-left"></i></button>
            <button id="next-btn"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
    )
}

export default Carousel;