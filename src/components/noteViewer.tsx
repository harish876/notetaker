import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { RouterOutputs } from "@/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];
function NoteViewer({ note, onDelete }: { note: Note; onDelete: () => void }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  return (
    <div className="card my-5 w-full bg-base-100 p-4 shadow-xl">
      <div className="card-body m-0 p-3">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <button className="btn-primary btn w-1/6 py-1" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteViewer;
