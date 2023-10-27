import React from "react";
import "./style.css";
import myPdf from "../assets/Resume-Trinay Bhati (3).pdf";
import profile from "../assets/home-shinobi.png";

import MySvg from "../assets/logo-FDOECSF6.svg";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Import the icons you need

const Resume = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-image">
          <img src={MySvg} className="rotate-svg" alt="Logo" />
        </div>
        <div className="header-heading">
          <div className="title">Resume</div>
        </div>
      </header>
      <section className="content-title">
        <div className="title-heading-resume">
          <div className="typewriter ">
            Download <span className="title-change">Resume </span>
            here
          </div>
        </div>
      </section>
      <div className="buttons">
        <button class="btn">
          <a
            href="https://s3.amazonaws.com/attachments.angel.co/9318704-a046bfc75921e33d204db9840e6b75a6.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQX7ANMFK6%2F20231026%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231026T132022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHwZ63tF1G%2BqKGwoYTN6ZdkY3pxjby1F4sJ22EeSZCw%2FAiEA%2F26DhFkLGjEB5V3smU3g%2F58W%2B5MEu%2BAYuLTZrB1l%2FGEqiwUIdhAAGgwyMDc1ODMyNzA0MzMiDOQlVhZjKYG3qlZXCyroBJMFExq5Exo0HVL9L0bPDpkSyf6ivpEWvJAh9FCMej3rfVG%2BzkGVUGxTw6lcUB%2FdJmzzyVpmDXhxU%2BiNolrqg1QZhnHgv8zjy39pF50n%2FAVcs6ktJr%2FmOQ6EvUdLkPMiYHfr3Safmbrz3xvMlRKd43gXuZ%2Fa0sEdLx3EAOchLdEzbT88ixJqxivNDZ44oV4Msf17HJQ3UzXl7QbdChiDXdi26sLmNKV4W7kXttYfFbc1Y0M6t8nN2akxptXUy2O3OGbkaz22izFHfn8duKSSvLFH%2BZrcy5AgA3OQoABsDkfKVeOauLwCO%2F2LqBGpmQaq8Ta%2BLosmgcZuwljW3vV79pzwGpyedbO8Cpxj%2FcIdNetkOqTK7XA3tEdIxENx16qxzyuqD0fGojjNXe6rjWc6KCHtHSU3CZ69tGLMvsfJNuLZPEHXvcl7ETsQabGD1PaFaDvsFi9LXg5ztmRn1zEFntDjmQOMFHdqHdxIeKXOYUvfXmAvmad25xV2ufhXT6JcYAPF6tm1HBBPY84ETN1%2F41kovKghNyYK9%2FYQDSehSkBP9nX8f8CClkhRkYO7JphgE11bVT401EtvIJ2DrwvywyPaV73mFo1vlLSH0ntgB%2F9CzKsgA018ksZOaat1jZVZuDUGV0j5EQT7jjSftZFOQnUiBHCeCHRZWypXfYzTt6C8JYVsZdkl4RcPV1cboBFh8FlqKm28Ixll1p288MYENV5TZ%2FmMRehCWxL2A1G827I2NmSoXqngP9FUMK3Q%2BVTMyit8zzw4L7O%2B8c%2BX%2B%2FW9KJ9HjmSisZkuuNjzuP6rZlNurnRC0I4ierowmszpqQY6mgHuVJ8yriJJAD21Cv121aBJ26HZ76WdNOMDjBvsTEHNre9NGIdTmlug0%2BhHeIFY3RlYVFyhKkWGRSTkyggdx5O0hl%2Fs2XG1YPRRpvnlzJja3bUIbIswVqU0SXaIdojdubeVb%2B7xDO8RNVYaUl%2FLfnuCTez%2Bs7rWOQAYwgsPxr81tUQMv4HRGn5f1%2BrtzYrpWC%2FFje6zDRSTo5yk&X-Amz-SignedHeaders=host&X-Amz-Signature=de164cc48814cb4891db324393bc53295f5ed1bfceaf1de9c3b3babae7cf5594"
            target="_blank"
          >
            View
          </a>
        </button>
        <button class="btn">
          <a href={myPdf} download>
            Download
          </a>
        </button>
      </div>
      <br />
      <img src={profile} height="400px" />
    </div>
  );
};

export default Resume;
