import React from "react";
import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        { id: 1, name: "Philip" },
        { id: 2, name: "Helen" },
    ];
    return (
        <div>
            <h3>The clients page</h3>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: "/clients/[id]",
                                query: {
                                    id: client.id,
                                },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsPage;
