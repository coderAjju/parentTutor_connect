import { useState } from "react";

const UpdateParentProfileModal = ({ parentData, setProfile, setEditing }) => {
  const [parent, setParent] = useState(parentData);

  // Handle input changes for parent details
  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setParent({ ...parent, [name]: value });
  };

  // Handle input changes for child details
  const handleChildChange = (index, e) => {
    const { name, value } = e.target;
    const updatedChildren = [...parent.children];
    updatedChildren[index][name] = value;
    setParent({ ...parent, children: updatedChildren });
  };

  // Handle subject interests
  const handleSubjectChange = (index, e) => {
    const { value } = e.target;
    const updatedChildren = [...parent.children];
    updatedChildren[index].subjectInterests = value; // Store raw string input
    setParent({ ...parent, children: updatedChildren });
  };

  // Add a new child
  const addChild = () => {
    setParent({
      ...parent,
      children: [
        ...parent.children,
        { name: "", age: "", grade: "", subjectInterests: [] },
      ],
    });
  };

  // Remove a child
  const removeChild = (index) => {
    const updatedChildren = parent.children.filter((_, i) => i !== index);
    setParent({ ...parent, children: updatedChildren });
  };
  const handleUpdateBtn = () => {
    setEditing((prev) => !prev);
    setProfile(parent);
  };

  return (
    <div className="w-[80vw] mx-auto my-10 bg-gray-900 p-8 rounded-2xl">
      {/* Parent Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={parent.fullName}
            onChange={handleParentChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={parent.email}
            onChange={handleParentChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={parent.phoneNumber}
            onChange={handleParentChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={parent.password}
            onChange={handleParentChange}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            required
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white mt-6">
        Children Details
      </h3>

      {parent.children.map((child, index) => (
        <div className="flex gap-5" key={child.id}>
          <div key={index} className="bg-gray-700 w-full p-4 rounded-lg mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm">Child's Name</label>
                <input
                  type="text"
                  name="name"
                  value={child.name}
                  onChange={(e) => handleChildChange(index, e)}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm">Age</label>
                <input
                  type="number"
                  name="age"
                  value={child.age}
                  onChange={(e) => handleChildChange(index, e)}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm">Grade</label>
                <input
                  type="text"
                  name="grade"
                  value={child.grade}
                  onChange={(e) => handleChildChange(index, e)}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-sm">
                Subject Interests (comma separated)
              </label>
              <input
                type="text"
                name="subjectInterests"
                value={child.subjectInterests} // Store raw string
                onChange={(e) => handleSubjectChange(index, e)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                required
              />
            </div>

            <div className="mt-4 text-right">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeChild(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Remove Child
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="text-end mt-4">
        <button
          type="button"
          onClick={addChild}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Add Another Child
        </button>
      </div>

      <div className="flex gap-5 items-center">
        <button
          type="submit"
          onClick={handleUpdateBtn}
          className="p-3 px-5 bg-green-600 rounded-lg"
        >
          Update
        </button>
        <button
          onClick={() => setEditing((prev) => !prev)}
          className="p-3 px-5 bg-red-700 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UpdateParentProfileModal;
