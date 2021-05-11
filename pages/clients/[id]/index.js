import React from "react";
import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
    const router = useRouter();
    console.log(router.query);

    const buttonHandler = () => {
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: {
                id: router.query.id,
                clientprojectid: "first-project",
            },
        });
    };

    return (
        <div>
            <h4>The projects of a given client with id {router.query.id}</h4>
            <button onClick={buttonHandler}>Load Project A</button>
        </div>
    );
};

export default ClientsProjectsPage;
