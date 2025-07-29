import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("password");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    const newArray = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(newArray);
    localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
    setForm({ site: "", username: "", password: "" });
  };

  const deletePassword = (id) => {

    setPasswordArray(passwordArray.filter(item => item.id !== id));
    localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)));
  };

  const editPassword = (id) => {
    setForm(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id));
    
  };

  const copySingleEntry = (item) => {
    const entry = `Site: ${item.site}\nUsername: ${item.username}\nPassword: ${item.password}`;
    navigator.clipboard.writeText(entry);
    alert("Copied to clipboard!");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-300 to-pink-500 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-pink-500 mb-2"> &lt; SafeKeys &gt;</h1>
      <p className="text-lg text-center text-pink-500 mb-6">Your own Password Manager</p>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">
        <input
          className="w-full border rounded px-4 py-2"
          type="text"
          name="site"
          placeholder="Website"
          value={form.site}
          onChange={handleChange}
        />
        <input
          className="w-full border rounded px-4 py-2"
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          className="w-full border rounded px-4 py-2"
          type="text"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          onClick={savePassword}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Save Password
        </button>
      </div>

      {/* Password Table */}
      <div className="mt-10 bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
        <h2 className="font-bold text-2xl py-4 px-6 text-pink-700">All Saved Passwords</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-pink-500 text-white">
              <tr>
                <th className="px-6 py-3">Website 🌐</th>
                <th className="px-6 py-3">Username 🧑‍💻</th>
                <th className="px-6 py-3">Password 🔐</th>
                <th className="px-6 py-3">Actions 🖨️</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-pink-100 hover:bg-pink-200" : "bg-white hover:bg-pink-100"}
                >
                  <td className="px-6 py-3">{item.site}</td>
                  <td className="px-6 py-3">{item.username}</td>
                  <td className="px-6 py-3">{"*".repeat(item.password.length)}</td>
                  <td className="px-6 py-3">
                    <div className="flex gap-3">
                      <button
                        onClick={() => copySingleEntry(item)}
                        className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-4 rounded-full transition duration-200"
                      >
                        📋 Copy
                      </button>
                      <button className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-4 rounded-full transition duration-200" onClick={() => { editPassword(item.id) }}>⛑️ Edit</button>
       <button className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-4 rounded-full transition duration-200" onClick={() => { deletePassword(item.id) }}>❎ Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {passwordArray.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center px-6 py-4 text-gray-400">
                    No saved passwords yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <span className="text-white">Made with ❤️ by <b>Nishant</b></span>
      </div>
    </div>
  );
};

export default Manager;
