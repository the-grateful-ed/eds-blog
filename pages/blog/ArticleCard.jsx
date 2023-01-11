// import React from "react";
// import Image from "next/image";
// import { CgCalendarDates, CgReadme } from "react-icons/cg";
// import { FiArrowRight } from "react-icons/fi";
// import { RxDotFilled } from "react-icons/rx";
// import Button from "./Button";

// export default function ArticleCard({
//   title,
//   description,
//   slug,
//   image,
//   category,
//   dateTime,
//   readingTime,
// }) {
//   return (
//     <div className="primary-fill flex max-w-sm flex-col rounded-lg border border-gray-700 bg-gray-50 shadow-lg">
//       <a href={`/blog/${slug}`}>
//         <img
//           className="rounded-lg p-1"
//           src={image}
//           alt=""
//         />
//       </a>
//       <div className="p-3">
//         <div className="pb-1">
//           <span className="rounded-lg border-2 border-blue-400 bg-white px-2.5 py-0.5 text-sm font-bold text-blue-500 shadow">
//             {category}
//           </span>
//         </div>
//         <a href={`/blog/${slug}`}>
//           <h5 className="text-OuterSpace-700 mb-0.5 text-2xl font-bold tracking-tight">
//             {title}
//           </h5>
//         </a>
//         <div className="flex justify-between py-0.5 px-2">
//           <span className="inline-flex items-center text-sm text-gray-500">
//             <CgReadme className="mx-1" />
//             {readingTime}
//           </span>
//           <RxDotFilled className="text-OuterSpace-700 inline-flex items-center text-xl" />
//           <span className="inline-flex items-center text-sm text-gray-500">
//             <CgCalendarDates className="mx-1" />
//             {dateTime}
//           </span>
//         </div>
//         <p className="mb-3 h-16 flex-1 font-normal text-gray-900">
//           {description}
//         </p>
//       </div>
//       <div className="m-2 mb-4 flex justify-end">
//         <Button
//           className="dark:focus:ring-green-80bg-UFOGreen-2000 inline-flex items-center rounded-lg bg-secondary-fill px-5 py-2.5 text-center text-sm font-medium text-mygray-900 hover:bg-secondary-accent focus:outline-none focus:ring-4 focus:ring-green-300"
//           href={`/blog/${slug}`}
//         >
//           Read More <FiArrowRight className="ml-1" />
//         </Button>
//       </div>
//     </div>
//   );
// }
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import { CgCalendarDates, CgReadme } from "react-icons/cg";
export default function ArticleCard({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) {
  return (
    // <div className="w-full">
    //   <Card>
    // <CardImageWraper>
    //   <img
    //     src={image}
    //     alt="image"
    //     width={1200}
    //     height={600}
    //     className="h-full w-full"
    //   />
    // </CardImageWraper>

    //     <CardBody>
    // <CardCategory>{category}</CardCategory>
    //       <CardTitle>{title}</CardTitle>
    // <StatsWrapper>
    //   <CgReadme />
    //   <CardStats>{readingTime}</CardStats>
    //   <RxDotFilled className="text-OuterSpace-700 inline-flex items-center text-xl" />
    //   <CgCalendarDates />
    //   <CardStats>{dateTime}</CardStats>
    // </StatsWrapper>
    //       <CardText>{description}</CardText>
    // <CardLinkWraper>
    //   <CardLink>
    //     <Link
    //       className="inline-flex items-center px-1 text-xl"
    //       href={`/blog/${slug}`}
    //     >
    //       <span className="px-1">Read More</span>
    //       <FiArrowRight />
    //     </Link>
    //   </CardLink>
    // </CardLinkWraper>
    //     </CardBody>
    //   </Card>
    // </div>

    <div class="flex flex-col rounded-xl bg-gray-50">
      <CardImageWraper>
        <img
          src={image}
          alt="image"
          width={1200}
          height={600}
          className="h-full w-full object-cover"
        />
      </CardImageWraper>
      <div class="flex flex-auto flex-col gap-y-2  p-2 pb-4 ">
        <CardCategory>{category}</CardCategory>
        <h3 class="text-semibold text-xl text-blue-900 line-clamp-1">
          {title}
        </h3>
        <StatsWrapper>
          <CgReadme className="inline-flex items-center text-gray-500" />
          <CardStats>{readingTime}</CardStats>
          <RxDotFilled className="inline-flex items-center text-xl text-gray-500" />
          <CgCalendarDates className="inline-flex items-center text-gray-500" />
          <CardStats>{dateTime}</CardStats>
        </StatsWrapper>
        <p class="text-xl  text-black line-clamp-3">{description}</p>
      </div>
      <CardLinkWraper>
        <CardLink>
          <Link
            className="inline-flex items-center px-1 text-xl"
            href={`/blog/${slug}`}
          >
            <span className="px-1">Read More</span>
            <FiArrowRight />
          </Link>
        </CardLink>
      </CardLinkWraper>
    </div>
  );
}

const style = {
  card: `relative flex flex-col border-2 border-gray-200 rounded-lg bg-white`,
  cardBody: `block flex-grow flex-shrink px-2 py-1`,
  cardTitle: `font-medium text-gray-700 my-2 text-xl leading-tight line-clamp-1 overflow-hidden`,
  cardText: `text-gray-500 my-1 line-clamp-2 flex-grow`,
  cardCategory: `rounded-lg border-2 border-blue-400 bg-white py-0.5 text-sm font-bold text-blue-500 shadow text-center line-clamp-1`,
  cardLink: `inline-flex items-center text-blue-500 justify-end`,
  cardStats: `inline-flex items-center text-sm text-gray-500`,
  statsWrapper: `flex justify-between py-0.5 px-2`,
  cardLinkWrapper: `m-2 mb-4 flex justify-end`,
  cardImageWrapper: `aspect-w-3 aspect-h-2 overflow-hidden rounded-t-lg group-hover:opacity-75 lg:aspect-w-2 lg:aspect-h-1`,
};

const inlineStyle = {
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
};

function Card({ children }) {
  return (
    <div
      className={style.card}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}

function CardBody({ children }) {
  return <div className={style.cardBody}>{children}</div>;
}

function CardTitle({ children }) {
  return <div className={style.cardTitle}>{children}</div>;
}

function CardText({ children }) {
  return <div className={style.cardText}>{children}</div>;
}

function StatsWrapper({ children }) {
  return <div className={style.statsWrapper}>{children}</div>;
}

function CardLink({ children }) {
  return <div className={style.cardLink}>{children}</div>;
}

function CardStats({ children }) {
  return <div className={style.cardStats}>{children}</div>;
}

function CardCategory({ children }) {
  return <div className={style.cardCategory}>{children}</div>;
}

function CardLinkWraper({ children }) {
  return <div className={style.cardLinkWrapper}>{children}</div>;
}

function CardImageWraper({ children }) {
  return <div className={style.cardImageWrapper}>{children}</div>;
}
