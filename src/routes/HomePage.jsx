import SearchBar from "../components/SearchBar";

function HomePage() {
    return (
        <div className="flex flex-col lg:flex-row h-full">
            <div className="flex-3 flex flex-col justify-center gap-12 pr-24 lg:pr-12 md:pr-0 sm:pl-6 sm:gap-8 sm:px-4">
                <div className="space-y-6 sm:text-center">
                    <h1 className="text-4xl lg:text-3xl sm:text-2xl font-bold">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className="text-base sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                        explicabo suscipit cum eius, iure est nulla animi consequatur
                        facilis id pariatur fugit quos laudantium temporibus dolor ea
                        repellat provident impedit!
                    </p>
                </div>

                <SearchBar />

                <div className="flex justify-between sm:flex-col sm:items-center sm:text-center sm:gap-6 sm:hidden">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl lg:text-3xl">5+</h1>
                        <h2 className="text-lg font-light">Years of Experience</h2>
                    </div>
                    {/*<div className="flex flex-col items-center text-center">*/}
                    {/*    <h1 className="text-4xl lg:text-3xl">200</h1>*/}
                    {/*    <h2 className="text-lg font-light">Award Gained</h2>*/}
                    {/*</div>*/}
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl lg:text-3xl">2000+</h1>
                        <h2 className="text-lg font-light">Property Ready</h2>
                    </div>
                </div>
            </div>

            <div className="flex-2 bg-[#fcf5f3] relative hidden md:flex items-center justify-center">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="absolute right-0 w-[115%] lg:w-[105%] object-cover"
                />
            </div>
        </div>
    );
}

export default HomePage;
