import Link from "next/link";
import { Layout } from "@/components/Layout";

const FormSubmit = () => {
    return (
        <Layout>
            <section className="mt-20 flex flex-col items-center gap-6">
                <h1 className="text-4xl text-blue-500">
                    Thank you for the message!
                </h1>
                <h2 className="text-2xl text-gray-400">
                    I will get back to you as soon as possible!
                </h2>
                <div className="flex items-center justify-center mt-10">
                    <Link
                        href="/"
                        className="border-2  border-blue-500 px-10 py-2 md:px-16 md:py-3 text-base md:text-lg rounded-md text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:bg-opacity-10"
                    >
                        Go Back
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default FormSubmit;
