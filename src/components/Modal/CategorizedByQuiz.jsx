import React from 'react';

const CategorizedByQuiz = ({ setShowDataBank }) => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center justify-center">
            <div className="p-8 bg-[#1a1a2e] border-none shadow-lg w-[600px] h-[500px] rounded-[20px] flex flex-col">
                <h1 className="text-[28px] font-semibold text-[#ffffff] mb-6 text-center">Choose from bank</h1>
                <div className="h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#3a3a4e] scrollbar-track-transparent">
                    <div className="flex flex-col gap-4">
                        {/* Multiple Choice Option */}
                        <button
                            onClick={() => console.log('Selected: Multiple Choice')}
                            className="flex gap-4 items-center p-4 bg-[#2a2a3e] rounded-[8px] cursor-pointer hover:bg-[#3a3a4e]"
                        >
                            <p className="text-[#ffffff] text-lg">Multiple Choice</p>
                        </button>
                        {/* Identification Option */}
                        <button
                            onClick={() => console.log('Selected: Identification')}
                            className="flex gap-4 items-center p-4 bg-[#2a2a3e] rounded-[8px] cursor-pointer hover:bg-[#3a3a4e]"
                        >
                            <p className="text-[#ffffff] text-lg">Identification</p>
                        </button>
                        {/* True or False Option */}
                        <button
                            onClick={() => console.log('Selected: True or False')}
                            className="flex gap-4 items-center p-4 bg-[#2a2a3e] rounded-[8px] cursor-pointer hover:bg-[#3a3a4e]"
                        >
                            <p className="text-[#ffffff] text-lg">True or False</p>
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 mt-6 w-full justify-center">
                    {/* Cancel Button */}
                    <button
                        onClick={() => setShowDataBank(false)} // Close the popup
                        className="w-[120px] h-[50px] border border-[#ffffff] rounded-full text-[#ffffff] font-medium text-base flex items-center justify-center hover:bg-[#2a2a3e]"
                    >
                        Cancel
                    </button>
                    {/* Done Button */}
                    <button
                        onClick={() => setShowDataBank(false)} // Close the popup
                        className="w-[120px] h-[50px] bg-[#f77f00] rounded-full text-[#ffffff] font-medium text-base flex items-center justify-center hover:bg-[#e07100]"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategorizedByQuiz;
