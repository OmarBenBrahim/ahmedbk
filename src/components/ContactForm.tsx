import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgvygall");

  if (state.succeeded) {
    return (
      <div className="py-12 text-center text-xl text-chart-3">
        Thank you! Your message has been sent.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2">
        <span className="uppercase text-sm tracking-widest text-chart-2">Name</span>
        <input
          type="text"
          name="name"
          required
          className="bg-transparent border border-chart-2 p-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-chart-3 transition"
          placeholder="Your name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="uppercase text-sm tracking-widest text-chart-2">Email</span>
        <input
          type="email"
          name="email"
          required
          className="bg-transparent border border-chart-2 p-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-chart-3 transition"
          placeholder="you@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      {/* Radio Button Group */}
      <fieldset className="flex flex-col gap-4 mt-2">
        <legend className="uppercase text-sm tracking-widest text-chart-2 mb-2">
          How did you reach out to Ahmed?
        </legend>
        {[
          "Instagram",
          "Behance",
          "Web Design",
          "Facebook",
          "LinkedIn",
          "Referral",
          "Other",
        ].map((option) => (
          <label key={option} className="flex items-center gap-3">
            <input
              type="radio"
              name="reach_out_by"
              value={option}
              required
              className="cursor-pointer appearance-none w-5 h-5 rounded-full border border-chart-2 checked:bg-chart-2 checked:border-chart-2 transition"
            />
            <span className="text-base text-foreground">{option}</span>
          </label>
        ))}
        <ValidationError prefix="Reach Out By" field="reach_out_by" errors={state.errors} />
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="uppercase text-sm tracking-widest text-chart-2">
          Information about your brand
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="bg-transparent border border-chart-2 p-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-chart-3 transition resize-none"
          placeholder="Feel free to contribute with other pertinent information about your brand."
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </label>
      <button
        type="submit"
        disabled={state.submitting}
        className="cursor-pointer w-full bg-chart-3 text-white uppercase tracking-widest py-4 mt-8 flex items-center justify-center gap-2 text-lg font-light hover:bg-chart-3/90 transition"
      >
        Submit
        <ArrowUpRight size={24} strokeWidth={1} />
      </button>
    </form>
  );
}