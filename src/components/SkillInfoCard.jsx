const SkillInfoCard = ({ skillName, skillDescription, logo }) => {
  return (
    <div className="flex py-2 w-full]">
      <div className="p-2 md:p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-2xl bg-[var(--card-bg)]">
        <div className="relative h-24 w-24 bg-[var(--primary-dark)] rounded-full transition-all ease-in-out hover:scale-125">
          <div className="text-6xl absolute top-[20%] left-[20%]">{logo}</div>
        </div>
        <h3 className="text-md lg:text-lg font-semibold text-center">{skillName}</h3>
        <p className=" text-base text-center">{skillDescription}</p>
      </div>
    </div>
  );
};

export default SkillInfoCard;
