import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

function NoteEditor({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  return (
    <div className="card mt-2 w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Note title"
            className="input-ghost input w-full font-bold tracking-wide mt-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </h2>
        <CodeMirror
          value={code}
          width="100%"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setCode(value)}
          className="border border-primary"
          theme={dracula}
        />
        <div className="flex flex-row justify-end">
        <button
          onClick={() => {
            onSave({
              title,
              content: code
            })
            setCode("")
            setTitle('')
          }}
          className="btn-primary btn w-1/4 mt-4"
          disabled={code.trim().length === 0 || title.trim().length === 0}
        >
          Save
        </button>
        </div>
      </div>
    </div>
  );
}

export default NoteEditor;
