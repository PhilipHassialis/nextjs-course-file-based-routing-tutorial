import React from "react";
import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h4>The projects of a given client ({router.query.id})</h4>
        </div>
    );
};

export default ClientsProjectsPage;
