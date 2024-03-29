"use client";
import { CKEditor as CKEditorComponent } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "ckbox/dist/styles/themes/lark.css";

// CKBox is a peer dependency of CKEditor. It must be present in the global scope.
// Importing UMD build of CKBox will make sure that `window.CKBox` will be available.
import "ckbox/dist/ckbox";


const CkComments = () =>{
  const config = {
    ckbox: {
      tokenUrl: `${process.env.NEXT_PUBLIC_URL}/api/ckbox`,
      theme: "lark",
    },
    toolbar: [
      "ckbox",
      "imageUpload",
      "|",
      "heading",
      "|",
      "undo",
      "redo",
      "|",
      "bold",
      "italic",
      "|",
      "blockQuote",
      "indent",
      "link",
      "|",
      "bulletedList",
      "numberedList",
    ],
  };

  return (
    <>
      <style>{`.ck-editor__editable_inline { min-height: 400px; }`}</style>
      <CKEditorComponent editor={ClassicEditor} config={config} />
    </>
  );
}

export default CkComments;

