import Booktable from "../components/Booktable";
import { useState } from "react";

const Reservation = () => {
    const [showtable, setshowtable] = useState(false);

    return (
        <div>
            <div className="h-[300px] w-screen -mx-32">
                <img
                    className="object-cover w-full h-full"
                    src="Images/Food.jpg"
                    alt="menu"
                />
            </div>
            <p className="mt-16 text-xl font-semibold text-center text-gray-500">
                Directly select available table
            </p>
            <p className="pt-4 text-xl text-center text-red-800">
                If a seat is colored red, it indicates that the seat is
                available, and you can click to select your desired table type.
                If the seat has a faded color or is unclickable, it means that
                the seat is already reserved.
            </p>
            <p className="text-lg text-center text-gray-500">
                (Layout of hotel california)
            </p>
            {/* Tables */}
            <div className="grid justify-between grid-cols-4 gap-16 mt-16">
                {/* One Seater */}
                <div className="flex flex-col items-center text-center ">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        One Seater
                    </p>
                    <div className="flex gap-8 ">
                        <span className="inline-block p-8 mb-8 text-center bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-16 bg-gray-400 ">
                            1
                        </span>
                    </div>

                    <div className="flex gap-8">
                        <span className="inline-block p-8 mb-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-16 bg-gray-400 ">
                            1
                        </span>
                    </div>

                    <div className="flex gap-8">
                        <span className="inline-block p-8 mb-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-16 bg-red-600 ">
                            {/*  make (bg-gray-400) when disabled */}
                            1
                        </span>
                    </div>
                </div>

                {/* Two-seater */}
                <div className="flex flex-col items-center gap-8 text-center">
                    <p className="mb-4 text-xl font-semibold text-gray-700">
                        Two Seater
                    </p>
                    <span className="inline-block p-8 mx-4 bg-gray-300 rounded ">
                        -
                    </span>
                    <span className="inline-block p-16 bg-red-600 ">2</span>
                    {/*  make (bg-gray-400) when disabled */}
                    <span className="inline-block p-8 mx-4 bg-gray-300 rounded">
                        -
                    </span>
                </div>
                {/* Four Seater */}
                <div className="flex flex-col items-center gap-8">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        Four Seater
                    </p>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                    <span className="inline-block p-16 bg-gray-400">4</span>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                </div>
                {/* More Tables - for a Restaurant Layout Feel */}
                <div className="flex flex-col items-center gap-8">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        Six Seater
                    </p>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                    <span className={`px-32 py-16 inline-block bg-red-600`}>
                        {/*  make (bg-gray-400) when disabled */}6
                    </span>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                </div>

                {/* Family Seater */}
                <div className="flex flex-col items-center gap-8">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        Family Seater
                    </p>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                    <span className="inline-block px-64 py-16 bg-red-600 ">
                        {/*  make (bg-gray-400) when disabled */}8
                    </span>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                </div>
                {/* familyseaterend */}
                {/* fourseater */}
                <div className="flex flex-col items-center gap-8">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        Four Seater
                    </p>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                    <span className="inline-block p-16 bg-gray-400">4</span>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                </div>
                {/* fourseaterend */}
                <div className="flex flex-col items-center gap-8">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        Four Seater
                    </p>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                    <span className="inline-block p-16 bg-gray-400">4</span>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                </div>
                {/* fourseater2end */}

                {/* familyseateragain */}
                <div className="flex flex-col items-center gap-8">
                    <p className="mb-4 text-xl font-semibold text-gray-700 ">
                        Family Seater
                    </p>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                    <span className="inline-block px-64 py-16 bg-red-600 ">
                        {/*  make (bg-gray-400) when disabled */}8
                    </span>
                    <div className="flex flex-row gap-4">
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                        <span className="inline-block p-8 bg-gray-300 rounded">
                            -
                        </span>
                    </div>
                </div>
                {/* familyseater2end */}
            </div>
            {/* Book Table Button */}
            <div className="flex justify-center mt-16">
                {/* onClick={()=>navigate('/booktable')} : this is how to navigate onclick for pages */}
                <button
                    onClick={() => {
                        setshowtable(true);
                    }}
                    className="animated-button-secondary"
                >
                    Book Your Table Now
                </button>
            </div>
            {showtable && <Booktable />}

        </div>
    );
};

export default Reservation;
