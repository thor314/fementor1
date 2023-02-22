/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as FolderIcon } from "../assets/icon-folder.svg";
import { ReactComponent as DocumentIcon } from "../assets/icon-document.svg";
import { ReactComponent as UploadIcon } from "../assets/icon-upload.svg";

export default function TopHeader() {
  return (
    <div className="top-header">
      <Logo />
      <div className="icons">
        <button>
          <DocumentIcon />
        </button>
        <button>
          <FolderIcon />
        </button>
        <button>
          <UploadIcon />
        </button>
      </div>
    </div>
  );
}
