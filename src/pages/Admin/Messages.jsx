import React, { useEffect, useState } from "react";
import { UsePost } from "../../Customhook/UsePost";
import { UseGet } from "../../Customhook/UseGet";

const Messages = () => {

  const [data,setData] = useState([])



  useEffect(()=>{
    
    (async()=>{
      const message = await UseGet("message/getAll")
      console.log("message.js",message)
      setData(message?.data?.data||[]);
    })();
   
  },[])





  // Sample data
  // const data = [
  //   {
  //     sno: 1,
  //     name: "John Doe",
  //     email: "john@example.com",
  //     subject: "Inquiry",
  //     message: "I would like to know more about your services.",
  //     date: new Date().toLocaleDateString(),
  //   },
  //   {
  //     sno: 2,
  //     name: "Jane Smith",
  //     email: "jane@example.com",
  //     subject: "Support",
  //     message: "I need help with my account.",
  //     date: new Date().toLocaleDateString(),
  //   },
  //   {
  //     sno: 3,
  //     name: "Samuel Jackson",
  //     email: "samuel@example.com",
  //     subject: "Feedback",
  //     message: "Great experience with your platform!",
  //     date: new Date().toLocaleDateString(),
  //   },
  // ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">S.No</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row,idx) => (
            <tr key={row.sno}>
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{row.fullname}</td>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">{row.subject}</td>
              <td className="border px-4 py-2">{row.message}</td>
              <td className="border px-4 py-2">{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
