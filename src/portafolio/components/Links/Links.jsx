import React from "react";
import { Link } from "react-router-dom";
import { useCopyEmail } from "../../hooks/useCopyEmail";

export const Links = () => {

    const {onCopyEmail} = useCopyEmail();

  return (
    <>
        <Link to="https://github.com/rafaeldoleo14" target="_blank">
            <i class="ri-github-fill"></i>
        </Link>

        <Link to="https://www.linkedin.com/in/rafaelfdoleo/" target="_blank">
            <i class="ri-linkedin-box-fill"></i>
        </Link>

        <Link onClick={onCopyEmail}>
            <i class="ri-mail-line"></i>
        </Link>
    </>
  );
};
