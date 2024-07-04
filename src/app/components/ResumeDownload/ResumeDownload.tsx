"use client";

import { useGetMyResumeQuery } from "@/redux/api/resumeApi";
import { Icon } from "@iconify/react";

const ResumeDownload = () => {
  const { data: myResume, isLoading } = useGetMyResumeQuery({});

  const downloadResume = () => {
    const filename = "Resume_of_Touhidur_Zaman.pdf";
    const a = document.createElement("a");
    a.href = myResume?.data?.url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-lg chillax font-extralight">Loading...</div>
      ) : (
        <div className="text-lg text-white flex items-center justify-center  chillax font-extralight">
          <button onClick={downloadResume}>RESUME</button>
          <Icon icon="iconoir:download" className="text-white h-7 w-7 ml-1" />
        </div>
      )}
    </div>
  );
};

export default ResumeDownload;
