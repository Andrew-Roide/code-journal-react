import { useState } from 'react';
import { addEntry } from './data';
import './data';

export default function EntryForm() {
  const [formData, setFormData] = useState({
    title: '',
    photoUrl: '',
    notes: '',
  });

  const { title, photoUrl, notes } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEntry(formData);
    setFormData({
      title: '',
      photoUrl: '',
      notes: '',
    });
  }

  return (
    <main>
      <div className="container" data-view="entry-form">
        <div className="row">
          <div className="column-full d-flex justify-between">
            <h1>New Entry</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                src={photoUrl || 'images/placeholder-image-square.jpg'}
                alt="image of entry image"
              />
            </div>
            <div className="column-half">
              <label className="margin-bottom-1 d-block" htmlFor="title">
                Title
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <label className="margin-bottom-1 d-block" htmlFor="photoUrl">
                Photo URL
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                name="photoUrl"
                value={photoUrl}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row margin-bottom-1">
            <div className="column-full">
              <label className="margin-bottom-1 d-block" htmlFor="notes">
                Notes
              </label>
              <textarea
                required
                className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                name="notes"
                cols={30}
                rows={10}
                value={notes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="column-full d-flex justify-between">
              <button className="invisible delete-entry-button" type="button">
                Delete Entry
              </button>
              <button
                className="input-b-radius text-padding purple-background white-text"
                type="submit">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
