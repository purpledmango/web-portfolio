/* eslint-disable react/prop-types */
const PorjectInfo = ({ name, description, img, repoLink, liveLink }) => {
  return (
    <div className="grid lg:grid-cols-3 place-items-center w-full lg:h-56 m-5">
      <div className="col-span-1 ">
        <img className="object-fit bg-cover bg-center " src={img} />
      </div>
      <div className="col-span-2 text-center rounded-xl bg-[var(--card-bg)] w-full h-full flex flex-col items-center justify-center space-y-4">
        <h4 className="text-center text-xl py-3">{name}</h4>
        <p>{description}</p>
        <div className="flex gap-4 pb-2">
          <a
            href={liveLink}
            className="w-24 h-12 rounded bg-[var(--primary-light)] flex items-center justify-center"
          >
            Live Link
          </a>
          <a
            href={repoLink}
            className="w-24 h-12 rounded bg-[var(--primary-light)] flex items-center justify-center"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default PorjectInfo;
