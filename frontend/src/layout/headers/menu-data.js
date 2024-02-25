const menu_data = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    has_dropdown: true,
    sub_menus: [
      { link: "/dashboard", title: "Admin Dashboard" },//home-3
    
     
    ],
  },
  {
    id: 2,
    title: "E Classroom",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "Chat" },
      { link: "/contact", title: "Contact" },
      
      { link: "/faq", title: "FAQ" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Sign In" },
    ],
  },
  {
    id: 3,
    title: "Attendence",
    link: "/instructor",
    has_dropdown: false,
    sub_menus: [
      { link: "/instructor", title: "Offline Attendence" },
      { link: "/instructor-profile", title: "Online Attendence" },
    ],
  },
  {
    id: 4,
    title: "Course",
    link: "/course-grid",
    has_dropdown: true,
    sub_menus: [
      { link: "/course-grid", title: "Course Grid" },
      { link: "/course-list", title: "Course List" },
      { link: "/course-details", title: "Course Details" },
    ],
  },
  // {
  //   id: 5,
  //   title: "Zoom",
  //   link: "/blog",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/blog", title: "Blog Sidebar" },
  //     { link: "/blog-grid", title: "Blog Grid" },
  //     { link: "/blog-masonry", title: "Blog Masonry" },
  //     { link: "/blog-details", title: "Blog Details" },
  //   ],
  // },
  
  {
    id: 5,
    title: "Time Table",
    link: "/schedule",
    has_dropdown: true,
    sub_menus: [
      { link: "/schedule", title: "Schedule" },
 
    ],
  },
  
];
export default menu_data;
