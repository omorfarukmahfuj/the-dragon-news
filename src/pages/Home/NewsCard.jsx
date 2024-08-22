import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, _id, rating, total_view } = news;
  return (
    <div className="border border-[#E7E7E7] rounded mb-6">
      {/* Card Header */}
      <div className="flex justify-between bg-[#F3F3F3] p-4">
        {/* Author Info Left*/}
        <div className="flex  items-center gap-4">
          <img className="w-10 rounded-full" src={author.img} alt="author image" />
          <div>
            <h4 className="text-base font-semibold text-[#403F3F]">{author.name}</h4>
            <p className="text-sm text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>

        {/* Author Info Right*/}
        <div className="flex gap-3 text-[#706F6F]">
          <FaRegBookmark className="w-4" />
          <IoShareSocialOutline className="w-6" />
        </div>
      </div>

      <div className="p-5">
        {/* Card Body */}
        <h3 className="text-xl font-bold text-[#403F3F]">{title}</h3>
        <img className="mt-5" src={image_url} />
        {
          details.length > 200 ?
            <p className="text-base text-[#706F6F] mt-8">{details.slice(0, 250)} <Link to={`/news/${_id}`} className="text-[#f87829] font-semibold">Read More</Link></p>
            :
            <p className="text-base text-[#706F6F] mt-8">{details}</p>
        }

        {/* Card Footer */}
        <hr className="my-5" />
        <div className="flex justify-between mt-5">
          {/* Ratings */}
          <div className="flex gap-3 items-center">
            <div className="text-[#FF8C47] flex gap-2 text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-base font-medium text-[#706F6F]">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-3 text-base text-[#706F6F]">
            <FaEye />
            <p className="">{total_view}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;