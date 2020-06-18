// import React from 'react'
// import {PropertyContext} from '../context';
// import SingleProperty from '../pages/SingleProperty';

// export default function Lightbox() {

//     const {column,
//         slide,
//         images,
//         alt
//     } = SingleProperty;

//     return (
//         <>
//         <section>

//     <div className="row">
//      {column.map((item,index)=>{

//          <div className="column">
//          <img key={index} src={item} style="width:100%" onClick= {currentSlide({index})} />;
//     </div>
//     console.log(column);
//     })}

// </div>

// <div id="myModal" className="modal">
//   <span className="close cursor" onClick="closeModal()">&times;</span>
//   <div className="modal-content">

//     <div className="mySlides">
//       <div className="numbertext">1 / 4</div>
//       <img src="" style="width:100%">
//     </div>

//     <div className="mySlides">
//       <div className="numbertext">2 / 4</div>
//       <img src="" style="width:100%">
//     </div>

//     <div className="mySlides">
//       <div className="numbertext">3 / 4</div>
//       <img src="" style="width:100%">
//     </div>

//     <div className="mySlides">
//       <div className="numbertext">4 / 4</div>
//       <img src="" style="width:100%">
//     </div>

//     <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
//     <a className="next" onClick="plusSlides(1)">&#10095;</a>

//     <div className="caption-container">
//       <p id="caption">{alt}</p>
//     </div>
//   </div>
//         </section>
//         </>
//     )

// }

// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }

//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }

//   var slideIndex = 1;
//   showSlides(slideIndex);

//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }
