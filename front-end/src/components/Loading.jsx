import React from 'react';

const Loading = () => {
  return (
    <div className="border shadow rounded-md p-3 w-full mx-auto">
        <div className="animate-pulse flex space-x-4 w-full">
            <div className="flex items-center gap-10 justify-between w-full">
                <div className="h-6 w-full bg-slate-200 rounded-lg col-span-2"></div>
                    
                <div className="flex gap-3">
                    <div className="h-6 w-14 rounded-md bg-slate-200 col-span-1"></div>
                    <div className="h-6 w-14 rounded-md bg-slate-200 col-span-1"></div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Loading;