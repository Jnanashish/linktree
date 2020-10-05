import React from "react";
import "../main.css";

function Email() {
  return (
    <div>
      {/* Begin Mailchimp Signup Form */}
      <link
        href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t#mc_embed_signup{ font:14px Helvetica,Arial,sans-serif;  width:400px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n",
        }}
      />
      <div id="mc_embed_signup" style={{ margin: "auto" }}>
        <form
          action="https://gmail.us10.list-manage.com/subscribe/post?u=3db0f4e057feb1d15a0944372&id=54998f44a4"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              style={{ margin: "0 auto", maxWidth: "400px" }}
              type="email"
              defaultValue
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Email address"
              required
            />
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups
            <div
              style={{ position: "absolute", left: "-500px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_3db0f4e057feb1d15a0944372_54998f44a4"
                tabIndex={-1}
                defaultValue
              />
            </div> */}
            <div className="clear">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                style={{ margin: "5px auto", maxWidth: "400px" }}
              />
            </div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </div>
  );
}

export default Email;
