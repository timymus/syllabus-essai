// Component for individual testimonial cards
import PropTypes from 'prop-types';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="
      bg-white        /* Set background to white */
      rounded-lg      /* Rounded corners - large */
      shadow-lg      /* Large shadow effect */
      overflow-hidden /* Hide overflow content */
    ">
      {testimonial.logo && (
        <div className="
          flex            /* Enable flexbox */
          justify-center  /* Center horizontally */
          pt-6           /* Padding top - 1.5rem */
        ">
          <img 
            src={testimonial.logo} 
            alt={`${testimonial.university} logo`}
            className="
              h-24           /* Height - 6rem */
              w-auto         /* Auto width to maintain aspect ratio */
              object-contain  /* Maintain aspect ratio while fitting */
            "
          />
        </div>
      )}
      <div className="
        p-8            /* Padding all around - 2rem */
      ">
        <div className="relative">
          <svg
            className="
              absolute         /* Position absolutely */
              top-0           /* Align to top */
              left-0          /* Align to left */
              transform       /* Enable transform */
              -translate-x-3  /* Move left 0.75rem */
              -translate-y-12 /* Move up 3rem */
              h-12           /* Height 3rem */
              w-12           /* Width 3rem */
              text-indigo-500 /* Indigo color */
            "
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="
            relative     /* Enable relative positioning */
            mt-8        /* Margin top - 2rem */
            text-lg     /* Large text size */
            text-gray-800 /* Dark gray text */
            pl-4        /* Padding left - 1rem */
          ">{testimonial.content}</p>
        </div>
        <div className="
          mt-8         /* Margin top - 2rem */
        ">
          <div className="
            flex         /* Enable flexbox */
            items-center /* Center items vertically */
          ">
            <div className="
              ml-4        /* Margin left - 1rem */
            ">
              <div className="
                text-base     /* Base text size */
                font-medium   /* Medium font weight */
                text-gray-900 /* Very dark gray text */
              ">{testimonial.author}</div>
              <div className="
                text-base     /* Base text size */
                text-gray-500 /* Medium gray text */
              ">{testimonial.role}</div>
              <div className="
                text-sm       /* Small text size */
                text-indigo-600 /* Indigo text color */
              ">{testimonial.university}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    logo: PropTypes.string
  }).isRequired
};