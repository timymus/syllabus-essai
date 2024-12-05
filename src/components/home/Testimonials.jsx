// Main Testimonials component
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonials-data';

export default function Testimonials() {
  return (
    <section className="
      py-12          /* Padding top/bottom - 3rem */
      bg-gray-50     /* Light gray background */
      overflow-hidden /* Hide overflow */
      md:py-20       /* Padding top/bottom on medium screens - 5rem */
      lg:py-24       /* Padding top/bottom on large screens - 6rem */
    ">
      <div className="
        relative      /* Enable relative positioning */
        max-w-7xl     /* Maximum width */
        mx-auto       /* Center horizontally */
        px-4          /* Padding left/right - 1rem */
        sm:px-6       /* Padding left/right on small screens - 1.5rem */
        lg:px-8       /* Padding left/right on large screens - 2rem */
      ">
        <div className="relative">
          <div className="
            text-center  /* Center text */
          ">
            <h2 className="
              text-3xl        /* Text size - extra large */
              tracking-tight  /* Tighter letter spacing */
              font-extrabold  /* Extra bold font weight */
              text-gray-900   /* Very dark gray text */
              sm:text-4xl     /* Larger text on small screens */
            ">
              Témoignages d'étudiants
            </h2>
            <p className="
              mt-4           /* Margin top - 1rem */
              max-w-3xl      /* Maximum width */
              mx-auto        /* Center horizontally */
              text-xl        /* Large text size */
              text-gray-500  /* Medium gray text */
            ">
              Découvrez les expériences de nos étudiants qui ont réussi leur projet d'études à l'étranger.
            </p>
          </div>
          <div className="
            mt-20          /* Margin top - 5rem */
          ">
            <div className="
              grid           /* Enable grid */
              grid-cols-1    /* One column by default */
              gap-6          /* Gap between items - 1.5rem */
              lg:grid-cols-3 /* Three columns on large screens */
            ">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}