import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Register Page',
  description: 'Register Page',
}

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-semibold p-4">Register Page</h1>
        <form className="grid gap-4 p-4">
        <label className="text-white">First name</label>
          <input type="email" className="bg-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:bg-gray-600" />
          <label className="text-white">Last name</label>
          <input type="email" className="bg-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:bg-gray-600" />
          <label className="text-white">Password</label>
          <input type="password" className="bg-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:bg-gray-600" />
          <label className="text-white">Confirm Password</label>
          <input type="password" className="bg-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:bg-gray-600" />
        </form>
        <div className="flex justify-end pr-4">
          <Link href="/login" className="text-blue-500 underline items-center">Already having an account?</Link>
        </div>
      </div>
    </div>
  );
}
