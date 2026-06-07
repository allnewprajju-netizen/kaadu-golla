// "use client";

// import { useEffect, useState } from "react";
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
// } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { auth } from "@/lib/firebase";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
//   User,
// } from "firebase/auth";

// interface Event {
//   id: string;
//   title: string;
//   date: string;
//   location: string;
//   description: string;
//   organizer:string;
// }

// export default function AdminPage() {
//   const [events, setEvents] = useState<Event[]>([]);

//   const [form, setForm] = useState({
//     title: "",
//     date: "",
//     location: "",
//     description: "",
//     organizer:"",
//   });

//   const loadEvents = async () => {
//     try {
//       const snapshot = await getDocs(collection(db, "events"));

//       const data = snapshot.docs.map((docItem) => ({
//         id: docItem.id,
//         ...(docItem.data() as Omit<Event, "id">),
//       }));

//       setEvents(data);
//     } catch (error) {
//       console.error("Failed to load events:", error);
//     }
//   };

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const addEvent = async () => {
//     if (
//       !form.title ||
//       !form.date ||
//       !form.location ||
//       !form.description ||
//       !form.organizer
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       await addDoc(collection(db, "events"), {
//         title: form.title,
//         date: form.date,
//         location: form.location,
//         description: form.description,
//         organizer: form.organizer,
//       });

//       alert("Event Added");

//       setForm({
//         title: "",
//         date: "",
//         location: "",
//         description: "",
//         organizer:"",
//       });

//       loadEvents();
//     } catch (error) {
//       console.error("Failed to add event:", error);
//       alert("Failed to add event");
//     }
//   };

//   const deleteEvent = async (id: string) => {
//     const confirmed = confirm(
//       "Are you sure you want to delete this event?"
//     );

//     if (!confirmed) return;

//     try {
//       await deleteDoc(doc(db, "events", id));

//       loadEvents();
//     } catch (error) {
//       console.error("Failed to delete event:", error);
//       alert("Failed to delete event");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold mb-8">
//         Events Admin Panel
//       </h1>

//       {/* Add Event Form */}
//       <div className="bg-white border rounded-lg p-6 mb-10 space-y-4">
//         <h2 className="text-2xl font-semibold">
//           Add New Event
//         </h2>

//         <input
//           type="text"
//           placeholder="Event Title"
//           value={form.title}
//           onChange={(e) =>
//             setForm({ ...form, title: e.target.value })
//           }
//           className="w-full border rounded-lg p-3"
//         />

//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) =>
//             setForm({ ...form, date: e.target.value })
//           }
//           className="w-full border rounded-lg p-3"
//         />

//         <input
//           type="text"
//           placeholder="(You can paste the google maps location link here) Location:"
//           value={form.location}
//           onChange={(e) =>
//             setForm({ ...form, location: e.target.value })
//           }
//           className="w-full border rounded-lg p-3"
//         />

//         <textarea
//           placeholder="Description"
//           rows={5}
//           value={form.description}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               description: e.target.value,
//             })
//           }
//           className="w-full border rounded-lg p-3"
//         />

//         <textarea
//           placeholder="Organizer Contact number"
//           rows={5}
//           value={form.organizer}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               organizer: e.target.value,
//             })
//           }
//           className="w-full border rounded-lg p-3"
//         />

//         <button
//           onClick={addEvent}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
//         >
//           Add Event
//         </button>
//       </div>

//       {/* Existing Events */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-6">
//           Existing Events
//         </h2>

//         {events.length === 0 ? (
//           <p>No events found.</p>
//         ) : (
//           <div className="space-y-4">
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className="border rounded-lg p-5 bg-white"
//               >
//                 <h3 className="text-xl font-bold">
//                   {event.title}
//                 </h3>

//                 <p className="text-gray-600 mt-1">
//                   📅 {event.date}
//                 </p>

//                 <p className="text-gray-600">
                    
//                   📍 {event.location}
//                 </p>

//                 <p className="mt-3">
//                   {event.description}
//                 </p>

//                 <button
//                   onClick={() => deleteEvent(event.id)}
//                   className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//                 >
//                   Delete Event
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { db, auth } from "@/lib/firebase";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  organizer: string;
}

const ADMIN_EMAIL = "prajju.c18@gmail.com";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState<Event[]>([]);

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    organizer: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const loadEvents = async () => {
    try {
      const snapshot = await getDocs(collection(db, "events"));

      const data = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as Omit<Event, "id">),
      }));

      setEvents(data);
    } catch (error) {
      console.error("Failed to load events:", error);
    }
  };

  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      loadEvents();
    }
  }, [user]);

  const addEvent = async () => {
    if (
      !form.title ||
      !form.date ||
      !form.location ||
      !form.description ||
      !form.organizer
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "events"), {
        title: form.title,
        date: form.date,
        location: form.location,
        description: form.description,
        organizer: form.organizer,
      });

      alert("Event Added");

      setForm({
        title: "",
        date: "",
        location: "",
        description: "",
        organizer: "",
      });

      loadEvents();
    } catch (error) {
      console.error("Failed to add event:", error);
      alert("Failed to add event");
    }
  };

  const deleteEvent = async (id: string) => {
    const confirmed = confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "events", id));
      loadEvents();
    } catch (error) {
      console.error("Failed to delete event:", error);
      alert("Failed to delete event");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={login}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  if (user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p>Access denied for {user.email}</p>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Events Admin Panel
          </h1>
          <p className="text-gray-600 mt-2">
            Logged in as {user.email}
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Add New Event
        </h2>

        <input
          type="text"
          placeholder="Event Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full border rounded-lg p-3"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Google Maps link or location"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Description"
          rows={5}
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Organizer Contact Number"
          value={form.organizer}
          onChange={(e) =>
            setForm({
              ...form,
              organizer: e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        />

        <button
          onClick={addEvent}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Add Event
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Existing Events
        </h2>

        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="border rounded-lg p-5 bg-white"
              >
                <h3 className="text-xl font-bold">
                  {event.title}
                </h3>

                <p className="text-gray-600 mt-1">
                  📅 {event.date}
                </p>

                <p className="text-gray-600">
                  📍 {event.location}
                </p>

                <p className="mt-3">
                  {event.description}
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  Organizer: {event.organizer}
                </p>

                <button
                  onClick={() => deleteEvent(event.id)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete Event
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}