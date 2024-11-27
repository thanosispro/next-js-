import React from 'react'

const About = () => {
  return (
    <section className="">
    <div className="py-12 bg-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
                <h2
                    className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    Why choose us?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-300 sm:text-4xl">
                    We know UX User Experience
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                   KrypGame is full focused on free fast sevices .. No ads  and other irritating stff
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-200">Fast Service</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            All the links of game are directly connected to mediafire.com .. So it is very easy to download
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-200">Easy to integrate
                                SDK
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> It is very easy to integrate
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-200">Everything for free
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Now you dont have to pay any money on finding game scripts and mods..
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-200">Flexibility
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Many games are there . and we will add more games on public demands ...
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
  )
}

export default About
