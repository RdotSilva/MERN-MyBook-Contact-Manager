import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import moment from "moment";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, address, phone, type, date } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <h4 className="text-primary text-left">
        {moment(date).format("MM/DD/YYYY")}
      </h4>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope">
              <a className="m" href={"mailto:" + email}>
                {email}
              </a>
            </i>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone-volume">
              <a className="m" href={"tel:" + phone}>
                {phone}
              </a>
            </i>
          </li>
        )}
        {address && (
          <li>
            <i className="fas fa-map">
              <a
                className="m"
                href={"http://maps.google.com/?q=" + address}
                target="_blank"
              >
                {address}
              </a>
            </i>
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm m" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
