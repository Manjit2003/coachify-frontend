import React from "react";

import { Layout } from "@components";
import { StudentsTable } from "@components/Tables/Students";

const Home: React.FC = () => {
    return (
        <div>
            <Layout title="Manage Students">
                <StudentsTable></StudentsTable>
            </Layout>
        </div>
    );
};

export default Home;
