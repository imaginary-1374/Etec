import { useState } from "react";

export default function Sub() {
  const [email, setemail] = useState('')

  return (
    <div className="flex flex-col items-center  px-2 py-12 gap-8 m-32 bg-stone-100 rounded-3xl w-full">
      <div className="flex flex-col gap-4 text-center ">
        <h1 className="first-letter:uppercase text-4xl font-thin">
          Subscribe to our email newsletter and get 15% off
        </h1>
        <p className="first-letter:uppercase text-xs">
          Be the first to know about the latest in tech trends, exclusive
          offers, and exciting product launches by subscribing to our
          newsletter.
        </p>
      </div>
      <div
        className="flex flex-col justify-center gap-4 p-4 w-full 
                   md:flex-row"
      >
        <label className="hidden">enter email to subscribe</label>
        <input
          name="sub_input"
          className="bg-white grow px-4 py-4 rounded-full border border-stone-200 placeholder:self-start
                     md:max-w-[50%]"
          type="text"
          placeholder="Your email address"
          value={email}
          onChange={e => setemail(e.target.value)}
        />
        <button className="first-letter:uppercase p-4 bg-black text-white rounded-full cursor-pointer">
          subscribe
        </button>
      </div>
    </div>
  );
}
