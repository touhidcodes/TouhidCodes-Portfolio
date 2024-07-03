const TechnologiesCard = ({ technology }: { technology: string[] }) => {
  return (
    <div className="mt-2 hidden lg:block">
      {technology.map((item, index) => (
        <div
          className="badge badge-outline  rounded-md p-3 font-bold text-md m-1 "
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TechnologiesCard;
