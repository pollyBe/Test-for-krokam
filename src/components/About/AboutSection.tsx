import style from "./about.module.scss";
import { ContactUs } from "@/uiComponents/contactUs";

export const AboutSection = () => {
  return (
    <section className={style.about} id="about">
      <div className="container">
        <h2>About the project</h2>
        <div className={style.descr}>
          <p>
            Krokam is a platform for interactive audio guides and navigators
            that provides information about cultural, historical and natural
            sites in Belarus. It provides an opportunity to get acquainted with
            objects virtually and can become a good assistant in the area where
            the objects are located.
          </p>
          <p>
            The platform has been created and aimed at providing quality service
            and presenting the heritage of Belarus to everyone who is
            interested. In addition, it provides an opportunity to develop
            advertising to promote objects of cultural and historical
            significance, and increases the level of national self-awareness of
            the inhabitants of Belarus.
          </p>
          <p>
            The developments presented on the «Krokam» platform highlight
            information about various places or historical events, which allows
            the user to select an application according to their interests. Each
            application describes a particular point, gives a brief text and/or
            voice description, and shows its location on a map. Applications are
            designed to be used both in a regular web browser and as mobile
            applications for Android and iOS.
          </p>
          <p>
            The «Krokam» platform is open for further development by scientists,
            programmers, guides, and everyone else. Visitors have the
            opportunity to get acquainted with the developments, as well as
            leave feedback, order their own application or offer cooperation in
            the development of portals, sites and mobile systems, as well as
            audio guides for cities, museums and exhibitions.
          </p>
          <p>
            We always welcome feedback, open to suggestions and new projects for
            you and your needs! If you have any ideas for improving the service
            or feedback on our work, please contact us at info@krokam.com. If
            you would like to discuss the development of an audio guide or
            navigator, please fill out the form. We look forward to
            collaborating!
          </p>
        </div>
      </div>
      <ContactUs />
    </section>
  );
};
