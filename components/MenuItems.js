import {
  BiBookOpen,
  BiCommentDetail,
  BiBuildingHouse,
  BiUser,
} from "react-icons/bi";

const MenuItems = [
  {
    label: "Home",
    url: "/",
    icon: <BiBuildingHouse />,
    active: true,
  },
  {
    label: "About",
    url: "/about",
    icon: <BiUser />,
    active: false,
  },
  {
    label: "Work",
    url: "/portfolio",
    icon: <BiBookOpen />,
    active: false,
  },
  {
    label: "Contact",
    url: "/contact",
    icon: <BiCommentDetail />,
    active: true,
  },
  {
    label: "Blog",
    url: "/posts",
    icon: <BiCommentDetail />,
    active: true,
  },
];

export default MenuItems;
