"use client";

import Image from "next/image";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Image
          src={imgUrl}
          alt={`${title} Project Image`}
          className="img-fluid"
          width={300}
          height={200}
          priority
        />
        <div className="proj-txtx">
          <h4 className="font-itckabelM">{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;