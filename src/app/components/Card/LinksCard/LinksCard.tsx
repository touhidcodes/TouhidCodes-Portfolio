import { Icon } from "@iconify/react";

type TLinksCardProps = {
  id: string;
  liveSite: string | null | undefined;
  clientSide: string | null | undefined;
  serverSide: string | null | undefined;
};

const LinksCard = ({
  id,
  liveSite,
  clientSide,
  serverSide,
}: TLinksCardProps) => {
  return (
    <div className="flex items-center justify-between mt-2">
      {liveSite && (
        <div className="flex items-center mr-3">
          <div className="rounded-full h-7 w-7 bg-black opacity-50 flex justify-center items-center">
            <Icon icon="gg:website" className=" text-white h-5 w-5" />
          </div>
          <a
            href={liveSite}
            className="link lg:text-xl ml-2 hover:underline no-underline"
            target="_blank"
          >
            Live
          </a>
        </div>
      )}
      {clientSide && (
        <div className="flex items-center mr-3">
          <div className="rounded-full h-7 w-7 bg-black opacity-50 flex justify-center items-center">
            <Icon icon="mingcute:github-fill" className=" text-white h-5 w-5" />
          </div>
          <a
            href={clientSide}
            className=" link lg:text-xl ml-2 hover:underline no-underline"
            target="_blank"
          >
            Client
          </a>
        </div>
      )}
      {serverSide && (
        <div className="flex items-center mr-3">
          <div className="rounded-full h-7 w-7 bg-black opacity-50 flex justify-center items-center">
            <Icon icon="mingcute:github-fill" className=" text-white h-5 w-5" />
          </div>
          <a
            href={serverSide}
            className=" link lg:text-xl ml-2 hover:underline no-underline"
            target="_blank"
          >
            Server
          </a>
        </div>
      )}
      <div className="flex items-center">
        <div className="rounded-full h-7 w-7 bg-black opacity-50 flex justify-center items-center">
          <Icon
            icon="solar:arrow-right-up-linear"
            className="text-white h-5 w-5"
          />
        </div>
        <button className=" link lg:text-xl ml-2 hover:underline no-underline">
          Explore
        </button>
      </div>
    </div>
  );
};

export default LinksCard;
