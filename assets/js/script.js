
    document.querySelector('.hamburguer').addEventListener('click',()=>{
        document.querySelector('.container').classList.toggle('menu-show');
    })






 let totalSlider = document.querySelectorAll('.slider-item').length;
 let currentSlider = 0;
 let sliderWidth = document.querySelector('.slider').clientWidth;

 document.querySelector('.slider-width').style.width = 
        `${sliderWidth * totalSlider}px `;


    const proxSlider = ()=>{
         currentSlider--;
        if(currentSlider < 0){
                currentSlider = totalSlider - 1;
        }
        updateMargin();
    }

    const antSlider =()=>{
        currentSlider++;
        if(currentSlider > totalSlider -1){
            currentSlider = 0
        }
        updateMargin()
    }


    const updateMargin =()=>{
        let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
        let newMargin = (currentSlider * sliderItemWidth);
        document.querySelector('.slider-width').style.marginLeft = `${-newMargin}px`;
    }


    setInterval(proxSlider, 5000);







    // Slider Show
    /*
    let totalSlider = document.querySelectorAll('.slider--item').length;
    let currentSlider = 0;
    let sliderWidth = document.querySelector('.slider-habilidade').clientWidth;
  document.querySelector('.slider-width').style.width = 
    `${sliderWidth * totalSlider}px`;
    
  document.querySelector('.slider--controls').style.heigth =
     `${document.querySelector('.slider-habilidade').clientHeight}px`;

     const proxSlider = ()=>{
        currentSlider--;
        if(currentSlider < 0){
            currentSlider = totalSlider - 1;
        }
        updateMargin();
     }

     const antSlider = ()=>{
        currentSlider++;
        if(currentSlider > totalSlider -1){
            currentSlider = 0;
        }
        updateMargin()
     }


     const updateMargin = ()=>{
         let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
         let newMargin = (currentSlider *  sliderItemWidth );
         document.querySelector('.slider-width').style.marginLeft = `${-newMargin}px`;
     }

     */
