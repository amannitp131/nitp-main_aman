import { FiDownload } from "react-icons/fi";
import { Calendar, Star } from "lucide-react";

const FormatDate = ({ time }) => {
  if (!time || isNaN(new Date(time).getTime())) return <>N/A</>;

  return (
    <>
      {new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(time))}
    </>
  );
};

export const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className="p-3 flex items-start gap-2">
     {imp && (
      <Star className="h-4 w-4 mt-1 flex-shrink-0 text-yellow-500 fill-yellow-500" />
    )}
    <div className="flex-1 bg-transparent">
      <h3>{detail}</h3>
      <p>
        <span className="text-neutral-400 text-xs">
          <FormatDate time={time} />
        </span>
      </p>
      {Array.isArray(attachments) && attachments.length > 0 && (
        <ul className="text-xs">
          {attachments.map((attachment, index) => (
            <li key={index} className="mb-1">
              {attachment.typeLink ? (
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-800 hover:text-red-900"
                >
                  <FiDownload className="inline-block text-red-800 hover:text-red-900" />
                  <span className="text-red-800 hover:text-red-900">
                    {attachment.caption || "View Notice"}
                  </span>
                </a>
              ) : (
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-800 hover:text-red-900"
                >
                  <FiDownload className="inline-block text-red-800 hover:text-red-900" />
                  <span className="text-red-800 hover:text-red-900">
                    {attachment.caption || "View Notice"}
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-red-800 hover:text-red-900"
        >
          <span className="text-red-800 hover:text-red-900">View Notice</span>
        </a>
      )}
    </div>
  </div>
);
