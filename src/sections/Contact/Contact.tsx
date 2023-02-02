/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useForm, ValidationError } from "@formspree/react";
import { Heading } from "@/components/Heading";

const Contact: FC = () => {
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_API_KEY || ""
    );
    if (state.succeeded) {
        // Redirect to success page
        return <p>Thanks for joining!</p>;
    }

    return (
        <section id="contact" className="mt-10 pt-20">
            <Heading>Get In Touch</Heading>
            <p className="mt-8 text-gray-400 text-base md:text-lg">
                My Inbox is always open for new ideas and exciting discussions.
                If you have some exciting project in mind, or just want to chat,
                get in touch with me here...
            </p>
            {/* TODO: add pjone and email */}
            <div className="relative flex items-center justify-between flex-col md:flex-row gap-6 mt-10">
                <div className="w-full relative flex-1">
                    <Map
                        mapboxAccessToken={
                            process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN
                        }
                        initialViewState={{
                            longitude: 88.3639,
                            latitude: 22.5726,
                            zoom: 6,
                        }}
                        style={{ width: "100%", height: 500 }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    >
                        <Marker longitude={88.3639} latitude={22.5726} />
                    </Map>
                </div>
                <div className="flex-1 w-full mt-10 md:mt-0">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl ">Contact Me</h2>
                        <div className="relative mt-8">
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="Full name"
                                className="peer w-full rounded-md border-2 border-gray-400 px-3 py-2.5 shadow-lg placeholder:text-transparent focus:border-blue-500 focus:outline-none bg-transparent"
                                autoComplete="off"
                            />
                            <label
                                htmlFor="fullName"
                                className="pointer-events-none absolute -top-4 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-500 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-blue-500"
                            >
                                Full name
                            </label>
                            <ValidationError
                                prefix="Full Name"
                                field="fullName"
                                errors={state.errors}
                            />
                        </div>
                        <div className="relative mt-8">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                className="peer w-full rounded-md border-2 border-gray-400 px-3 py-2.5 shadow-lg placeholder:text-transparent focus:border-blue-500 focus:outline-none bg-transparent"
                                autoComplete="off"
                            />
                            <label
                                htmlFor="email"
                                className="pointer-events-none absolute -top-4 left-0 origin-left -translate-y-1/2 transform text-sm text-blue-500 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-blue-500"
                            >
                                Email Address
                            </label>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="relative mt-8">
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                rows={4}
                                className="peer w-full rounded-md border-2 border-gray-400 px-3 py-2.5 shadow-lg placeholder:text-transparent focus:border-blue-500 focus:outline-none bg-transparent"
                                autoComplete="off"
                            />
                            <label
                                htmlFor="message"
                                className="pointer-events-none absolute -top-4 left-0 origin-left -translate-y-1/2 transform text-sm text-blue-500 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/4 peer-placeholder-shown:pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-blue-500"
                            >
                                Your Message
                            </label>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                className="border-2 border-blue-500 px-10 py-2 md:px-16 md:py-3 text-base md:text-lg rounded-md text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:bg-opacity-10"
                                type="submit"
                                disabled={state.submitting}
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
