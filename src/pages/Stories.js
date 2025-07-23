import React from 'react';

export default function Stories() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center text-primary mb-4"></h1>
      <p className="lead text-muted text-center mb-5">
        Real stories of transformation from individuals and communities across Northern Nigeria.
      </p>

      {/* Story 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img
            src="/path-to-your-image1.jpg"
            alt="Success story 1"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-7">
          <h3 className="text-success">Amina – The Young Inventor</h3>
          <p>
            At just 10 years old, Amina from Katsina built a simple water filtration device using recycled bottles and charcoal after joining our STEM camp.
            With support from her mentor, she went on to present it to her local council and inspire dozens of other girls in her neighborhood.
          </p>
          <p className="text-muted"><em>"Before this program, I didn’t know girls could build things. Now, I want to be an engineer!" – Amina</em></p>
        </div>
      </div>

      {/* Story 2 */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-5">
          <img
            src="/path-to-your-image2.jpg"
            alt="Success story 2"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-7">
          <h3 className="text-danger">Garba – From Herding to Coding</h3>
          <p>
            Garba, 16, used to spend most of his days herding goats in Bauchi. Through our weekend coding club, he learned HTML and CSS. Today, he teaches basic tech skills to other children in his community while dreaming of building apps for farmers.
          </p>
          <p className="text-muted"><em>"KodeKamp made me believe that my background doesn’t define my future." – Garba</em></p>
        </div>
      </div>

      {/* Story 3 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img
            src="/path-to-your-image3.jpg"
            alt="Success story 3"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-7">
          <h3 className="text-info">Community Uplift in Kano</h3>
          <p>
            After participating in our Community Leadership track, a group of youth in Kano launched a weekend learning hub that now serves over 50 children weekly. With ongoing training and micro-grants, the hub has become a self-sustaining model of community-led change.
          </p>
          <p className="text-muted"><em>"We’re no longer waiting for change – we’re building it ourselves." – Youth Leader, Kano</em></p>
        </div>
      </div>
    </div>
  );
}
