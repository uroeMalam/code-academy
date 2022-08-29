import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthConfirm() {
    return (
      <div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register Successed</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Your signup successed, click this
            {" "}
            <Link 
                to="/signin" 
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Link
            </Link>
            {" "}
            to back to login page</p>
      </div>
    )
  }
