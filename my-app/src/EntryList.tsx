import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { readEntries } from './data';

export default function EntryList() {
  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <button id="formLink" className="white-text form-link">
              NEW
            </button>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul">
            {readEntries().map((entry) => (
              <li key={entry.entryId} data-entry-id={entry.entryId}>
                <div className="row">
                  <div className="column-half">
                    <img
                      className="input-b-radius form-image"
                      src={entry.photoUrl}
                      alt={`Image of ${entry.title}`}
                    />
                  </div>
                  <div className="column-half">
                    <div className="row">
                      <div className="column-full d-flex justify-between">
                        <h3>{entry.title}</h3>
                        <FontAwesomeIcon icon={faPencil} cursor="pointer" />
                      </div>
                    </div>
                    <p>{entry.notes}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
