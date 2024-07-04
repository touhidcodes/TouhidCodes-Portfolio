"use client";

import { useGetMyResumeQuery } from "@/redux/api/resumeApi";
import { Icon } from "@iconify/react";

const ResumeDownload = () => {
  const { data: myResume, isLoading } = useGetMyResumeQuery({});

  return (
    <div>
      {isLoading ? (
        <div className="text-lg chillax font-extralight">Loading...</div>
      ) : (
        <div className="text-lg text-white flex items-center justify-center  chillax font-extralight">
          <a href={myResume} download="Resume_of_Touhidur_Zaman.pdf">
            RESUME
          </a>
          <Icon icon="iconoir:download" className="text-white h-7 w-7 ml-1" />
        </div>
      )}
    </div>
  );
};

export default ResumeDownload;
