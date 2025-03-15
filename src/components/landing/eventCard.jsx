import { Calendar, MapPin, Download, ExternalLink } from "lucide-react";

const FormatDate = ({ time }) => {
  if (!time || isNaN(new Date(time).getTime())) return <>N/A</>;

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(time));

  return <>{formattedDate}</>;
};

export const Eventcard = ({
  detail,
  time,
  attachments,
  location,
  event_link,
  doclink,
}) => {
  const safeParseJSON = (data, fallback) => {
    try {
      const parsed = JSON.parse(data);
      return parsed;
    } catch (e) {
      return fallback;
    }
  };
  const parsedAttachments = typeof attachments === "string" 
    ? safeParseJSON(attachments, [])
    : [];
  const parsedEventLink = event_link
    ? safeParseJSON(event_link, null)
    : null;

  return (
    <div className="m-1 group/item p-3 transition-all hover:bg-purple-50 ">
      <p className="mb-3 text-sm text-gray-700">{detail}</p>
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Calendar className="h-4 w-4" />
        <span>{time}</span>
      </div>
      <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>
      {parsedAttachments && parsedAttachments.length > 0 && (
        <div className="flex flex-col gap-2 mb-3">
          {parsedAttachments.map((attachment, index) => (
            <a
              key={index}
              href={attachment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
            >
              <Download className="h-4 w-4" />
              {attachment.caption || "Event Attachment"}
            </a>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-2">
        {doclink && (
          <a
            href={doclink.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
          >
            <ExternalLink className="h-4 w-4" />
            Event Registration
          </a>
        )}
        {parsedEventLink?.url && (
          <a
            href={parsedEventLink.url.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
          >
            <ExternalLink className="h-4 w-4" />
            Event Link
          </a>
        )}
      </div>
    </div>
  );
};

