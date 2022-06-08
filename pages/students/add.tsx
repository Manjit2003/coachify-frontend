import React from "react";

import { Layout } from "@components";
import { useFormik } from "formik";
import { Student } from "src/types";
import { useMutation } from "react-query";
import { postStudent } from "src/queries/Students";

const Home: React.FC = () => {
    const mutation = useMutation(postStudent, {
        onSuccess: () => {
            alert("Student successfully added!");
        },
    });

    const form = useFormik<Partial<Student>>({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            gender: "male",
            phone: "",
            parent: {
                firstname: "",
                lastname: "",
                email: "",
                address: "",
                gender: "male",
                phone: "",
            },
        },
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });

    return (
        <div>
            <Layout title="Add new student" back>
                <div className="mt-10 sm:mt-10">
                    <div className="">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={form.handleSubmit}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="sm:flex-auto p-4">
                                        <h1 className="text-xl font-semibold text-gray-900">
                                            Student
                                        </h1>
                                        <p className="mt-2 text-sm text-gray-700">
                                            Data of the student
                                        </p>
                                    </div>
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
                                                    autoComplete="name-of-student"
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
                                    <div className="sm:flex-auto p-4">
                                        <h1 className="text-xl font-semibold text-gray-900">
                                            Parent Data
                                        </h1>
                                        <p className="mt-2 text-sm text-gray-700">
                                            Data of parent of students
                                        </p>
                                    </div>
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
                                                    name="parent.firstname"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={
                                                        form.values.parent
                                                            ?.firstname
                                                    }
                                                    id="parent-first-name"
                                                    autoComplete="first-name"
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
                                                    name="parent.lastname"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={
                                                        form.values.parent
                                                            ?.lastname
                                                    }
                                                    id="parent-last-name"
                                                    autoComplete="last-name"
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
                                                    name="parent.email"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={
                                                        form.values.parent
                                                            ?.email
                                                    }
                                                    id="parent-email-address"
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
                                                    name="parent.phone"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    value={
                                                        form.values.parent
                                                            ?.phone
                                                    }
                                                    id="parent-phone"
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
                                                            name="parent.gender"
                                                            onChange={
                                                                form.handleChange
                                                            }
                                                            onBlur={
                                                                form.handleBlur
                                                            }
                                                            value={
                                                                form.values
                                                                    .parent
                                                                    ?.gender
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
                                                        name="parent.address"
                                                        id="parent-address-field"
                                                        onChange={
                                                            form.handleChange
                                                        }
                                                        onBlur={form.handleBlur}
                                                        value={
                                                            form.values.parent
                                                                ?.address
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
