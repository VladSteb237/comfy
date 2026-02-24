import Image from "next/image";

export default function OurTeamPage() {
  const team = [
    {
      name: "Alex Carter",
      role: "Founder & Product Designer",
      image: "/images/alex.png",
    },
    {
      name: "Sofia Martinez",
      role: "Lead Engineer",
      image: "/images/sofia.png",
    },
    {
      name: "Daniel Kim",
      role: "Marketing & Strategy",
      image: "/images/daniel.png",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Our Team
        </h1>
        <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          We’re a small group of designers, engineers, and thinkers building
          thoughtful digital products.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-16 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center space-y-6">
              <div className="mx-auto w-40 h-40 relative rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-40 h-40"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-neutral-200 dark:border-neutral-800 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built with care.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            We believe in simplicity, clarity, and building products that feel
            effortless to use.
          </p>
        </div>
      </section>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////
// export default function OurTeamPage() {
//   return (
//     <div className="bg-white dark:bg-black text-black dark:text-white">
//       {/* Hero Section */}
//       <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
//         <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
//           Our Team
//         </h1>
//         <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
//           We’re a small group of designers, engineers, and thinkers building
//           thoughtful digital products.
//         </p>
//       </section>

//       {/* Team Grid */}
//       <section className="max-w-6xl mx-auto px-6 pb-24">
//         <div className="grid gap-16 md:grid-cols-3">
//           {/* Member */}
//           <div className="text-center space-y-6">
//             <div className="mx-auto w-40 h-40 rounded-full bg-neutral-100 dark:bg-neutral-800" />
//             <div>
//               <h3 className="text-xl font-medium">Alex Carter</h3>
//               <p className="text-sm text-neutral-500 dark:text-neutral-400">
//                 Founder & Product Designer
//               </p>
//             </div>
//           </div>

//           {/* Member */}
//           <div className="text-center space-y-6">
//             <div className="mx-auto w-40 h-40 rounded-full bg-neutral-100 dark:bg-neutral-800" />
//             <div>
//               <h3 className="text-xl font-medium">Sofia Martinez</h3>
//               <p className="text-sm text-neutral-500 dark:text-neutral-400">
//                 Lead Engineer
//               </p>
//             </div>
//           </div>

//           {/* Member */}
//           <div className="text-center space-y-6">
//             <div className="mx-auto w-40 h-40 rounded-full bg-neutral-100 dark:bg-neutral-800" />
//             <div>
//               <h3 className="text-xl font-medium">Daniel Kim</h3>
//               <p className="text-sm text-neutral-500 dark:text-neutral-400">
//                 Marketing & Strategy
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Closing Section */}
//       <section className="border-t border-neutral-200 dark:border-neutral-800 py-20">
//         <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
//           <h2 className="text-3xl font-semibold tracking-tight">
//             Built with care.
//           </h2>
//           <p className="text-neutral-500 dark:text-neutral-400">
//             We believe in simplicity, clarity, and building products that feel
//             effortless to use.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }
