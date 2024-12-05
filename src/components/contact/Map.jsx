// Map component using Google Maps iframe
export default function Map() {
  return (
    <div className="w-full mt-16">
      <div className="aspect-video w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5000862407496!2d3.0579626772161204!3d36.734565772266066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad79a9b05aef%3A0x8a3880ac69f544f7!2sSyllabus%20International%20Education%20Consulting!5e0!3m2!1sen!2sus!4v1733247523578!5m2!1sen!2sus"
          className="w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}