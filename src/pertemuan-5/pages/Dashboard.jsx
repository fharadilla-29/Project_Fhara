const summaryCards = [
  {
    title: "Teachers",
    total: "15",
    img: "/img/Destinasi-1.jpg",
    bg: "from-lime-500 to-lime-400",
  },
  {
    title: "Students",
    total: "1600",
    img: "/img/Destinasi-2.jpg",
    bg: "from-violet-500 to-violet-400",
  },
  {
    title: "Classes",
    total: "10",
    img: "/img/Destinasi-3.jpg",
    bg: "from-amber-400 to-orange-300",
  },
  {
    title: "Subjects",
    total: "10",
    img: "/img/Destinasi-4.jpg",
    bg: "from-rose-400 to-pink-300",
  },
  {
    title: "Attendance",
    total: "80%",
    img: "/img/Destinasi-5.jpg",
    bg: "from-red-400 to-red-300",
  },
  {
    title: "Admins",
    total: "15",
    img: "/img/Destinasi-6.jpg",
    bg: "from-yellow-400 to-amber-300",
  },
  {
    title: "Department",
    total: "10",
    img: "/img/bukber.webp",
    bg: "from-blue-500 to-indigo-400",
  },
  {
    title: "Grading",
    total: "15",
    img: "/img/fhara.jpeg",
    bg: "from-cyan-500 to-teal-400",
  },
];

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="min-h-screen bg-gray-100">
      <div className="border-b border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center justify-between">
          <p className="text-lg text-gray-600">
            You're Logged as Administrator.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="/img/fhara.jpeg"
              alt="Admin"
              className="h-9 w-9 rounded-full border border-gray-200 object-cover"
            />
            <span className="font-medium text-gray-700">John Deo</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Admin dashboard
        </h2>

        <div
          id="dashboard-grid"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-lg bg-linear-to-r ${card.bg} p-4 text-white shadow-md`}
            >
              <div className="flex items-start justify-between gap-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-14 w-14 rounded-md border border-white/40 object-cover"
                />
                <div className="text-right">
                  <p className="text-sm opacity-90">Total</p>
                  <p className="text-4xl font-bold leading-none">
                    {card.total}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium">{card.title}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-8 text-3xl font-medium text-gray-700">
          Analytic the overall performance
        </h3>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <img
              src="/img/bukber.webp"
              alt="Bar chart overview"
              className="h-56 w-full rounded-lg object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <img
              src="/img/Destinasi-6.jpg"
              alt="Line chart overview"
              className="h-56 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
