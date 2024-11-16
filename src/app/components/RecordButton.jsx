import React from "react";
import { classnames } from "../utils/general";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecordButton = ({ handleRecord, processing }) => {
    return (
        <button
            onClick={handleRecord}
            className={classnames("border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",)}
        >
            {processing ? "Recording... " : "Record "} <FontAwesomeIcon icon={faMicrophone} />
      </button>
    )
}
    
export default RecordButton;