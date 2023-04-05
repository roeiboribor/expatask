import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tasks
                </h2>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div className="flex justify-between mb-4 px-4">
                            <div>
                                <h3 className="font-bold text-2xl">Tasks</h3>
                            </div>
                            <div>
                                <PrimaryButton className="ml-4 bg-green-500 hover:bg-green-600">
                                    <i class="bx bx-plus mr-2"></i>
                                    <span>Add</span>
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center"
                                        >
                                            Completed
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                        >
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Title
                                        </th>
                                        <td className="px-6 py-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Rem,
                                            sunt.
                                        </td>
                                        <td className="px-6 py-4 flex space-x-2">
                                            <SecondaryButton
                                                type="button"
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                Edit
                                            </SecondaryButton>
                                            <SecondaryButton
                                                type="button"
                                                className="font-medium text-red-600 hover:underline"
                                            >
                                                Delete
                                            </SecondaryButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
