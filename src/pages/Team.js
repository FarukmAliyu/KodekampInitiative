import React from 'react';
import asmaImg from '../assets/IMG_20210219_110925.jpg';

export default function Team() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center text-primary mb-4"></h1>

      <div className="row justify-content-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src={asmaImg}
            alt="Asma'u Aliyu"
            className="img-fluid rounded-circle mb-3 shadow"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
         <h4 className="text-success">Asma'u Aliyu</h4> <p className="text-muted">Founder & Executive Director</p> <p className="lead"> Asma'u brings years of grassroots educational experience. Her vision for KodeKamp is rooted in equity, local empowerment, and access for all African children. Her leadership ensures our programs remain community-focused and impact-driven. </p> </div> </div> <hr className="my-5" /> <div className="text-center"> <h5 className="text-secondary">More Team Members Coming Soon</h5> <p className="text-muted">We’re growing! This space will showcase the passionate educators, mentors, and coordinators who join our mission.</p> </div> </div> );}