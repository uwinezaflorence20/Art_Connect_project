import AboutUs from "./AboutUs";
import Team from "./Team";

const Home = () =>{
return(
  <div>
<section
    className="relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/bg.jpg')" }}
>
  <div
    className="absolute inset-0 bg-white sm:bg-transparent sm:from-white sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl mt-20 ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-bold text-orange-100 sm:text-5xl">
        Welcome to ArtConnect
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-white focus:outline-none focus:ring hover:text-orange-500 sm:w-auto"
        >
          Sign Up
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>


</section>
<AboutUs/>
<Team/>

</div>
);

};
export default Home;