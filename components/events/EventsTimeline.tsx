// "use client";

// import { useState } from "react";

// export default function EventsTimeline() {
//     const [filter, setFilter] = useState("all");

//     const events = [
//         {
//             id: 1,
//             date: "March 15-17, 2026",
//             title: "Annual Kula Festival",
//             type: "Cultural",
//             description:
//                 "Celebration of pastoral heritage featuring cattle showcases, Oggu Katha performances, traditional food, and community rituals.",
//             location: "Multiple Hattis, Karnataka",
//             status: "past",
//         },
//         {
//             id: 2,
//             date: "April 22, 2026",
//             title: "Hatti Infrastructure Drive Launch",
//             type: "Development",
//             description:
//                 "Community-led initiative addressing drinking water access and road connectivity in remote settlements.",
//             location: "Coordination Center, Bengaluru",
//             status: "past",
//         },
//         {
//             id: 3,
//             date: "May 10-12, 2026",
//             title: "Youth Reform & Social Change Symposium",
//             type: "Social Reform",
//             description:
//                 "Young leaders discuss challenges to harmful traditions, share success stories, and build support networks for systemic change.",
//             location: "Bengaluru Youth Hub",
//             status: "past",
//         },
//         {
//             id: 4,
//             date: "May 28, 2026",
//             title: "ST Classification Parliamentary Presentation",
//             type: "Advocacy",
//             description:
//                 "Community representatives present comprehensive evidence and historical documentation to parliamentary committee.",
//             location: "Parliament House, New Delhi",
//             status: "past",
//         },
//         {
//             id: 5,
//             date: "July 15-18, 2026",
//             title: "Devara Gubba Restoration Project",
//             type: "Cultural",
//             description:
//                 "Documentation and restoration of sacred shrines across Hattis with community participation and traditional protocols.",
//             location: "Various Hattis",
//             status: "upcoming",
//         },
//         {
//             id: 6,
//             date: "August 5, 2026",
//             title: "Education & Literacy Summit",
//             type: "Development",
//             description:
//                 "Strategy meeting on improving educational access and literacy rates in Kaadu Golla communities.",
//             location: "Bangalore",
//             status: "upcoming",
//         },
//         {
//             id: 7,
//             date: "September 10-12, 2026",
//             title: "Women's Health & Rights Conference",
//             type: "Social Reform",
//             description:
//                 "Focus on health infrastructure, ending Sutaka practice, and gender equality initiatives led by community women.",
//             location: "Hyderabad",
//             status: "upcoming",
//         },
//         {
//             id: 8,
//             date: "October 1-3, 2026",
//             title: "Harvest Festival & Thanksgiving Rituals",
//             type: "Cultural",
//             description:
//                 "Seasonal celebrations honoring successful herding seasons and community gratitude rituals.",
//             location: "Community Hattis",
//             status: "upcoming",
//         },
//     ];

//     const filteredEvents =
//         filter === "all"
//             ? events
//             : filter === "upcoming"
//                 ? events.filter((e) => e.status === "upcoming")
//                 : events.filter((e) => e.status === "past");

//     const typeStyles: { [key: string]: string } = {
//         Cultural: "bg-forest-100 text-forest-700",
//         Development: "bg-earth-100 text-earth-700",
//         "Social Reform": "bg-terracotta-100 text-terracotta-700",
//         Advocacy: "bg-cream-200 text-earth-800",
//     };

//     return (
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//             {/* Filter Buttons */}
//             <div className="flex flex-wrap gap-3 mb-8 justify-center">
//                 {["all", "upcoming", "past"].map((f) => (
//                     <button
//                         key={f}
//                         onClick={() => setFilter(f)}
//                         className={`px-6 py-2 rounded-lg font-semibold transition capitalize ${filter === f
//                                 ? "bg-terracotta-500 text-white"
//                                 : "bg-earth-100 text-earth-800 hover:bg-earth-200"
//                             }`}
//                     >
//                         {f === "all" ? "All Events" : f === "upcoming" ? "Upcoming" : "Past"}
//                     </button>
//                 ))}
//             </div>

//             {/* Events */}
//             <div>
//                 <div className="space-y-8 md:space-y-12">
//                     {filteredEvents.map((event) => (
//                         <div
//                             key={event.id}
//                             className="flex flex-col"
//                         >
//                             {/* Content */}
//                             <div>
//                                 <div
//                                     className={`bg-white rounded-lg p-6 border-2 ${event.status === "upcoming"
//                                             ? "border-terracotta-400"
//                                             : "border-earth-200"
//                                         } hover:shadow-lg transition`}
//                                 >
//                                     <div className="flex items-start justify-between gap-4 mb-3">
//                                         <div>
//                                             <time className="block text-sm font-semibold text-terracotta-600 mb-1">
//                                                 {event.date}
//                                             </time>
//                                             <h3 className="text-xl font-bold text-earth-800">
//                                                 {event.title}
//                                             </h3>
//                                         </div>
//                                         <span
//                                             className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${typeStyles[event.type]}`}
//                                         >
//                                             {event.type}
//                                         </span>
//                                     </div>
//                                     <p className="text-gray-700 mb-3">{event.description}</p>
//                                     <p className="text-sm text-gray-600 flex items-center gap-2">
//                                         📍 {event.location}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Call to Action */}
//             <div className="mt-16 bg-cream-100 rounded-lg p-8 md:p-12 text-center border-2 border-earth-200">
//                 <h3 className="text-2xl font-bold text-earth-800 mb-4">
//                     Want to Participate or Organize?
//                 </h3>
//                 <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//                     We welcome community members, partners, and allies to participate in
//                     or support our events. Reach out to help organize celebrations,
//                     advocacy efforts, or cultural initiatives.
//                 </p>
//                 <button className="px-8 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition">
//                     Get Involved
//                 </button>
//             </div>
//         </section>
//     );
// }
"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  organizer:string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(db, "events"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Event, "id">),
      }));

      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
          Community Events
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Upcoming Events
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Stay connected with cultural gatherings, meetings, celebrations,
          and community initiatives happening across our community.
        </p>
      </div>

      {/* Events Grid */}
      {events.length === 0 ? (
        <div className="text-center py-20 border rounded-xl bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Events Yet
          </h2>
          <p className="text-gray-500 mt-2">
            New community events will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-3">
                📅 {event.date}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {event.title}
              </h2>

              <div className="flex items-center text-gray-600 mb-4">
                <p className="font-bold">Location of event 📍: </p> 
                <a href={event.location} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  View on Map
                </a>
              </div>

              {event.description && (
                <p className="text-gray-700 leading-relaxed">
                  <p className="font-bold">Event Description: </p> {event.description}
                </p>
              )}

              <div className="flex items-center text-gray-600 mb-4">
                <p className="font-bold">Organizer Contact Number: </p> 
                {event.organizer}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center border-t pt-10">
        <h3 className="text-2xl font-bold mb-3">
          Have an Event to Share?
        </h3>

        <p className="text-gray-600 max-w-xl mx-auto">
          Community members can contact the organizers to suggest cultural,
          educational, or social events for inclusion in the calendar.
        </p>
      </div>
    </section>
  );
}