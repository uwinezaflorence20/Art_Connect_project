import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  return (
    <div className="rounded-lg border border-gray-200">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tel</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Message</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">john@example.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">+1234567890</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Hello, I need help with my account.</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button style={{ border: "none", background: "none", cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{ color: "red" }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
        <ol className="flex justify-end gap-1 text-xs font-medium">
          <li>
            <button
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </li>

          <li>
            <button className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
              1
            </button>
          </li>

          <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <button className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
              3
            </button>
          </li>

          <li>
            <button
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Messages;
