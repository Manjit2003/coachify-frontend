import React from "react";

import { Layout } from "@components";
import { TeachersTable } from "@components/Tables/Teachers";

const stats = [
    { name: "Total Teachers", stat: "71,897" },
    { name: "Total Classes", stat: "58.16%" },
    { name: "Total Students", stat: "24.57%" },
    { name: "Total Parents", stat: "24.57%" },
];

const Home: React.FC = () => {
    return (
        <div>
            <Layout title="Principal Dashboard">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        School overview
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.name}
                                className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
                            >
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    {item.name}
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                    {item.stat}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <TeachersTable></TeachersTable>
            </Layout>
        </div>
    );
};

export default Home;
