import React from "react";
import { classnames } from "../utils/general";
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RunButton = ({ handleCompile, code, processing }) => {
    return (
        <button
            onClick={handleCompile}
            disabled={!code}
            className={classnames(
            "border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
            !code ? "opacity-50" : ""
            )}
        >
            {processing ? "Running... " : "Run "} <FontAwesomeIcon icon={faRocket} />
      </button>
    )
}
    
export default RunButton;