import React from "react";
import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";

const Post = () => {
        return (
                <article className="grid grid-cols-12 gap-8">
                        <div className="grid grid-cols-12 items-center  gap-4 col-span-12">
                                <div className="col-span-9 flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                                <img src="https://i.ibb.co/ZLx08cq/random.jpg" alt="" className="w-8 rounded-full" />
                                                <span className="font-medium">Umair haque</span>
                                                <span>June 19</span>
                                        </div>
                                        <div>
                                                <h2 className="text-3xl font-bold">The Begining of the End of the world</h2>
                                        </div>
                                        <div>
                                                <p className="text-gray-600 text-xl">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet id suscipit tempora. Voluptas eos animi molestiae vitae eius libero a debitis
                                                        voluptatibus! Ipsam, inventore blanditiis odit velit doloremque neque iste distinctio id consequatur fugiat magni error minus veniam suscipit
                                                        ipsa obcaecati. Vel architecto commodi tenetur odit repellendus soluta quos quis.
                                                </p>
                                        </div>
                                </div>
                                <div>
                                        <img src="https://miro.medium.com/max/828/1*Wi9ToWPgaHoAYI0KlLgrmA.webp" alt="" className="w-80" />
                                </div>
                        </div>
                        <div className=" grid grid-cols-12 col-span-9 items-center">
                                <div className="col-span-10 flex flex-start gap-3">
                                        <span className="bg-gray-200 px-3 rounded-full text-sm">blockchain</span>
                                        <span className="text-gray-500">because you follow blockchain</span>
                                </div>
                                <div className="flex justify-between">
                                        <span title="save" className="cursor-pointer">
                                                <BsBookmark />
                                        </span>
                                        <span title="not interested" className="cursor-pointer">
                                                <IoIosRemoveCircleOutline />
                                        </span>
                                        <span title="" className="cursor-pointer">
                                                <BiDotsHorizontal />
                                        </span>
                                </div>
                        </div>
                </article>
        );
};

export default Post;
