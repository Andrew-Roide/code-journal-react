import { useState } from 'react';

const data = {
  entries: [],
  nextEntryId: 1,
};

function GetTitleValue({ onTitleChange }) {
  const [title, setTitle] = useState('');

  function handleTitleChange(event) {
    const titleValue = event.target.value;
    setTitle(titleValue);
    onTitleChange(titleValue);
  }

  return (
    <div>
      <label className="margin-bottom-1 d-block" htmlFor="title">
        Title
      </label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
  );
}

function GetPhotoUrlValue({ onPhotoUrlChange }) {
  const [photoUrl, setPhotoUrl] = useState('');

  function handlePhotoUrlChange(event) {
    const photoUrlValue = event.target.value;
    setPhotoUrl(photoUrlValue);
    onPhotoUrlChange(photoUrlValue);
  }

  return (
    <>
      <div>
        <label className="margin-bottom-1 d-block" htmlFor="formURL">
          Photo URL
        </label>
        <input
          required
          className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
          type="text"
          name="formURL"
          value={photoUrl}
          onChange={handlePhotoUrlChange}
        />
      </div>
    </>
  );
}

function GetNotesValue({ onNotesChange }) {
  const [notes, setNotes] = useState('');

  function handleNotesChange(event) {
    const notesValue = event.target.value;
    setNotes(notesValue);
    onNotesChange(notesValue);
  }

  return (
    <div className="column-full">
      <label className="margin-bottom-1 d-block" htmlFor="formNotes">
        Notes
      </label>
      <textarea
        className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
        name="formNotes"
        cols={30}
        rows={10}
        value={notes}
        onChange={handleNotesChange}
      />
    </div>
  );
}

export default function EntryForm() {
  const [formData, setFormData] = useState({
    title: '',
    photoUrl: '',
    notes: '',
  });

  function handleTitleChange(titleValue) {
    setFormData((prevData) => ({ ...prevData, title: titleValue }));
  }

  function handlePhotoUrlChange(photoUrlValue) {
    setFormData((prevData) => ({ ...prevData, photoUrl: photoUrlValue }));
  }

  function handleNotesChange(notesValue) {
    setFormData((prevData) => ({ ...prevData, notes: notesValue }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedData = {
      entries: [...data.entries, formData],
      nextEntryId: data.nextEntryId + 1,
    };

    const dataJSON = JSON.stringify(updatedData);
    localStorage.setItem('code-journal-data', dataJSON);
    setFormData(formData);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column-full d-flex justify-between">
            <h1>New Entry</h1>
          </div>
        </div>
        <form>
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                src={formData.photoUrl || 'images/placeholder-image-square.jpg'}
                alt="Entry Image Placeholder"
              />
            </div>

            <div className="column-half">
              <GetTitleValue onTitleChange={handleTitleChange} />
              <GetPhotoUrlValue onPhotoUrlChange={handlePhotoUrlChange} />
            </div>
          </div>
          <div className="row margin-bottom-1">
            <GetNotesValue onNotesChange={handleNotesChange} />
          </div>

          <div className="row">
            <div className="column-full d-flex justify-between">
              <button className="invisible delete-entry-button" type="button">
                Delete Entry
              </button>
              <button
                className="input-b-radius text-padding purple-background white-text"
                onClick={handleSubmit}>
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
