import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formId = "CDgMCP9I";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendDisabled, setSendDisabled] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    if (form.email && form.message && form.name) {
      setSendDisabled(false);
    } else {
      setSendDisabled(true);
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const postSubmission = async () => {
    const payload = {
      ...form,
      // "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);

      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: " " });
      // recaptchaRef.current.reset();
    } catch (error) {
      alert("Ahh, something went wrong. Please try again.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await postSubmission();
    setLoading(false);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.65] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Want to discuss a project or just chat? Just leave me a message!
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-light"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-light"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-light"
            />
          </label>

          <button
            type="submit"
            className="bg-secondaryBg py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-25"
            disabled={sendDisabled}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
