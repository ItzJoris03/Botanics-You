import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0M3wwfDF8c2VhcmNofDE0fHxuYXR1cmFsJTIwcHJvZHVjdHxlbnwwfHx8fDE2OTAxMDM2MTE&ixlib=rb-1.2.1&q=80&w=1920" 
                alt="Natural Products Background" 
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold mb-6">Coming Soon</h1>
                <p className="text-2xl mb-6">We're crafting something special to share our passion for natural products.</p>
                <p className="text-lg mb-8">Stay tuned for updates from <span className="font-bold">Botanics&You</span>.</p>
                <p className="text-md my-8"><span className='text-red-500'>NOTE:</span> <span className='italic'>This is just temporarily to test the web server for</span> <span className="font-bold">Botanics&You</span>.</p>
            </div>
        </div>
    );
};

export default ComingSoon;
