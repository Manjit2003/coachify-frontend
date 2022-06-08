import React from "react";

import { Layout } from "@components";
import { TeachersTable } from "@components/Tables/Teachers";
import { useFormik } from "formik";
import { Teacher } from "src/types";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { postTeacher } from "src/queries/Teachers";

const Home: React.FC = () => {
    const mutation = useMutation(postTeacher, {
        onSuccess: () => {
            alert("Teacher successfully added!");
        },
    });

    const form = useFormik<Partial<Teacher>>({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            gender: "female",
            phone: "",
        },
        onSubmit: (values) => {
            mutation.mutate(values);
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string(),
            lastname: Yup.string(),
            email: Yup.string(),
            address: Yup.string(),
            gender: Yup.string(),
            phone: Yup.string(),
        }),
    });

    return (
        <div>
            <Layout title="Add new teacher" back>
                <div className="mt-10 sm:mt-10">
                    <div className="">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={form.handleSubmit}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={
                                                        form.values.firstname
                                                    }
                                                    id="first-name"
                                                    autoComplete="name-of-teacher"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={form.values.lastname}
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="email-address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={form.values.email}
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Phone number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={form.values.phone}
                                                    id="phone"
                                                    autoComplete="family-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-3">
                                                <div className="sm:col-span-3">
                                                    <label
                                                        htmlFor="gender"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Gender
                                                    </label>
                                                    <div className="mt-1">
                                                        <select
                                                            id="gender"
                                                            name="gender"
                                                            onChange={
                                                                form.handleChange
                                                            }
                                                            onBlur={
                                                                form.handleBlur
                                                            }
                                                            value={
                                                                form.values
                                                                    .gender
                                                            }
                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        >
                                                            <option
                                                                value={"male"}
                                                            >
                                                                Male
                                                            </option>
                                                            <option
                                                                value={"female"}
                                                            >
                                                                Female
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="comment"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Address
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        rows={4}
                                                        name="address"
                                                        id="address-field"
                                                        onChange={
                                                            form.handleChange
                                                        }
                                                        onBlur={form.handleBlur}
                                                        value={
                                                            form.values.address
                                                        }
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
