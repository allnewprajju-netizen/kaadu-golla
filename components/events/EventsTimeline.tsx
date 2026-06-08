"use client";

import { useEffect, useState } from "react";
// THE FIX: Imported onSnapshot instead of getDocs
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  organizer: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  // Added a loading state to improve the user experience while data stream connects
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Point to your collection
    const eventsCollection = collection(db, "events");

    // 2. THE FIX: Attach a real-time listener that fires every time Firestore updates
    const unsubscribe = onSnapshot(eventsCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Event, "id">),
      }));

      setEvents(data);
      setIsLoading(false);
    }, (error) => {
      console.error("Error listening to events collection: ", error);
      setIsLoading(false);
    });

    // 3. CLEANUP: Tells Next.js to turn off the listener if the user leaves this page
    return () => unsubscribe();
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

      {/* Events Grid / Loading States */}
      {isLoading ? (
        <div className="text-center py-20">
          <p className="text-gray-500 animate-pulse text-lg">Loading live events...</p>
        </div>
      ) : events.length === 0 ? (
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
                <div className="text-gray-700 leading-relaxed mb-4">
                  <p className="font-bold">Event Description: </p> 
                  <p>{event.description}</p>
                </div>
              )}

              <div className="flex items-center text-gray-600">
                <p className="font-bold">Organizer Contact Number: </p> 
                <span className="ml-1">{event.organizer}</span>
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
