import React from "react";
import cv from './assets/CV_ATS.pdf'

const Link = () => {
    const download_cv = () => {
        window.open(
            cv
        );
    };

    const gotoLinkedIn = () => {
        window.open(
            "https://www.linkedin.com/in/danydarmawan/", "_blank")
    }
    const gotoGithub = () => {
        window.open(
            "https://github.com/RazoelZ", "_blank")
    }

    return (
        <div>
            <h1>Link</h1>
        </div>
    );
}

export default Link;