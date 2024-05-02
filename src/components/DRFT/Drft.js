import { useEffect, useRef, useState } from "react";
import { EditorState } from "draft-js";
import './drft.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Drft = ({onEditorStateChange,editorState,titleDreft,refAnsweComment}) => {


const refdad=useRef(refAnsweComment)
  
    return ( 
        <>
            <div style={{marginTop:"0px",padding:"0%"}}>
      <h1 className="titledrft">اشتراک گذاری نظر</h1>
      <h2 className="titledrft">نظرات کاربران در رابطه با این {titleDreft}</h2>
      <div style={{ border: "1px solid black", padding: '0px', minHeight: '300px' }}>
        <Editor ref={refdad} style={{direction:"rtl"}}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
        
        </>
     );
}
 
export default Drft;