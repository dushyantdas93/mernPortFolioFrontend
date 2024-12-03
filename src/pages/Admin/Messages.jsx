import React, { useEffect, useState } from "react";

import { UseGet } from "../../Customhook/UseGet";
import Button from "../../components/ClosePage"

const Messages = () => {

  const [data,setData] = useState([])



  useEffect(()=>{
    
    (async()=>{
      const message = await UseGet("message/getAll")
      // console.log("message.js",message)
      setData(message?.data?.data||[]);
    })();
   
  },[])





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
              <td className="border px-4 py-2 flex gap-2 relative"> {idx + 1}
               
              </td>
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
