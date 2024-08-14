import React, { useEffect, useState } from "react";
import api from "../api";
import {
  LoadingIndicatorFullPage,
} from "../components/index";

function Home() {
  // State for managing notes
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserNotes();
  }, []);

  // Getting all user notes
  const getUserNotes = () => {
    setLoading(true);
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form (note creation) submission
  const handleCreateNote = (e) => {
    e.preventDefault();
    setLoading(true);

    // Add new note to notes array
    api
      .post("api/notes/", {
        title: formData["title"],
        description: formData["description"],
      })
      .then((res) => {
        if (res.status == 201) {
          // add new note into notes array
          setNotes((prevNotes) => [...prevNotes, res.data]);
          setLoading(false);
        } else {
          alert("Failed to create note.");
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });

    // Clear the form
    setFormData({ title: "", description: "" });
  };

  // Handle deleting a note
  const handleDeleteNote = (indexToDelete) => {
    setLoading(true);
    api
      .delete(`api/notes/delete/${indexToDelete}/`)
      .then((res) => {
        if (res.status == 204) {
          // remove deleted note from notes array
          setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== indexToDelete)
          );
          setLoading(false);
        } else {
          alert("Failed to delete note.");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <LoadingIndicatorFullPage />}
      <div style={{ display: "flex" }}>
        {/* Notes List Section */}
        <div style={{ flex: 1, marginRight: "20px", overflowY: "auto" }}>
          <h2>User Notes</h2>
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No notes available</p>
          )}
        </div>

        {/* Add Note Form Section */}
        <div
          style={{
            flex: 1,
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2>Add Note</h2>
          <form onSubmit={handleCreateNote}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
