import Booked from "./Booked";
import  { useState } from "react";

const Booktable = () => {
    const [setdone, setshowdone] = useState(false);

    return (
        // section
        <div className="flex bg-[#f9f5f0] w-1/2 mx-auto p-8 shadow-2xl rounded-lg mt-8">
            {/* section1 */}
            <div className="flex flex-col w-1/2 gap-8 p-4">
                <div>
                    <p className="text-2xl font-bold text-gray-800">
                        Hotel California
                    </p>
                    <p className="pt-4 text-justify text-gray-700 text-md">
                        Reservations in our restaurant are available up to 30
                        days in advance for parties up to 8 guests. Guests up to
                        4 or fewer can also book online or through phone.
                    </p>
                </div>
                <p className="text-xl font-bold text-gray-800">Book Now</p>
                <div className="flex flex-col gap-8">
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-400 rounded"
                        placeholder="Full Name"
                    />
                    <input
                        type="text"
                        className="p-2 border border-gray-400 rounded"
                        placeholder="Phone Number"
                    />
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-400 rounded"
                        placeholder="Address"
                    />
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-400 rounded"
                        placeholder="Family Size"
                    />
                    <label className="">
                        Date :
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-400 rounded"
                        />
                    </label>
                    <label className="">
                        Time :
                        <input
                            type="time"
                            className="w-full p-2 border border-gray-400 rounded"
                        />
                    </label>
                    <label className="" htmlFor="long-text">
                        Tell us more (optional) :
                        <textarea
                            id="long-text"
                            rows="5" // Number of visible rows
                            className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message here..."
                        />
                    </label>
                </div>
            </div>
            {/* bordersection */}
            <div className="mx-4 border-l-4 border-red-500 border-dashed"></div>
            {/* section2 */}
            <div className="flex flex-col w-1/2 gap-8 p-4">
                <div className="text-xl font-bold text-gray-800">Hours</div>
                <div>
                    <p className="text-xl font-semibold text-gray-700">
                        Breakfast
                    </p>
                    <p className="text-lg font-medium text-red-600">
                        Monday - Friday: 7:30 am - 10:00 am
                    </p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-gray-700">Lunch</p>
                    <p className="text-lg font-medium text-red-600">
                        Monday - Friday: 12:00 pm - 2:00 pm
                    </p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-gray-700">
                        Dinner
                    </p>
                    <p className="text-lg font-medium text-red-600">
                        Sunday - Wednesday: 5:30 pm - 10:00 pm
                    </p>
                    <p className="text-lg font-medium text-red-600">
                        Thursday - Saturday: 5:30 pm - 10:30 pm
                    </p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-gray-700">
                        Weekend Brunch
                    </p>
                    <p className="text-lg font-medium text-red-600">
                        Saturday - Sunday: 10:00 am - 2:30 pm
                    </p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-gray-700">Bar</p>
                    <p className="text-lg font-medium text-red-600">
                        Bar is open daily until 11:00 pm on weekends, serving
                        food and drinks continuosly. No reservations- just walk
                        in.
                    </p>
                </div>
                <button
                    className="animated-button-secondary"
                    onClick={() => {
                        setshowdone(true);
                    }}
                >
                    Reserve Now
                </button>
            </div>
            {/* endtotalsection */}
            {setdone && <Booked />}
        </div>
    );
};

export default Booktable;
