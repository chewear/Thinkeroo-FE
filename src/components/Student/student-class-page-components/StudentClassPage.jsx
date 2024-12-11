import React, { useState } from 'react';
import { ListFilter, Plus, Copy, UsersRound } from 'lucide-react';
import StudentSearchField from '../student-basic-components/StudentSearchField';
import { initialClassData } from '../student-basic-components/MockStudentData';
import StudentJoinClassModal from '../student-basic-components/student-modal-components/StudentJoinClassModal';
import StudentFilterModal from '../student-basic-components/student-modal-components/StudentFilterModal';
import { useNavigate } from 'react-router-dom'; 

const StudentClassPage = () => {
  const [filteredClassData, setFilteredClassData] = useState(initialClassData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (query) => {
    const filteredData = initialClassData.filter((classItem) =>
      (classItem.subject?.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredClassData(filteredData); 
  };

  const handleCopy = (classCode) => {
    navigator.clipboard.writeText(classCode)
      .then(() => {
        // Optionally, you can show some feedback like an alert or change the button text
        alert('Class code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy class code: ', err);
      });
  };

  const handleClassClick = (classId) => {
    console.log(`Class clicked: ${classId}`);
    // Add your navigation logic here, e.g.:
    // navigate(`/class/${classId}`);
  };

  const handleJoinClass = () => {
    setIsModalOpen(true); 
  };

  const handleJoin = () => {
    // Handle joining logic here, like sending class code to backend or storing in state
    console.log("Joined the class!");
    setIsModalOpen(false); 
  };

  const toggleModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const closeModal = () => {
    setIsFilterModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary-1 text-text-1 font-lexend">
      <div className="flex-1 p-4 md:p-6">
        <div className="sticky top-0 z-50 mb-6">
          <StudentSearchField onChange={handleSearchChange} />
        </div>
        <div className="flex bg-primary-1 justify-between border-b-2 py-4 border-primary-3 items-center font-lexend sticky top-24 z-50">
          <button onClick={toggleModal}
            className="border-2 border-text-1 text-text-1 px-4 py-2 rounded-xl flex items-center hover:opacity-75">
            <ListFilter className="mr-2" />
            Filter
          </button>
          <button
            className="bg-accent-1 text-primary-1 font-semibold hover:bg-accent-2 px-4 py-2 rounded-full flex items-center"
            onClick={handleJoinClass}
          >
            <Plus className="mr-2" /> Join Class
          </button>
        </div>

        {/* Modal for filters */}
        {isFilterModalOpen && (
          <StudentFilterModal
            sortOptions={[
              { value: 'ascending', label: 'Ascending' },
              { value: 'descending', label: 'Descending' },
            ]}
            filterOptions={[
              { value: 'dateAccomplished', label: 'Date Accomplished' },
              { value: 'name', label: 'Name' },
              { value: 'createdOn', label: 'Created On' },
            ]}
            closeModal={closeModal} 
          />
        )}

        {/* Cards */}
        <div className="flex flex-wrap mt-20 gap-6">
          {filteredClassData.map((classItem, index) => (
            <div
              key={index}
              className="border-2 border-primary-3 rounded-xl w-[285.2px] h-[357.73px] cursor-pointer hover:bg-primary-3 focus:outline-none"
              onClick={() => handleClassClick(classItem.classId)} 
            >
              <img
                alt={`${classItem.subject} Illustration`}
                className="rounded-t-lg mb-4"
                height="50"
                src={classItem.classImg}
                width="300"
              />
              <div className="flex justify-between items-center mb-2 px-4">
                <h2 className="text-lg font-bold truncate">{classItem.subject}</h2>
              </div>
              <div className="flex justify-between items-center text-text-2 text-sm pt-20">
                <div className="flex items-center pl-4">
                  <UsersRound size={20} className="mr-2" /> {classItem.students.length}
                </div>
                <div className="flex items-center flex-shrink-0 pr-4">
                  <span className="mr-2">{classItem.classCode}</span>
                  <button onClick={() => handleCopy(classItem.classCode)}><Copy size={20} className="ml-2 hover:text-text-1" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StudentJoinClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        onJoin={handleJoin}  
        modalTitle="Join Class"
        bttnName="Join"
      />
    </div>
  );
};

export default StudentClassPage;