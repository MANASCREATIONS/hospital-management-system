import React from 'react'

export default function MainIntake() {
  return (
    <>
   
   <div className="flex flex-col   h-[100vh] w-full mt-16  ">
      <div className="w-full max-w-5xl mx-auto ">
        <h2 className="text-xl font-bold my-4 bg-[#D9D9D9] px-5 py-2 ">MainIntake output</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-bold text-gray-700"> ID</label>
              <input
               placeholder='Enter'
                type="text"
                name="ID"
            
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">IPD Admission ID</label>
              <input
                            placeholder='Enter'

                type="text"
                name="admissionId"
                // value={formData.admissionId}
                // onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Treatment ID</label>
              <input
              placeholder='Enter'
                type="text"
                name="dayItemId"
                // value={formData.dayItemId}
                // onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Intakeoutput Count</label>
              <input
              placeholder='Enter'
                type="text"
                name="treatmentId"
                // value={formData.treatmentId}
                // onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
           
           
            <div>
              <label className="block  text-lg font-bold text-gray-700">Cost</label>
             <input   type="text"
             placeholder='Enter'
                name="treatmentId"
                // value={formData.treatmentId}
                // onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"/>
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Paid</label>
              <select
                name="roomNo"
                // value={formData.roomNo}
                // onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="w-full">
                <label className="block  text-lg font-bold  text-gray-700">Record Date</label>
                <input
                  type="date"
                  name="createdAt"
                //   value={formData.createdAt}
                //   onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
            <div className="flex space-x-4">
              
              <div className="w-1/2">
                <label className="block  text-lg font-bold text-gray-700 mt-7"></label>
                <select
                //   value={formData.updatedAt}
                //   onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                >
                    <option>Select</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block  text-lg font-bold text-gray-700 mt-7"></label>
                <select
                //   value={formData.updatedAt}
                //   onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                >
                    <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="text-right my-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-9 rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
   
    </>
  )
}