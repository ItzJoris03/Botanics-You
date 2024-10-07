import React from "react";

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <main className="py-24 px-6">
        {children}
    </main>
);

export default Page;