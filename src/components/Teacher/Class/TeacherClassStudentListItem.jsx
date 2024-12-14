import React, { useState } from 'react'

const TeacherClassStudentListItem = () => {
    const [removalPopUp, setRemovalPopUp] = useState(false);
    
    const removeStudent = () => {
        // remove function here
    }

    return (
        <div className="cursor-pointer w-full h-[69px] border-b-2 border-0 border-primary-3 flex items-center justify-between relative">
            <div className="h-full flex items-center gap-2">
                <img className="w-[30px] h-[30px] rounded-full object-cover object-center" src="https://placehold.co/50x50" alt="" />
                <p className="text-text-1">Adolf Niggler</p>
            </div>
            <button onClick={() => setRemovalPopUp(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path fill="#F93F3F" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-9.414 2.828-2.829 1.415 1.415L11.414 10l2.829 2.828-1.415 1.415L10 11.414l-2.828 2.829-1.415-1.415L8.586 10 5.757 7.172l1.415-1.415L10 8.586Z"/>
                </svg>
            </button>
            {removalPopUp && 
                <>
                    <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-[#00000080] z-[90]">
                        <div className="bg-primary-1 flex-col border-2 border-primary-3 w-[27rem] h-52 rounded-[10px] flex justify-center gap-4 p-4 items-center">
                            <h1 className="w-full text-center text-xl text-text-1">Are you sure you want to remove student NAME_PROP?</h1>
                            <div className="flex gap-4">
                                <button onClick={() => removeStudent()} className="w-24 p-2 rounded-[10px] text-negative border-2 border-negative">Remove</button>
                                <button onClick={() => setRemovalPopUp(false)} className="w-24 p-2 rounded-[10px] text-text-1 border-2 border-text-1">Cancel</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default TeacherClassStudentListItem