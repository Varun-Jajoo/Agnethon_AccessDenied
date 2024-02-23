import React from "react";


// choose_data_3
const choose_data_3 = [
  {
    id: 1,
    title: "Increasing Your Learning Skills",
    des: (
      <>
        Boosting Your Learning Proficiency with Interactive Lectures,
          Courses, and Engaging Quizzes
      </>
    ),
  },
  {
    id: 2,
    title: "High Quality Video & Audio Classes",
    des: (
      <>
        Experience high-definition video and crystal-clear audio in our live classes,
         ensuring an immersive and engaging learning environment.
      </>
    ),
  },
  {
    id: 3,
    title: "Optimised Scheduling of Classes",
    des: (
      <>
        Efficiently organize classes to maximize 
        learning opportunities and ensure academic progress.
      </>
    ),
  },
];

// choose top data 
const choose_top_data = {
    title: "Why Choose Our Virtual Learning Experience?",
    des: <> Empower yourself with the convenience of online learning,
     tailored to your needs and designed to make online education  enjoyable.</>
}

const { title , des} = choose_top_data


const ChooseArea = () => {
  return (
    <>
      <section
        className="choose-area pb-70 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="tp-choose-content mb-50">
                <div className="section-title mb-30">
                  <span className="tp-bline-stitle mb-15">Why Choose Us</span>
                  <h2 className="tp-section-title mb-35">
                    {title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-online-list">
                  <ul>
                    {choose_data_3.map((item, i) => (
                      <li key={i}>
                        <div className="choose-online-item d-flex">
                          <div className="choose-online-icon">
                            <i className="fa-light fa-check"></i>
                          </div>
                          <div className="choose-online-content">
                            <h5 className="choose-online-title mb-10">
                              {item.title}
                            </h5>
                            <p>{item.des}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="tp-choose-img tp-big-bg mb-50">
                <img src="/assets/img/bg/choose-3-bg-01.png" alt="choose-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
