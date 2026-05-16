import { useState } from "react";
import toast from "react-hot-toast";

const SERVICES_LIST = [
  "Fresher Resume Build",
  "LinkedIn Profile Setup",
  "Naukri Profile Boost",
  "Campus Combo Pack",
  "Resume Rewrite",
  "LinkedIn Optimisation",
  "Career Change Package",
  "Full Career Branding",
  "Executive Resume",
  "Other",
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "#facc15" : "none"}
      stroke="#facc15"
      strokeWidth={1.5}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !service || !review || rating === 0) {
      toast.error("Please fill all fields and select a rating.");
      return;
    }

    toast.success("Thank you! Your review has been submitted.");

    setName("");
    setService("");
    setReview("");
    setRating(0);
  };

  return (
    <section
      id="reviews"
      className="py-12 px-6 bg-gray-50 flex justify-start"
    >
      <div className="w-full max-w-xl">

        {/* FORM CARD */}
        <div
          id="review-form"
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative z-10"
        >
          <h3 className="font-bold text-lg mb-4 text-gray-900">
            Share Your Experience
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Your Name*
              </label>
              <input
                type="text"
                placeholder="e.g. Priya S."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
              />
            </div>

            {/* SERVICE */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Service*
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
              >
                <option value="">Select a service...</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* RATING */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <StarIcon filled={star <= (hover || rating)} />
                  </button>
                ))}
              </div>
            </div>

            {/* REVIEW */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Your Review
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your experience..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500 resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold text-sm py-2.5 rounded-md hover:bg-orange-600 transition"
            >
              Submit Review
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}