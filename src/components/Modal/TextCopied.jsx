import React from 'react';

const TextCopied = ({ setShowRemoveConfirmation, onConfirm }) => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center justify-center">
            <div className="p-6 bg-[#1a1a2e] border-none shadow-lg w-[400px] rounded-[10px]">
                <h1 className="text-[24px] font-semibold text-[#ffffff] mb-4 text-center">Text Copied</h1>
            </div>
        </div>
    );
};

export default TextCopied;
