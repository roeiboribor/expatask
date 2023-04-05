import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

export default function Index({ auth, tasks }) {
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);

    const { data, setData, errors } = useForm({
        title: "",
        description: "",
        is_completed: false,
    });

    // const { tasks } = usePage().props;
    // const { items } = tasks;

    const titleInput = useRef();

    // const [values, setValues] = useState({
    //     title: "",
    //     description: "",
    //     is_completed: false,
    // });

    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setValues((values) => ({
    //         ...values,
    //         [key]: value,
    //     }));
    // }
    const handleIsCompleted = (id) => {
        const test = router.get(route("tasks.is_completed", id));
        console.log(test);
    };

    const showAddTaskModal = (e) => {
        e.preventDefault();
        setAddTaskModalVisible(true);
    };

    const closeModal = () => {
        setAddTaskModalVisible(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("tasks.store"), data);
        setAddTaskModalVisible(false);
        // task(route("task.store"));
    }

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
                                <PrimaryButton
                                    type="button"
                                    onClick={showAddTaskModal}
                                    className="ml-4 bg-green-500 hover:bg-green-600"
                                >
                                    <i className="bx bx-plus mr-2"></i>
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
                                    {tasks.map(
                                        ({
                                            id,
                                            title,
                                            description,
                                            is_completed,
                                        }) => (
                                            <tr
                                                key={id}
                                                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                                >
                                                    <input
                                                        key={id}
                                                        id={`checkbox-${id}`}
                                                        type="checkbox"
                                                        checked={
                                                            is_completed
                                                                ? "True"
                                                                : ""
                                                        }
                                                        onChange={(e) =>
                                                            handleIsCompleted(
                                                                id
                                                            )
                                                        }
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {title}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {description}
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
                                        )
                                    )}
                                    {tasks.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Modal show={addTaskModalVisible} onClose={closeModal}>
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-4">
                            <InputLabel htmlFor="title">
                                Title <span className="text-red-500">*</span>
                            </InputLabel>

                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                ref={titleInput}
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="mt-1 w-full"
                                isFocused
                                required
                                placeholder="Enter Title..."
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <InputLabel htmlFor="description">
                                Description
                                <span className="text-red-500">*</span>
                            </InputLabel>

                            <textarea
                                id="description"
                                type="text"
                                name="description"
                                required
                                errors={errors.description}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                placeholder="Enter Description..."
                                className="w-full resize-none mt-1 h-[200px] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <PrimaryButton type="submit" className="mr-3">
                                Save
                            </PrimaryButton>

                            <SecondaryButton onClick={closeModal}>
                                Cancel
                            </SecondaryButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </AuthenticatedLayout>
    );
}
