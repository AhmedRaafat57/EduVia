import React, { useState } from "react";
import { BsCheckAll } from "react-icons/bs";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";
import element6 from "../../public/Images/element-06.png";

import about1 from "../../public/Images/about-img1.png";
import about2 from "../../public/Images/about-img2.png";
import user from "../../public/Images/user.png";
import aboutimage from "../../public/Images/about-image.jpg";

import whychoose from "../../public/Images/why-choose-us-image.jpg";

import featureicon1 from "../../public/Images/feature-icon1.png";
import featureicon2 from "../../public/Images/feature-icon2.png";
import featureicon3 from "../../public/Images/feature-icon3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage, faUserCircle } from "@fortawesome/free-regular-svg-icons";

import CoursesData from "../CoursesData.json";
import { Link } from "react-router-dom";

import article1 from '../../public/Images/articles-01.jpg';
import article2 from '../../public/Images/articles-02.jpg';
import article3 from '../../public/Images/articles-03.jpg';
const Index = () => {
  
  const categories = ["All", ...Object.keys(CoursesData.Courses)];
  const [activeCategory, setActiveCategory] = useState("All");

  const getCourses = () => {
    if (activeCategory === "All") {
      return Object.keys(CoursesData.Courses).flatMap((cat) => {
        if (cat === "Marketing") return CoursesData.Courses[cat].slice(0, 2);
        return CoursesData.Courses[cat].slice(0, 1);
      });
    }
    return CoursesData.Courses[activeCategory] || [];
  };

  const courses = getCourses();

  return (
    <>
      {/* Hero */}
      <div className="hero flex justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px[8%] py-[50px] lg:py-[90px] h-screen relative">
        <div className="hero-content text-center mx-auto w-full flex flex-col items-center relative z-9">
          
          <h2 className="text-[#222e48] text-3xl sm:text-5xl lg:text-7xl leading-14 lg:leading-20 font-bold sora-font py-2 w-full xl:w-[75%]">
          Discover the Right <span className="text-[#066dca]">Course,</span> Define {" "}
            <span className="text-[#e58209]">Your Future</span>
          </h2>

          <p className="text-[#576070] w-full lg:w-[60%] pb-4 text-sm sm:text-md">
          We are committed to guiding young minds, helping them grow in knowledge, skills, and confidence for a brighter future.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              className="btn custom-btn bg-[#076dcb] text-white hover:bg-[#fdfdfd] hover:text-black border hover:border-black px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              <Link to="/signin">Start 7-day Free Trial</Link>
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>

            <button
              className="btn custom-btn bg-black text-white   text-[#076dcb] border border-[#076dcb] hover:bg-[#fff] hover:text-black px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              <Link to="/courses">Find Courses</Link>
              
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>

        <img
          src={element1}
          alt="shape-image"
          className="element1 w-[50px] hero-shape1 absolute left-30 top-30 object-contain hidden md:block"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element4 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element6 hero-shape6 absolute right-50 top-20 w-[25px] hidden lg:flex"
        />
      </div>
      {/* About */}
      <div className="about flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
        <div className="about-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            About Eduvia
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-13 sora-font font-semibold">
          we believe that learning is the path to opportunity
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-shadow-md">
          We are dedicated to nurturing young minds and inspiring lifelong learners by providing high-quality courses designed to build real-world knowledge, skills, and confidence.
          </p>

          <ul className="flex flex-col gap-6 pb-10">
            <li className="flex gap-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-[70px] min-h-[60px] flex justify-center p-4">
                <img
                  src={about1}
                  alt="about-image"
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#222e48] font-semibold text-xl sora-font">
                  Our Mission
                </h4>
                <p className="text-neutral-500 text-sm lg:text-md">
                Our mission is to make education accessible, engaging, and empowering for learners everywhere.
                </p>
              </div>
            </li>
            <li className="flex gap-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-[70px] min-h-[60px] flex justify-center p-4">
                <img
                  src={about2}
                  alt="about-image"
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#222e48] font-semibold text-xl sora-font">
                  Our Vision
                </h4>
                <p className="text-neutral-500 text-sm lg:text-md">
                Our vision is to redefine education by making learning 
                accessible, engaging, and impactful for everyone, everywhere, and innovative learners who are ready to shape the future.
                </p>
              </div>
            </li>
          </ul>

          <div onClick={() => window.scrollTo(0, 0)} className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button 
              className="btn custom-btn bg-[#076dcd] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              <Link to="/about">
              Read More
              <i className="bi bi-arrow-up-right ps-2"></i></Link>
            </button>
          </div>
        </div>
        <div className="about-image w-full lg:w-1/2 h-[550px] overflow-hidden group rounded-lg z-2">
          <img
            src={aboutimage}
            alt="about-user"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <img
          src={element1}
          alt="shape-image"
          className="element1 w-[50px] about-shape1 absolute left-10 top-30 object-contain sm:block hidden"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 about-shape7 absolute right-10 bottom-10 object-contain lg:block hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 about-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] sm:block hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 about-shape5 absolute right-30 top-70 w-[20px] h-[20px] sm:block hidden"
        />
      </div>
      {/* Features */}
      <div className="feature flex justify-center items-center flex-col gap-10 px-[2%] lg:px[12%] sm:px-[8%] py-[90px] lg:py-[120px] relative">
        <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] xl:w-[50%]">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 sora-font font-semibold">
          Discover 100+ Free Online Courses and Start Learning Today
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-md">
          Explore our dynamic course catalog, designed to give you access to top-quality learning experiences that inspire growth and success
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1399: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2.5,
            },
            767: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="feature-wrapper w-full"
         
        >
          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img src={featureicon1} alt="feature-icon" />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Language Learning
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses teaching languages such as English, Spanish, Bangla etc.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img src={featureicon2} alt="feature-icon" />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Creative Arts & Design
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses on graphic design, digital art, photography, video , audio etc...
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit  bg-white rounded-[50%] p-5">
                <img className="w-[39px]" src={featureicon3} alt="feature-icon" />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Programming & Technology
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses on programming languages, web development, software engineering, data science etc...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <img
          src={element3}
          alt="shape"
          className="element3  hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape"
          className="element5 hero-shape3 absolute right-30 top-70 w-[20px] h-[20px] object-contain hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape"
          className="element5 hero-shape3 absolute left-10 bottom-50 w-[25px] h-[25px] object-contain hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape"
          className="element5 hero-shape3 absolute right-70 top-20  object-contain hidden lg:flex"
        />
      </div>
      {/*  Achivements */}
      <div className="our-achievements grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 px-[2%] lg:px[12%] sm:px-[90px] lg:py-[120px] relative">
        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#fdf6f3] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#f37739] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-people"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              80+
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Successfully Trained
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-camera-video"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              100+
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Courses Completed
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#fdf6f3] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#f37739] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              70+
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Satisfaction Completed
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-person"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              1000+
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Students Community
            </span>
          </div>
        </div>

        <img
          src={element5}
          alt="shape-image"
          className="element-5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
      </div>
      {/* Courses  */}
      <div className="courses px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[150px] bg-[#f3f9ff] relative">
        <div className="flex justify-between items-center flex-col lg:flex-row w-full gap-3">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl font-medium lg:w-1/2">
          Discover 100+ Free Online Courses
          </h2>
          <div className="lg:w-1/2 w-full">
            <p className="text-[#576070] text-sm pb-2">
            Explore our dynamic course catalog, designed to give you access to top-quality learning experiences that inspire growth and success...
            </p>
            <Link to="/Courses">
              <button className="bg-[#076dcd] hover:bg-black text-white px-5 py-3 rounded-full text-sm transition-colors duration-300">
                See All Courses <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 my-8 bg-white p-5 rounded-xl shadow-xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-3 rounded-full text-sm font-medium transition cursor-pointer shadow-md ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-[#f3f9ff] text-[#404a60]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.title}
                className="bg-white p-3 rounded-xl group hover:shadow-lg transition relative"
              >
                <div className="h-[230px] rounded-xl overflow-hidden relative bg-gray-200">
                  <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
                  <img
                    src={course.CourseImage}
                    alt={course.title}
                    loading="lazy"
                    className="relative z-10 group-hover:scale-110 transition duration-500 h-full w-full object-cover"
                    onLoad={(e) => {
                      e.target.previousSibling.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-3">
                  <h4 className="text-[#222e48] font-bold sm:text-xl hover:text-[#006dca] transition-colors duration-500">
                    {course.title}
                  </h4>
                  <div className="flex justify-between items-center my-2">
                    <span>
                      <i className="bi bi-camera-video pe-2"></i>
                      {course.lessons} Lessons
                    </span>
                    <span>
                      <i className="bi bi-bar-chart pe-2"></i>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <span>
                      <i className="bi bi-star-fill text-yellow-400 pe-2"></i>
                      {course.rating} ({course.reviews})
                    </span>
                    <div className="flex items-center">
                      <img
                        src={course.InstructorImage}
                        alt={course.instructor}
                        className="rounded-full h-10 w-10 object-cover me-2"
                      />
                      <span>{course.instructor}</span>
                    </div>
                  </div>
                  <div className="border-t-2 border-dotted pt-5 flex justify-between items-center">
                    <h4 className="text-[#f37739] text-2xl font-semibold">
                      ${course.price}
                    </h4>
                    <button
                      className="text-[#076dcd] hover:text-black font-medium cursor-pointer px-5 py-3 rounded-full w-fit text-sm transition-colors duration-300"
                      type="button"
                    >
                      {course.enrollLink}{" "}
                      <i className="bi bi-arrow-up-right ps-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No course available
            </p>
          )}
        </div>

        <img
          src={element1}
          alt="shape-image"
          className="element1 w-[50px] hero-shape1 absolute left-30 top-30 object-contain hidden lg:block"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden lg:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element3 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[25px] h-[25px] object-contain hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] object-contain hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-50 top-20 hidden lg:flex"
        />
      </div>
      {/* Why Choose Us */}
      <div className="why-choose-us flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
        {/* Image (Left Side) */}
        <div className="why-choose-us-image w-full lg:w-1/2 h-[500px] overflow-hidden group rounded-lg">
          <img
            src={whychoose}
            alt="why-choose-us"
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            Why Choose Us
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-3xl md:leading-13 sora-font font-semibold">
          We stand out as we combine quality education, expert instructors</h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm">
          At our core, we believe learning should be inspiring and accessible to everyone. That’s why we provide a diverse range of high-quality courses, personalized learning experiences
          </p>

          <ul className="flex flex-col gap-6 pb-6">
            <li className="flex items-center gap-2 text-sm text-[#222e48]">
              <BsCheckAll className="size-7 text-[#076dcd]" />
              9/10 Average Satisfaction Rate
            </li>
            <li className="flex items-center gap-2 text-sm text-[#222e48]">
              <BsCheckAll className="size-7 text-[#076dcd]" />
              96% Completion Rate
            </li>
            <li className="flex items-center gap-2 text-sm text-[#222e48]">
              <BsCheckAll className="size-7 text-[#076dcd]" />
              Friendly Environment & Expert Teacher
            </li>
          </ul>

          <div className="border-t-2 mb-10 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button
              className="btn custom-btn bg-[#076dcd] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Read More
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>

        {/* Shapes */}
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape-2 absolute left-20 top-60 object-contain md:block hidden "
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape-5 absolute right-30 top-70 w-[20px] h-[20px] sm:flex hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape-6 absolute left-10 bottom-50 w-[25px] h-[25px] sm:flex hidden"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape-7 absolute right-50 top-20 lg:flex hidden"
        />
      </div>
      {/* Articles */}
      <div className="articles bg-[#f3f9ff] px-[#2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative gap-10 flex flex-col">
        <div className="articles-content flex flex-col lg:w-1/2 w-full mx-auto text-center z-2">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            Articles
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-3xl md:leading-10 sora-font font-semibold">Recent Articles</h2>
          <p className="text-[#576070] pt-3 pb-5 text-sm sm:text-md">
            Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad...
          </p>
        </div>

        <div className="articles-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 z-2">
          {/* cart-1 */}
          <div className="articles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <img src={article1} alt="articles-image" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="articles-content py-5">
              <span className="bg-[#f37638] text-white rounded-sm px-2 chakrapetch-font font-semibold py-1">Student life</span>
              <h4 className="my-3 sora-font font-semibold text-md sm:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1"/>
                  <span>Pradip</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1"/>
                  <span>10 July, 25</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1"/>
                  <span>25</span>
                </div>
              </div>
              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital learning space...
              </p>
              <div  className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link to='/blog' onClick={() => window.scrollTo(0, 0)}>
                <button className="btn custom-btn text-[#076dcd] font-medium rounded-full w-fit text-sm cursor-pointer" type="button">
                  Read More
                  <i className="bi bi-arrow-up-right ps-2"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Cart-2 */}
          <div className="articles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <img src={article2} alt="articles-image" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="articles-content py-5">
              <span className="bg-[#16a34a] text-white rounded-sm px-2 chakrapetch-font font-semibold py-1">Freedom</span>
              <h4 className="my-3 sora-font font-semibold text-md sm:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1"/>
                  <span>Megha</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1"/>
                  <span>12 July, 25</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1"/>
                  <span>25</span>
                </div>
              </div>
              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital learning space...
              </p>
              <div  className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link to='/blog' onClick={() => window.scrollTo(0, 0)}>
                <button className="btn custom-btn text-[#076dcd] font-medium rounded-full w-fit text-sm cursor-pointer" type="button">
                  Read More
                  <i className="bi bi-arrow-up-right ps-2"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>
          {/* cart-3 */}
          <div className="articles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <img src={article3} alt="articles-image" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="articles-content py-5">
              <span className="bg-[#17bbe4] text-white rounded-sm px-2 chakrapetch-font font-semibold py-1">Online</span>
              <h4 className="my-3 sora-font font-semibold text-md sm:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1"/>
                  <span>Mihir</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1"/>
                  <span>18 July, 25</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1"/>
                  <span>26</span>
                </div>
              </div>
              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital learning space...
              </p>
              <div  className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link to='/blog' onClick={() => window.scrollTo(0, 0)}  >
                <button className="btn custom-btn text-[#076dcd] font-medium rounded-full w-fit text-sm cursor-pointer" type="button">
                  Read More
                  <i className="bi bi-arrow-up-right ps-2"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img src={element1} alt="shape-image" className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden md:block w-[50px]"/>
        <img src={element2} alt="shape-image" className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"/>
        <img src={element3} alt="shape-image" className="element3 hero-shape3 absolute right-96 bottom-10 z-1 object-contain hidden lg:block"/>
        <img src={element4} alt="shape-image" className="element3 hero-shape4 absolute right-40 bottom-50 z-0 object-contain hidden lg:block"/>
        <img src={element5} alt="shape-image" className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"/>
        <img src={element5} alt="shape-image" className="element5 hero-shape5 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"/>
        <img src={element6} alt="shape-image" className="element5 hero-shape5 absolute right-50 top-20 z-2 hidden lg:flex"/>
      </div>
    </>
  );
};

export default Index;
