const Team = () => {
  
return(
<section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Meet the team behind all of this
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote className="rounded-lg bg-orange-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="/team1.jpg"
            className="size-24 rounded-full object-cover"
          />

          <div>
            <p className="mt-0.5 text-lg font-medium  text-[#191047]">Florence Uwineza</p>
          </div>
        </div>

        <p className="mt-4  text-[#191047]">
          University of Rwanda student at college of science and technology college of science and technology. Attending bachelor degree in computer science year 3.
          passionate in web designing and AI. 
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-orange-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="/ephron.jpg"
            className="size-24 rounded-full object-cover"
          />

          <div>
            <p className="mt-0.5 text-lg font-medium  text-[#191047]">Tuyishime Ephron</p>
          </div>
        </div>

        <p className="mt-4  text-[#191047]">
        University of Rwanda student at college of science and technology college of science and technology. Attending bachelor degree in computer science year 3.
        passionate in web designing and AI. 
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-orange-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="/team1.jpg"
            className="size-24 rounded-full object-cover"
          />

          <div>
            <p className="mt-0.5 text-lg font-medium text-[#191047]">Icyeza Ngabo christal</p>
          </div>
        </div>

        <p className="mt-4 text-[#191047]">
        University of Rwanda student at college of science and technology college of science and technology. Attending bachelor degree in computer science year 3.
        passionate in web designing and AI. 
        </p>
      </blockquote>

    </div>
  </div>
</section>
);
};

export default Team;
