import style from "./contacts.module.scss";
import { ContactUs } from "@/uiComponents/contactUs";
import { Form } from "@/components/Form";

export const Contacts = () => {
  return (
    <section className={style.contactsSection} id="contacts">
      <div className="container">
        <h2>Contacts</h2>
        <p>
          Whether you have a question about collaboration or usage, drop us a
          message via form below.
        </p>
        <Form />
        <ContactUs />
      </div>
    </section>
  );
};
