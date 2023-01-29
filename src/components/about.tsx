import React from "react";
import styles from "@/styles/Home.module.css";
// import Me from "./me";
import Nav from "./nav";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosRedo,
  IoIosCode,
  IoIosMoon,
  IoIosSunny,
} from "react-icons/io";
import themeContext from "@/components/themeContext";

const DATA = [
  {
    title: "Twitter",
    href: "https://twitter.com/whilejosh",
    icon: <IoLogoTwitter size={20} />,
  },
  {
    title: "Github",
    href: "https://github.com/joshnwosu",
    icon: <IoLogoGithub size={20} />,
  },
];

const About: React.FC = () => {
  const theme = React.useContext(themeContext);

  return (
    <div className={styles.about}>
      <div>
        <div>
          <div>
            <h1 className={styles.name}>
              Joshua Nwosu{" "}
              <span>
                <IoIosSunny size={30} color={theme["textColor"]} />
              </span>
            </h1>
            <h2 className={styles.title}>
              <IoIosCode size={16} style={{ marginRight: 5 }} color="#949495" />
              <span>Software Engineer</span>
            </h2>
          </div>
          <div>
            <p className={[styles.desc, styles.mt_32].join(" ")}>
              Hi, I'm Joshua Nwosu a software engineer (and sometimes UI/UX
              designer). <br />I build open-source{" "}
              <a href="#" target="_blank">
                front-end libraries
              </a>{" "}
              and also contribute to open-source projects with over 5+ years of
              experience.
            </p>
            <p className={[styles.desc, styles.mt_8].join(" ")}>
              On my spare time, I share what I learn on my blog and speak at
              tech conferences around the world.
            </p>
          </div>
        </div>
        <Nav />
      </div>

      <div className={styles.footer}>
        <div className={styles.profile_pic}>
          {/* <Image src= /> */}
          <img
            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
            src="https://media.licdn.com/dms/image/C5603AQEEfwyQYyHXHw/profile-displayphoto-shrink_800_800/0/1613826760366?e=1680134400&v=beta&t=sltVISQB9nr2CCn4VSuxDsUItup-uaT7HRc-olvo7Tc"
          />
        </div>
        <ul className={styles.socials}>
          {DATA.map(({ title, icon, href }, index) => (
            <li key={index} className={styles.socials_li}>
              <a href={href} target="_blank" className={styles.socials_link}>
                {icon}
                <span className={styles.socials_title}>{title}</span>
                <IoIosRedo />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
