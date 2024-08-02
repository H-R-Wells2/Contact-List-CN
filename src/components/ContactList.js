import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaPlus, FaSave, FaTimes, FaUser } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const ContactList = () => {
    // State to hold the list of contacts
    const [contacts, setContacts] = useState([]);

    // State for the new contact form inputs
    const [newContact, setNewContact] = useState({ name: '', email: '' });

    // State to manage which contact is being edited
    const [editingContact, setEditingContact] = useState(null);

    // Fetch contacts when component mounts
    useEffect(() => {
        fetchContacts();
    }, []);

    // Fetch contacts from the API
    const fetchContacts = async () => {
        try {
            const response = await axios.get(API_URL);
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            toast.error('Error fetching contacts');
        }
    };

    // Add a new contact
    const handleAddContact = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, newContact);
            setContacts([...contacts, response.data]);
            setNewContact({ name: '', email: '' });
            toast.success('Contact added successfully');
        } catch (error) {
            console.error('Error adding contact:', error);
            toast.error('Error adding contact');
        }
    };

    // Update an existing contact
    const handleUpdateContact = async (contact) => {
        try {
            // Simulate the PUT request (dummy call)
            // Directly update the contact in local state
            setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
            setEditingContact(null);
            toast.success('Contact updated successfully');
        } catch (error) {
            console.error('Error updating contact:', error);
            toast.error('Error updating contact');
        }
    };

    // Delete a contact
    const handleDeleteContact = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setContacts(contacts.filter(contact => contact.id !== id));
            toast.success('Contact deleted successfully');
        } catch (error) {
            console.error('Error deleting contact:', error);
            toast.error('Error deleting contact');
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            {/* Toast container for notifications */}
            <ToastContainer />

            {/* Page title */}
            <h1 className="text-3xl flex justify-center items-center gap-1 font-extrabold mb-6 text-gray-800">
                Contact List <FaUser />
            </h1>

            {/* Form to add a new contact */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-medium mb-4 text-gray-700">Add New Contact</h2>
                <form onSubmit={handleAddContact} className="flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="text"
                        value={newContact.name}
                        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                        placeholder="Name"
                        className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2"
                        required
                    />
                    <input
                        type="text"
                        value={newContact.email}
                        onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                        placeholder="Email"
                        className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2"
                        required
                    />
                    <button
                        type="submit"
                        className="flex md:w-1/4 items-center justify-center bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
                    >
                        <FaPlus className="mr-2" /> Add Contact
                    </button>
                </form>
            </div>

            {/* List of contacts */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-medium mb-4 text-gray-700">Contact List</h2>
                <ul className="space-y-4">
                    {contacts.map(contact => (
                        <li key={contact.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            {editingContact && editingContact.id === contact.id ? (
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="text"
                                            value={editingContact.name}
                                            onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
                                            className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2"
                                        />
                                        <input
                                            type="text"
                                            value={editingContact.email}
                                            onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
                                            className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => handleUpdateContact(editingContact)}
                                            className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center w-full sm:w-auto"
                                        >
                                            <FaSave className="mr-2" /> Save
                                        </button>
                                        <button
                                            onClick={() => setEditingContact(null)}
                                            className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center w-full sm:w-auto"
                                        >
                                            <FaTimes className="mr-2" /> Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <span className="text-gray-800">{contact.name} - {contact.email}</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setEditingContact(contact)}
                                            className="bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition duration-300 flex items-center"
                                        >
                                            <FaEdit className="mr-2" /> Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteContact(contact.id)}
                                            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300 flex items-center"
                                        >
                                            <FaTrashAlt className="mr-2" /> Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactList;
