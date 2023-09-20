const PorjectInfo = ({name, description, img, repoLink, liveLink, index}) =>{
	
	return(
		<div className="flex flex-col lg:flex-row justify-center items-center w-6/6 md:w-5/6  mx-auto space-y-2 lg:space-x-4" index={index}>
            <div className=" p-6 bg-[var(--card-bg)] rounded-xl w-full lg:w-3/6">
              <img
                src={img}
                className="w-full object-fit rounded-xl h-42 w-full "
              />
            </div>

            <div className="p-6 flex flex-col justify-center items-center bg-[var(--card-bg)] rounded-xl w-full lg:w-2/6  h-42">
            <h3 className="font-semibold"> {name}</h3>
              <p className="text-md font-thin">
                {description}
              </p>

              <div className="flex items-center gap-4 justify-evenly mt-4">
                <button className="bg-[var(--primary-dark)] px-4 py-2 rounded transition-all hover:scale-105 hover:shadow">View On </button>
                {liveLink && (<button className="bg-[var(--primary-dark)] px-4 py-2 rounded transition-all hover:scale-105 hover:shadow">Live Link </button>)}

              </div>
            </div>
            
          </div>
		)
}

export default PorjectInfo;