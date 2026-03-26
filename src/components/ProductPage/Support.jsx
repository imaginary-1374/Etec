import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { toast, Bounce } from "react-toastify";
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  textarea: z
    .string()
    .min(10, "Please provide a bit more detail (min 10 chars)"),
});

export default function Support({ setOpenSection }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const sub = (data) => {
    console.log("Valid Data:", data);
    reset();
    setOpenSection(null);
    toast.success("Submit successful!", {
      transition: Bounce,
      theme: "light",
    });
  };

  return (
    <div className="md:flex items-center justify-center inset-0 md:h-screen md:w-full bg-black/80 z-[60] fixed p-4">
      <form
        className="fixed inset-0 md:static h-screen w-full md:h-auto md:max-w-2xl bg-white rounded-xl p-8 shadow-2xl"
        onSubmit={handleSubmit(sub)}
      >
        <div className="flex justify-between text-stone-700 border-b pb-4">
          <div className="flex items-center gap-2">
            <RiCustomerServiceLine size={25} />
            <p className="text-xl font-semibold uppercase">Support</p>
          </div>
          <button type="button" onClick={() => setOpenSection(null)}>
            <FaXmark size={25} className="hover:text-stone-900" />
          </button>
        </div>

        <div className="flex gap-4 md:flex-row flex-col mt-6">
          {/* Name Field */}
          <div className="w-full">
            <input
              {...register("name")}
              className={`w-full p-4 bg-stone-100 rounded-lg outline-none border transition-all ${
                errors.name
                  ? "border-red-500"
                  : "border-transparent focus:border-stone-300"
              }`}
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full">
            <input
              {...register("email")}
              className={`w-full p-4 bg-stone-100 rounded-lg outline-none border transition-all ${
                errors.email
                  ? "border-red-500"
                  : "border-transparent focus:border-stone-300"
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="mt-6 flex-1 flex flex-col">
          <textarea
            {...register("textarea")}
            className={`w-full h-40 p-4 bg-stone-100 rounded-lg outline-none border transition-all resize-none ${
              errors.textarea
                ? "border-red-500"
                : "border-transparent focus:border-stone-300"
            }`}
            placeholder="How can we help?"
          />
          {errors.textarea && (
            <p className="text-red-500 text-xs mt-1">
              {errors.textarea.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl shadow-lg hover:bg-stone-800 active:scale-95 transition-all mt-6"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
