import React from 'react';
import Slider from 'react-slick';

// testimonial_data_3
const testimonial_data_3 = [
   {
     id: 1,
     name: "Wade Warren",
     name_about: "Darrell Steward",
     img: "/assets/img/icon/test-avata--1.png",
     img_about: "/assets/img/icon/test-avata--1.png",
     title: "President of Sales",
     des: (
       <>
          The streamlined attendance tracking feature has simplified my workload, 
         allowing me to focus more on teaching and less on paperwork.
       </>
     ),
   },
   {
     id: 2,
     name: "Guy Hawkins",
     name_about: "Ralph Edwards",
     img: "/assets/img/icon/testi-avata3-01.png",
     img_about: "/assets/img/icon/testi-ava-sub-1.png",
     title: "Marketing Coordinator",
     des: (
       <>
         Wow, I'm blown away by how effective this website is for managing my classes!
         The Optimised Scheduling feature has saved me so much time
       </>
     ),
   },
   {
     id: 3,
     name: "Courtney Henry",
     name_about: "Courtney Henry",
     img: "/assets/img/icon/test-avata--2.png",
     img_about: "/assets/img/icon/testi-ava-sub-2.png",
     title: "UX/UI Designer",
     des: (
       <>This platform's interactive quizzes and Zoom integration have revolutionized my learning. 
       Highly recommended for an immersive learning experience
       </>
     ),
   },
 ];

 // testimonial setting 
 const setting = {
   infinite: true,
   autoplay:true,
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: false,
   dots: false,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }

   ]
}

const TestimonialAreaThree = ({style_about}) => {
    return (
        <>
      <section className={`testimonial-area bg-bottom ${style_about ? "pt-120" : "pt-115"} pb-90  wow fadeInUp`} data-wow-duration=".8s" data-wow-delay=".3s" 
            style={{backgroundImage: `url(/assets/img/bg/shape-bg-1.png)`}} >
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title text-center mb-65">
                     <span className={`${style_about ? "tp-sub-title-box" : "tp-bline-stitle"} mb-15`}>Testimonial</span>
                     <h2 className="tp-section-title mb-20">What Our Happy Users Says</h2>
                  </div>
               </div>
            </div>
            <div className="testimonial-active-box tp-slide-space-white">
               <Slider {...setting}>
               { testimonial_data_3.map((item) =>                   
                  <div key={item.id} className="tp-test-s-item">
                  <div className="tp-testi tp-testi-round p-relative">
                     <div className="tp-testi__ava testi-ava-border d-flex align-items-center mb-20 pb-20">

                        <img src={style_about ? item?.img_about : item.img} alt="testi-avatar" />
                        <div className="tp-testi__avainfo ml-20">
                           <h3 className="tp-testi__title tp-title-meta mt-5">
                              {style_about ? item?.name_about : item.name}
                           </h3>
                           <i>
                              {item.title}
                           </i>
                        </div>
                     </div>
                     <p>
                        {item.des}
                     </p>
                     <div className="tp-testi__rating mb-5">
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-rs-star"></i>
                        <span>4.5</span>
                     </div>
                     <div className="testi-quote">
                        <i className="fa-solid fa-quote-right"></i>
                     </div>
                  </div>
               </div>                  
               )
               }
               </Slider>
            </div>
         </div>
      </section>
        </>
    );
};

export default TestimonialAreaThree;