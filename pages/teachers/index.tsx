import React from "react";

import { Layout } from "@components";
import { TeachersTable } from "@components/Tables/Teachers";

const Home: React.FC = () => {
    return (
        <div>
            <Layout title="Manage Teachers">
                <TeachersTable></TeachersTable>
            </Layout>
        </div>
    );
};

export default Home;
