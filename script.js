

  // const container = document.querySelector('.carrossel-container');
  // let slideIndex1 = 0;

  // function showSlide(index) {
  //   container.style.transform = `translateX(-${index * 100}%)`;
  // }

  // function previousSlide() {
  //   slideIndex1--;
  //   if (slideIndex1 < 0) {
  //     slideIndex1 = 0;
  //   }
  //   showSlide(slideIndex1);
  // }

  // function nextSlide() {
  //   slideIndex1++;
  //   const totalSlides = container.querySelectorAll('img').length;
  //   if (slideIndex1 >= totalSlides) {
  //     slideIndex1 = totalSlides - 1;
  //   }
  //   showSlide(slideIndex1);
  // }




  // const containers = document.querySelector('.carousel-container');
  // let slideIndex = 0;

  // function showSlides(index) {
  //   containers.style.transform = `translateX(-${index * 100}%)`;
  // }

  // function previousSlides() {
  //   slideIndex--;
  //   if (slideIndex < 0) {
  //     slideIndex = 0;
  //   }
  //   showSlides(slideIndex);
  // }

  // function nextSlides() {
  //   slideIndex++;
  //   const totalSlides = containers.querySelectorAll('img').length;
  //   if (slideIndex >= totalSlides) {
  //     slideIndex = totalSlides - 1;
  //   }
  //   showSlides(slideIndex);
  // }




  // const container1 = document.querySelector('.carrossel-container1');
  // let slideIndex2 = 0;

  // function showSlides1(index) {
  //   container1.style.transform = `translateX(-${index * 100}%)`;
  // }

  // function previousSliders() {
  //   slideIndex2--;
  //   if (slideIndex2 < 0) {
  //     slideIndex2 = 0;
  //   }
  //   showSlides1(slideIndex2);
  // }

  // function nextSliders() {
  //   slideIndex2++;
  //   const totalSlides = container1.querySelectorAll('img').length;
  //   if (slideIndex2 >= totalSlides) {
  //     slideIndex2 = totalSlides - 1;
  //   }
  //   showSlides1(slideIndex2);
  // }



  
  function mostrarModal(){
    let areaModal = document.querySelector('.modal');
    areaModal.style.display = 'block';
  }

  function fechar(){
    let areaModal = document.querySelector('.modal');
    areaModal.style.display = 'none';
  }



  function mostrarModal1(){
    let areaModal1 = document.querySelector('.modal1');
    areaModal1.style.display = 'block';
  }


  function fechar1(){
    let areaModal1 = document.querySelector('.modal1');
    areaModal1.style.display = 'none';
  }


  function mostrarModal2(){
    let areaModal2 = document.querySelector('.modal2');
    areaModal2.style.display = 'block';
  }

  function fechar2(){
    let areaModal2 = document.querySelector('.modal2');
    areaModal2.style.display = 'none';
  }