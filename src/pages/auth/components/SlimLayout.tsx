import React from 'react';

import backgroundImage from './images/background-auth.jpg';

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-screen flex-row h-full justify-center">
        <div className="relative z-10 flex flex-col px-4 lg:px-20 py-10 justify-center w-full max-w-xl lg:max-w-2xl">
          <main className="mx-auto w-full sm:px-4">{children}</main>
        </div>
        <div className="hidden lg:relative lg:block bg-black w-full">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt="Blue background"
          />
        </div>
      </div>
    </>
  );
}
