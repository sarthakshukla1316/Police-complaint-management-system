import React from "react";
import logo from "../assets/logo.png";

const FileComplaint = () => {
    return (
        <div className="flex h-[100vh] w-[100vw] justify-center items-center bgImg">
            <section class="flex justify-center items-centre py-9 md:h-[74vh] md:w-[80vw] shadow-xl bg-[#F8F8F8] opacity-[0.9] rounded-lg ">
                <div class="px-6 h-full text-gray-800  w-full">
                    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 h-full">
                            <img
                                src={logo}
                                class="w-[60%] mx-auto"
                                alt="Police logo"
                            />
                        </div>
                        <div class=" flex xl:ml-10 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 overflow-y-auto w-full h-full">
                            <form action="">
                                <h2 className="text-4xl font-bold mb-3">
                                    File Complaint
                                </h2>
                                <p class="text-lg text-[#aca9a9] font-semibold mt-4 mb-3 pt-1">
                                    Fill In Complaint Details.
                                </p>
                                <div class="flex flex-wrap mb-6">
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-first-name"
                                        >
                                            City
                                        </label>
                                        <input
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-first-name"
                                            type="text"
                                            placeholder="City"
                                        />
                                        <p class="text-red-500 text-xs italic">
                                            Please fill out this field.
                                        </p>
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-last-name"
                                        >
                                            PIN Code
                                        </label>
                                        <input
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type={"number"}
                                            maxLength="6"
                                            placeholder="PIN Code"
                                        />
                                    </div>
                                </div>
                                <div class="flex flex-wrap mb-2">
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-state"
                                        >
                                            Police Station
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state"
                                            >
                                                {/* <option>New Mexico</option>
                                                <option>Missouri</option>
                                                <option>Texas</option> */}
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-state"
                                        >
                                            Complaint Type
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state"
                                            >
                                                {/* <option>New Mexico</option>
                                                <option>Missouri</option>
                                                <option>Texas</option> */}
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-wrap mb-2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name"
                                    >
                                        Complaint Description
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write your complaint description here..."
                                    ></textarea>
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>
                                </div>
                                <div class="flex flex-wrap mb-2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name"
                                    >
                                        Security PIN
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Security PIN"
                                    />
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>
                                </div>
                                <div class="text-center lg:text-left mb-8">
                                    <button
                                        type="button"
                                        class="w-full inline-block px-7 py-3 bg-[#174793] text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-[#16325d] hover:shadow-lg focus:bg-[#174793] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#174793] active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        File Complaint
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FileComplaint;
