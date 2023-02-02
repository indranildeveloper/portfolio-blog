import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import { Layout } from "@/components/Layout";

const NotFoundPage = () => {
    return (
        <Layout>
            <section>
                <h1 className="flex items-center justify-center text-blue-500 gap-6 mt-20 text-4xl md:text-6xl font-bold">
                    <FaExclamationTriangle />
                    404 Not Found!
                </h1>

                <p className="text-center mt-10 text-lg md:text-2xl text-gray-400">
                    Sorry! The page you are finding do not exists!
                </p>

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

export default NotFoundPage;
