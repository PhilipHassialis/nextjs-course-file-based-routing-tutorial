import React from "react";
import { useRouter } from "next/router";
const SelectedClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h3>
                The project page for a specific project for a selected client
            </h3>
        </div>
    );
};

export default SelectedClientProjectPage;
