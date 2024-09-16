import { Button } from "../../stories/Button-I/Button";
import { Link } from "react-router-dom";
import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.outer_container}>
        <div className={style.inner_container}>
          <div className={style.logo}>
            <div className={style.logo_images}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726278915/fa_bolt_keivmi.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726278861/ReevGig_c3kiwt.svg"
                alt=""
              />
            </div>
            <p className={style.logo_text}>
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div className={style.footer_links}>
            <div className={style.about}>
              <Link to={"/"} className={style.h3}>
                About
              </Link>

              <Link to="/" className={style.links}>
                Companies
              </Link>
              <Link to={"/"} className={style.links}>
                Pricing
              </Link>
              <Link to={"/"} className={style.links}>
                Terms
              </Link>
              <Link to={"/"} className={style.links}>
                Privacy
              </Link>
            </div>
            <div className={style.resource}>
              <Link to={"/"} className={style.h3}>
                Resources
              </Link>

              <Link to={"/"} className={style.links}>
                Help Docs
              </Link>
              <Link to={"/"} className={style.links}>
                Guide
              </Link>
              <Link to={"/"} className={style.links}>
                Contact Us
              </Link>
            </div>

            <div className={style.notification}>
              <div>
                <Link to={"#"} className={style.h3}>
                  Get job notifications
                </Link>
                <p className={style.latest_jobs}>
                  The latest job new, articles, sent to your inbox weekly
                </p>
              </div>

              <div className={style.footer_input}>
                <div className={style.input_container}>
                  <input type="text" placeholder=" reev@gmail.com" />
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726334776/Vector_ptxwr9.svg"
                    alt="profile emoji"
                  />
                </div>
                <Button
                  label={"Subscribe"}
                  size="small"
                  primary={true}
                  icon={false}
                  style={{
                    width: "120px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <hr className={style.hr} />
          <div className={style.foot_note}>
            <p>2024 @ ReevGig. All rights reserved.</p>
            <div className={style.social_links}>
              <Link to={"#"} className={style.socials}>
                <img
                  src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726337693/Facebook_diwfby.svg"
                  alt=""
                />
              </Link>
              <Link to={"/"} className={style.socials}>
                <img
                  src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726337693/Instagram_cwl3ok.svg"
                  alt=""
                />
              </Link>
              <Link to={"/"} className={style.socials}>
                <img
                  src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726337693/LinkedIn_wz4doc.svg"
                  alt=""
                />
              </Link>

              <Link to={"/"} className={style.socials}>
                <img
                  src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726337794/Twitter_rerq8m.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
